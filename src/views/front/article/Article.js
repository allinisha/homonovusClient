import React from 'react';
import { Link } from 'react-router-dom';
import request from '../../../utils/request';
import Header from '../../../components/header/Header';
import BackHome from '../../../components/backHome/BackHome';

import './index.scss'

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: [],
      content: '',
      reads: '--',
      date: '--',
      pre: {
        title: '',
        id: null
      },
      next: {
        title: '',
        id: null
      }
    }
  }
  componentDidMount() {
    this.props.history.listen(() => {
      const id = this.props.history.location.pathname.split('/')[2];
      this.getArticle(id);
    })
    this.getArticle();
  }
  getArticle = id => {
    request.get('articleDetail', {
      params: {
        id: id || this.props.match.params.id
      }
    }).then(resp => {
      if (resp && resp.data.status === 1) {
        const data = resp.data.data;
        this.setState({ ...data });
      }
    });
  }
  render() {
    const { title, tags, content, pre, next, reads, date } = this.state;
    const getColor = value => !value ? '#a2a2a2' : 'inherit';
    return (
      <div className="article-detail-box">
        <Header />
        <BackHome />
        <div className="article-body">
          <div className="article-head">
            <div className="article-title">{title}</div>
            <div className="article-info">来自
            {
              tags.length > 0 ? 
                tags.map(tag => <span className="article-tag">{tag.name}</span>) 
                : null
            }
            </div>
          </div>
          <div className="article-content">
            <div className="article-content-text" dangerouslySetInnerHTML={{__html: content}} />
          </div>
          <div className="article-body-footer">
            <span style={{marginRight: '20px'}}>更新于 {date}</span>
            <span>阅读 {reads}</span>
          </div>
        </div>
        <div className="article-link-list">
          <Link to={`/article/${pre.id}`} className="article-link-item" disabled={!pre.id}>上一篇 <span style={{marginLeft: '10px', color: getColor(pre.id)}}>{pre.title || '没有了'}</span></Link>
          <Link to={`/article/${next.id}`} className="article-link-item" disabled={!next.id}>下一篇  <span style={{marginLeft: '10px', color: getColor(next.id)}}>{next.title || '没有了'}</span></Link>
        </div>
      </div>
    )
  }
}