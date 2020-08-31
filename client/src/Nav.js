import React from 'react';
import { menus } from './map'
const Nav = (props) => (
    <nav className='navbar border-bottom'>
      <div className='left pd' onClick={()=>props.menuClick('Home')}>Shawn Han</div>
      <ul className='rightmenu pd'>
      <i className="fas fa-bars" id='hamburger' onClick={ () => props.hamburger()}></i>
        <li className='hamburgermenu' onClick={()=> props.toggleClick()}>
        {props.headerToggle ? <i className="fas fa-toggle-on" ></i> : <i className="fas fa-toggle-off"></i>}
        </li>
        {menus.map((ele, index) => (
          <li key={index} className='hamburgermenu' onClick={() => props.menuClick(ele)}>{ele}</li>
        ))}
      
      </ul>
    </nav>
)


export default Nav;