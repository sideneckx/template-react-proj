import React from 'react'
import { BasePropsComponent } from '../../submodules/props/base-props'
import { combineCN } from '../../submodules/string-processing/combine-classname'
import { footerHeight } from '../../variable.css'
// import style from './footer.module.scss'

interface Props extends BasePropsComponent {
}

const Footer: React.FC<Props> = React.memo((props) => {
  return <footer className={combineCN(props.className, "")}
    id="footer"
    style={{ ...props.style, height: footerHeight }}
  >
    <label>P</label>
    {props.children}
  </footer>
})

export default Footer