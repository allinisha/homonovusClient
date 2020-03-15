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
      date: '',
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
  componentWillMount() {
    this.getArticle();
  }
  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id;
    this.getArticle(id);
  }
  getArticle = id => {
    request.get('articleDetail', {
      params: {
        id: id || this.props.history.location.pathname.split('/')[2]
      }
    }).then(resp => {
      if (resp && resp.data.status === 1) {
        const data = resp.data.data;
        this.setState({ ...data });
        window.scrollTo(0, 0);
      }
    });
  }
  render() {
    const { title, tags, content, pre, next, reads, date } = this.state;
    const getColor = value => !value ? '#a2a2a2' : 'inherit';
    return (
      <div className="article-detail-box">
        <Header {...this.props} />
        <BackHome />
        <div className="article-body">
          <div className="article-head">
            <div className="article-title">{title}</div>
            {
              tags.length > 0 && <div className="article-info">来自
              {
                tags.length > 0 ? 
                  tags.map(tag => <span className="article-tag">
                    <img src={require(`../../../static/img/${tag.id}.png`)} />
                    {tag.name}
                  </span>) 
                  : null
              }
              </div>
            }
          </div>
          <div className="article-body-info">
            <span style={{marginRight: '20px'}}><em>更新于</em> {date}</span>
            <span>{reads} 阅读</span>
          </div>
          {
            content ? <div className="article-content">
              <div className="article-content-text" dangerouslySetInnerHTML={{__html: content}} />
            </div> : <div className="article-loading">新人类写稿中...</div>
          }
          <div className="article-link-list">
            <Link to={`/article/${pre.id}`} className="article-link-item" disabled={!pre.id}><span>上一篇:</span> <span style={{marginLeft: '10px', color: getColor(pre.id)}}>{pre.title || '没了'}</span></Link>
            <Link to={`/article/${next.id}`} className="article-link-item" disabled={!next.id}><span>下一篇:</span> <span style={{marginLeft: '10px', color: getColor(next.id)}}>{next.title || '没了'}</span></Link>
          </div>
        </div>
      </div>
    )
  }
}