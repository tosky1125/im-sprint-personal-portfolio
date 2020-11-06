import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header'
import Main from './Main'
import Stacks from './Stacks'
import Modal from './Modal';
import Hamburger from './Hamburger';



const App = () => {
  const [menu, setMenu] = useState<string>('Home');
  const [header, setHeader] = useState<boolean>(true);
  const [mail, setMail] = useState<boolean>(false);
  const [hamburger, setHamburger] = useState<boolean>(false);
  const handleClickMenu = (menu: string) => {
    setMenu(menu);
    setHamburger(false);
  };
  const handleMail = () => {
    document.body.classList.add('scroll');
    setMail(true);
  };

  const handleModalClose = () => {
    document.body.classList.remove('scroll');
    setMail(false);
  };

  const headerToggle = () => {
    setHeader(!header);
  };

  const subscribeResume = (username:string, email:string) => {
    var url = '/resume';
    var data = {username, email};
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }
  return(
    <div>
      <Nav hamburger={setHamburger.bind(this)} toggleClick={headerToggle.bind(this)} headerToggle={header} menuClick={handleClickMenu.bind(this)} />
      {hamburger && <Hamburger menuClick={handleClickMenu.bind(this)}/>}
      {menu === 'Home' && header && <Header />}
      {menu === 'Home' && <Main send={handleMail.bind(this)}/>}
      {menu === 'Stacks' && <Stacks />}
      <Footer send={handleMail.bind(this)}/>
      {mail && <Modal subscribe={subscribeResume} close={handleModalClose.bind(this)} />}
    </div>    
    )
};

export default App;

// class dop extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {   
//       menu : 'Home',
//       header : true,
//       mail: false,
//       hamburger : false
//     }
//   }
//   headerToggle(){
//     this.setState({
//       header : !this.state.header
//     })
//   }
//   handleClickMenu(menu){
//     this.setState({
//       menu : menu,
//       hamburger : false
//     })
//   }
//   handleMail(){
//     document.body.classList.add('scroll');
//     this.setState({
//       mail:true
//     })
//   }
//   handleModalClose(){
//     document.body.classList.remove('scroll');
//     this.setState({
//       mail:false,
//     })
//   }
//   subscribeResume(username, email){
//     var url = '/resume';
//     var data = {username: username, email : email};
//     console.log(data)
//     fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data), // data can be `string` or {object}!
//     headers:{
//       'Content-Type': 'application/json'
//     }
//     }).then(res => res.json())
//       .then(response => console.log('Success:', JSON.stringify(response)))
//       .catch(error => console.error('Error:', error));
//   }
//   hamburgerOpen () {
//     this.setState({
//       hamburger : !this.state.hamburger
//     })
//   }
 
// }

