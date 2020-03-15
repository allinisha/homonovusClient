import React from 'react';
import { Link } from 'react-router-dom';

const drawerBoxStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  left: 0,
  top: 0,
  display: 'none',
  zIndex: 10
}

const drawerMaskStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.45)'
}

const drawerContentStyle = {
  width: '256px',
  height: '100%',
  backgroundColor: '#fff',
  position: 'absolute',
  left: 0,
  boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.15)'
}

const drawerHeaderStyle = {
  position: 'relative',
  padding: '16px 24px',
  color: 'rgba(0, 0, 0, 0.65)',
  background: '#fff',
  borderBottom: '1px solid #e8e8e8',
  borderRadius: '4px 4px 0 0',
}

const drawerBodyStyle= {
  padding: '24px',
  fontSize: '14px',
  lineHeight: '1.5',
  wordWrap: 'break-word'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'rgba(0, 0, 0, 0.65)',
  fontSize: '14px'
}

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="drawer-box" style={drawerBoxStyle}>
        <div className="drawer-mask" style={drawerMaskStyle}></div>
        <div className="drawer-content" style={drawerContentStyle}>
          <div className="drawer-header" style={drawerHeaderStyle}>
            花开
          </div>
          <div className="drawer-body" style={drawerBodyStyle}>
            <Link to="/index" style={linkStyle}>首页</Link>
          </div>
        </div>
      </div>
    )
  }
}