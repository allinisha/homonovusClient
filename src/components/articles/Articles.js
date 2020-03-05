import React from 'react';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';

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
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      list: nextProps.list
    });
  }
  render() {
    const { list } = this.state;
    return (
      <div className="articles-box">
        {
          list.length > 0 ? 
          <QueueAnim 
            type="top"
            delay={[400, 0]}
            duration={[1200, 0]}
          >
            {
              list.map((article, index) => {
                return <ArticleItem key={article._id} article={article} isLast={index === list.length - 1} /> 
              })
            }
          </QueueAnim> : <div className="no-data">{noDataText}</div>
        }
      </div>
    )
  }
}

