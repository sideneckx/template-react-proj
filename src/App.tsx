import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { useSetRecoilState } from 'recoil';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import LocalStorage from './helper/local-storage';
import About from './pages/about/about';
import { Homepage } from './pages/homepage/homepage';
import { NotFound } from './pages/not-found/not-found';
import { CartItem, cartState, Theme, themeState } from './state/user-state';

const App = () => {

  let setTheme = useSetRecoilState(themeState)
  let setCart = useSetRecoilState(cartState)
  let location = useLocation()
  console.log(location)
  const transition = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { display: 'none' },
    config: { duration: 500 }
  })

  useEffect(() => {
    let curTheme = LocalStorage.get<Theme>("theme");
    let curCart = LocalStorage.get<CartItem[]>("cart");

    if (!curTheme) {
      curTheme = "light"
      LocalStorage.set("theme", "light")
    }
    setTheme(curTheme)

    if (!curCart) {
      curCart = []
      LocalStorage.set("cart", [])
    }
    setCart(curCart)

  }, [setTheme, setCart])

  return <>
    <Nav />
    {
      transition.map((val) => (
        <animated.div key={val.key} style={val.props}>
          <Switch location={val.item}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </animated.div>
      ))
    }
    {/* <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch> */}
    < Footer />
  </>
    ;
}

export default App;
