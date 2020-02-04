import React from 'react';
import { Link } from 'react-router-dom';
import request from '../../utils/request';

import './index.scss';

const articlesItemStyle = isLast => {
  const style = {
    margin: '10px 20px',
    padding: '20px 10px'
  }
  if (!isLast) style.borderBottom = '1px dashed #e6e6e6';
  return style;
}

const noDataText = '新人类等待中...';

const ArticleItem = props => (
  <div className="article-item" style={articlesItemStyle(props.isLast)}>
    <Link to={`/article/${props.article._id}`} className="article-item-title">{props.article.title}</Link>
    <div className="article-item-info">
      <span style={{marginRight: '20px'}}>更新于 {props.article.date}</span>
      <span>阅读 {props.article.reads}</span>
    </div>
    <div className="article-item-content">{props.article.summary}</div>
    <Link to={`/article/${props.article._id}`} className="article-item-btn">阅读 ></Link>
  </div>
  )

export default class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList = () => {
    request.get('articleList')
      .then(res => {
        this.setState({
          list: res.data.data
        });
      })
  }
  render() {
    const { list } = this.state;
    return (
      <div className="articles-box">
        {
          list.length > 0 ? list.map((article, index) => {
            return <ArticleItem article={article} isLast={index === list.length - 1} />
          }) : <div className="no-data">{noDataText}</div>
        }
      </div>
    )
  }
}

