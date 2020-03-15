import React from 'react';
import { Pagination } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/Navbar';
import Articles from '../../../components/articles/Articles';
import request from '../../../utils/request';

import './index.scss';

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
      <div className="home-box">
        <Header {...this.props} />
        <Navbar />
        <div className="home-body">
          <div className="articles-wrap">
            <Articles {...this.props} list={list}/>
            <div className="pagination-box">
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
            <div className="sider-right">
              <QueueAnim
                type="top"
                interval={300}
                delay={[400, 0]}
                duration={[1200, 0]}
              >
                <div key="tip" className="tip-box">
                  <div className="tip-title">每日智慧</div>
                  <div className="tip-content">“瑜伽意味着合一。处于瑜伽状态意味着你内在的完整。”</div>
                  <div className="tip-author">萨古鲁</div>
                </div>
                <div key="notice" className="notice-box">
                  <div className="notice-title">最新消息</div>
                  <div className="notice-content">欢迎大家访问~</div>
                </div>
              </QueueAnim>
            </div>
        </div>
      </div>
    )
  }
}
