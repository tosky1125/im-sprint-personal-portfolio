import React from 'react'
import { menus } from './map'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { link } from './map'
const Hamburger = (props) => (
  <Router>
  <div id='hamburgermenu'>
    <ul>
      {menus.map((ele, index) => (
        <li key={index} className='hamburgermenu' onClick={() => props.menuClick(ele)}><Link to={link[index]}>{ele}</Link></li>
      ))}
    </ul>
  </div>
  </Router>
)

export default Hamburger;