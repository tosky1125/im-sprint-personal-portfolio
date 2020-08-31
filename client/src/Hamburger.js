import React from 'react'
import { menus } from './map'

const Hamburger = (props) => (
  <div id='hamburgermenu'>
    <ul>
      {menus.map((ele, index) => (
        <li key={index} className='hamburgermenu' onClick={() => props.menuClick(ele)}>{ele}</li>
      ))}
    </ul>
  </div>
)

export default Hamburger;