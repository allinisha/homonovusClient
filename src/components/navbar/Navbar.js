import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-box">
        <ul className="navbar">
          <li>
            <Link to="/index">首页</Link>
          </li>
          <li>
          <Link to="/admin">后台</Link>
          </li>
        </ul>
      </div>
      
    )
  }
}

