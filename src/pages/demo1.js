import React from 'react';
import {Button} from 'antd';

export default class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  function UserGreeting(props) {
    return <h1>欢迎回来!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>请先注册。</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <Button onClick={props.onClick}>
        登陆
      </Button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <Button onClick={props.onClick}>
        退出
      </Button>
    );
  }
 