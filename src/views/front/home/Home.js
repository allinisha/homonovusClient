import React from 'react';
import { Pagination } from 'antd';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/Navbar';
import Articles from '../../../components/articles/Articles';
import request from '../../../utils/request';

import './index.scss';

const homeStyle = {
  width: '100%',
  height: 'auto',
  minHeight: '100%',
  paddingBottom: '60px',
  backgroundColor: '#baa4ff'
};

const paginationStyle = {
  margin: '30px 60px',
  display: 'flex',
  justifyContent: 'center'
}

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>向前</a>;
  }
  if (type === 'next') {
    return <a>向后</a>;
  }
  return originalElement;
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      rows: 10,
      total: 1,
      list: []
    }
  }
  componentDidMount() {
    this.getList();
  }
  getList = () => {
    request.post('articleList', {
      params: {
        page: this.state.page,
        rows: this.state.rows
      }
    })
      .then(res => {
        this.setState({
          list: res.data.data.list,
          total: res.data.data.total
        });
      })
  }
  pageChange = current => {
    this.setState({
      page: current
    }, () => {
      this.getList();
    })
  }
  render() {
    const { page, total, list } = this.state;
    return (
      <div className="home-box" style={homeStyle}>
        <Header />
        <Navbar />
        <Articles list={list}/>
        <div style={paginationStyle}>
          <Pagination 
            defaultCurrent={1} 
            defaultPageSize={10} 
            current={page} 
            total={total} 
            hideOnSinglePage={true} 
            itemRender={itemRender}
            onChange={this.pageChange} 
          />
        </div>
      </div>
    )
  }
}
