import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function BackHome() {
  return (
    <Link to="/index" className="btn-back">&lt;</Link>
  )
}