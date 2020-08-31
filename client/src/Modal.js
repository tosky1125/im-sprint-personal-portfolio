
import React from 'react'

const Modal = (props) => (
  <div>
    <div className='modal'></div>
    <form className='modalcontent'>
      <input type='text' placeholder='Username' className='user'></ input><br></br>
      <input type="email" placeholder='E-mail address' className='email'></ input><br></br>
      <button className='submit' onClick={()=> {
        let user = document.querySelector('.user').value
        let email = document.querySelector('.email').value
        props.subscribe(user, email)}}>📮</button>
      <button className='close' onClick={()=>props.close}>❌</button>
    </form>
  </div>
)

export default Modal;