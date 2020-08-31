import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header'
import Main from './Main'
import Stacks from './Stacks'
import Modal from './Modal';
import Hamburger from './Hamburger';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {   
      menu : 'Home',
      header : true,
      mail: false,
      hamburger : false
    }
  }
  headerToggle(){
    this.setState({
      header : !this.state.header
    })
  }
  handleClickMenu(menu){
    this.setState({
      menu : menu,
    })
  }
  handleMail(){
    document.body.classList.add('scroll');
    this.setState({
      mail:true
    })
  }
  handleModalClose(){
    document.body.classList.remove('scroll');
    this.setState({
      mail:false,
    })
  }
  subscribeResume(username, email){
    var url = '/resume';
    var data = {username: username, email : email};
    console.log(data)
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
  hamburgerOpen () {
    this.setState({
      hamburger : !this.state.hamburger
    })
  }
  render() {
    return(
    <div>
      <Nav hamburger={this.hamburgerOpen.bind(this)} toggleClick={this.headerToggle.bind(this)} headerToggle={this.state.header} menuClick={this.handleClickMenu.bind(this)} />
      {this.state.hamburger ? <Hamburger menuClick={this.handleClickMenu.bind(this)}/> : false}
      {this.state.menu === 'Home' && this.state.header ? <Header /> : false}
      {this.state.menu === 'Home' ? <Main send={this.handleMail.bind(this)}/> : false}
      {this.state.menu === 'Stacks' ? <Stacks /> : false}
      <Footer send={this.handleMail.bind(this)}/>
      {this.state.mail ? <Modal subscribe={this.subscribeResume} close={this.handleModalClose.bind(this)} /> : false}
    </div>
    
    )
  }
}


export default App;