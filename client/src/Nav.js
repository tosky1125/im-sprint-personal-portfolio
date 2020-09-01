import React from 'react';
import { menus } from './map'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { link } from './map'
const Nav = (props) => (
    <Router>
    <nav className='navbar border-bottom'>
      <div className='left pd' onClick={()=>props.menuClick('Home')}>
        <Link to='home'>Shawn Han </Link></div>
      <ul className='rightmenu pd'>
      <i className="fas fa-bars" id='hamburger' onClick={ () => props.hamburger()}></i>
        <li className='hamburgermenu' onClick={()=> props.toggleClick()}>
        {props.headerToggle ? <i className="fas fa-toggle-on" ></i> : <i className="fas fa-toggle-off"></i>}
        </li>
        {menus.map((ele, index) => (
          <li key={index} className='hamburgermenu' onClick={() => {
            props.menuClick(ele)
          }}><Link to={link[index]}>{ele}</Link></li>
        ))}
      
      </ul>
    </nav>
    </Router>
)


export default Nav;