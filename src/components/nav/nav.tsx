import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import { countState } from '../../state/user-state'
import style from './nav.module.scss'

interface Props extends BasePropsComponent {
}

const Nav: React.FC<Props> = React.memo((props) => {

  let count = useRecoilValue(countState)
  console.log("Nav rendered")
  return <nav className={combineCN(props.className, "")}
    id={style.navBar}
    style={props.style}
  >
    {count}
    <Link to="/" className={style.item}>Home</Link>
    <Link to="/about" className={style.item}>About</Link>
    {props.children}
  </nav>
})

export default Nav