import React from 'react';
import request from '../../../utils/request';
import { notification } from 'antd';
import './Login.scss'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    }
  }
  checkParams = () => {
    const { user, pwd } = this.state;
    if (user.trim().length === 0) {
      return false;
    }
    if (pwd.trim().length === 0) {
      return false;
    }
    return true;
  }
  toLogin = () => {
    if (this.checkParams()) {
      const { user, pwd } = this.state;
      request.post('/login', {
        params: {
          user: user,
          pwd: pwd
        }
      }).then(res => {
        const data = res.data;
        if (data.status === 1) {
          this.props.history.push('/admin/index');
        } else {
          notification.error({
            message: '登录失败',
            description:
              '',
          });
        }
      })
    } else {
      notification.error({
        message: '账号或密码填写有误',
        description:
          '',
      });
    }
  }
  inputChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  }
  render() {
    const { user, pwd } = this.state;
    return (
      <div className="login-box">
        <div className="login-adv">
          <span>新人</span>
          <span>类</span>
        </div>
        <div className="login-body">
          <div className="login-form">
            <input type="text" placeholder="请输入用户名" value={user} onChange={e => {this.inputChange(e, 'user')}} />
            <input type="password" placeholder="请输入密码" value={pwd} onChange={e => {this.inputChange(e, 'pwd')}} />
          </div>
          <input type="button" value="登 录" className="login-btn" onClick={this.toLogin}/>
        </div>
      </div>
    )
  }
}