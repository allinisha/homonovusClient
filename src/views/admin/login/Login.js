import React from 'react';
import './Login.css'

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-adv">
          <span>新人</span>
          <span>类</span>
        </div>
        <div className="login-body">
          <div className="login-form">
            <input type="text" placeholder="请输入用户名"/>
            <input type="password" placeholder="请输入密码"/>
          </div>
          <input type="button" value="登 录" className="login-btn" />
        </div>
      </div>
    )
  }
}