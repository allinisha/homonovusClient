import React from 'react';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/Navbar';
import Articles from '../../../components/articles/Articles';

const homeStyle = {
  width: '100%',
  // height: 'auto',
  // minHeight: '100%',
  paddingBottom: '60px',
  backgroundColor: '#faffff'
};

export default class Home extends React.Component {
  render() {
    return (
      <div style={homeStyle}>
        <Header />
        <Navbar />
        <Articles />
      </div>
    )
  }
}
