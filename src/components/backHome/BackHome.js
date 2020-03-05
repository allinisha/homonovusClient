import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  width: '30px',
  height: '30px',
  color: '#8561f3',
  position: 'fixed',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'center',
  background: '#fff',
  alignItems: 'center',
  boxShadow: 'rgba(97, 96, 96, 0.1) 2px 4px 4px 0px',
  borderRadius: '4px 0 0 4px',
  border: '1px solid #e4e4e4',
  borderRight: 'none',
  cursor: 'pointer'
}

export default function BackHome() {
  return (
    <Link to="/index" style={style}>&lt;&lt;</Link>
  )
}