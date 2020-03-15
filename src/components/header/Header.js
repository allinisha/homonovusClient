import React from 'react';
import Navbar from '../navbar/Navbar';
import Card from '../card/Card';
import { Emoji } from 'emoji-mart';
import './index.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  goHome = () => {
    this.props.history.push({pathname: '/index'});
  }
  render() {
    return (
      <div className="header-box">
        <div className="header-container">
          {/* <Navbar /> */}
          <div className="header-content" onClick={this.goHome}>
            <Emoji emoji="globe_with_meridians" set='emojione' size={24}/>
            <span>新人类</span>
            <span>/</span>
            <span>Homonovus</span>
          </div>
          
          {/* <div className="banner">
            <div className="banner-item">
              <img src={require('../../static/img/isha_1.webp')} />
              <div className="content">
                <div className="title">哈他瑜伽是一种掌控我们的生命体验的工具</div>
                <div className="bottom">
                  <span className="date">2019-02-11 10:05</span>
                  <span className="reads">阅读 0</span>
                </div>
              </div>
              <div className="menu">
                <EllipsisOutlined />
              </div>
            </div>
            <Card />
            <div className="banner-item">
              <img src={require('../../static/img/isha_2.webp')} />
              <div className="content">
                <div className="title">儿童应该学习瑜伽吗？</div>
                <div className="bottom">
                  <span className="date">2019-02-11 05:14</span>
                  <span className="reads">阅读 0</span>
                </div>
              </div>
            </div> 
          </div> */}
        </div>
        
      </div>
    )
  }
}
