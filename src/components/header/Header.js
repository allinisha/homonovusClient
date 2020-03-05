import React from 'react';
import './index.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-box">
        <div className="header-container">
          <img className="header-bg" src={require('../../static/img/flower.png')}/>
          <div className="header-content">
            <span>新人类</span>
            <span>/</span>
            <span>Homonovus</span>
          </div>
          <ul className="link-list">
            <li>Isha之声</li>
          </ul>
        </div>
        
      </div>
    )
  }
}
