import React from 'react'
import { sns } from './map'

const Footer = (props) => (
  <footer>
    <div className='copyright'>© 2020 Shawn Han.</div>
    <div className='contacts'>
    {sns.map((ele, index) => (
      <a key={index} href={ele.link}  style={{color:'gray'}}>{ele.tag}</a>
    ))}
    <a href={"mailto:tosky0514@gmail.com"} style={{color:'gray'}}><i className="fas fa-envelope-square fa-lg"></i></a>
    <a onClick={()=>props.send()} style={{color:'gray'}}><i className="fas fa-file fa-lg"></i></a>
    </div>
  </footer>
)

export default Footer;