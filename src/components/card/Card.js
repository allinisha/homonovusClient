import React from 'react';
import './index.scss';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card-box green">
        <div className="card-icon" />
        <span>123456</span>
      </div>
    )
  }
}