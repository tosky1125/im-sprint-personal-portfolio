import React from 'react'
import photo from './img/photo.jpg'

const Header = () => (
  <header>
    <div className='center border-bottom'>
        <img className='photo' src={photo} alt = 'Shawn'/>
        <div className='name'><h1>Shawn Han</h1></div>
        <h2 className='top'>Jr. Fullstack Developer</h2>
        <h2 className='under'>Currently looking for a job</h2>
    </div>
  </header>
)

export default Header;