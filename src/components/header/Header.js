import React from 'react';
import './index.css';

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
        </div>
      </div>
    )
  }
}
