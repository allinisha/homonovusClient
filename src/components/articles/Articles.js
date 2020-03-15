import React from 'react';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';

import './index.scss';

const articlesItemStyle = isLast => {
  const style = {
    
  }
  // if (!isLast) style.borderBottom = '1px dashed #e6e6e6';
  return style;
}

const noDataText = '新人类整理文章中...';

// goArticle = (props, id) => {
//   props.history.push(`/article/${id}`)
// }

// const ArticleItem = props => (
//   <div className="article-item" onClick={props.goArticle(props, props.article._id)}>
//     <img className="article-cover" src={require('../../static/img/default-bg.png')} />
//     <div className="article-right">
//       <Link to={`/article/${props.article._id}`} className="article-item-title">{props.article.title}</Link>
//       <div className="article-item-content">{props.article.summary}</div>
//       <div className="article-item-info">
//         <Link to={`/article/${props.article._id}`} className="article-item-btn">阅读</Link>
//         <div className="article-item-info-right">
//           <span className="span-date"><em>更新于</em> {props.article.date}</span>
//           <i></i>
//           <span>{props.article.reads} 阅读 </span>
//         </div>
//       </div>
//     </div>
//   </div>
//   )

export default class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list
    });
  }
  goArticle = (id) => {
    console.log('go')
    this.props.history.push(`/article/${id}`)
  }
  render() {
    const { list } = this.state;
    return (
      <div className="articles-box">
        {
          list.length > 0 ? 
          // <QueueAnim 
          //   type="top"
          //   delay={[400, 0]}
          //   duration={[1200, 0]}
          // >

              list.map((article, index) => 
                (<div className="article-item" key={article._id} onClick={() => {this.goArticle(article._id)}}>
                <img className="article-cover" src={require('../../static/img/default-bg.png')} />
                <div className="article-right">
                  <Link to={`/article/${article._id}`} className="article-item-title">{article.title}</Link>
                  <div className="article-item-content">{article.summary}</div>
                  <div className="article-item-info">
                    <Link to={`/article/${article._id}`} className="article-item-btn">阅读</Link>
                    <div className="article-item-info-right">
                      <span className="span-date"><em>更新于</em> {article.date}</span>
                      <i></i>
                      <span>{article.reads} 阅读 </span>
                    </div>
                  </div>
                </div>
              </div>)
                // return <ArticleItem {...this.props} key={article._id} article={article} isLast={index === list.length - 1} /> 
              )
            : null
          // </QueueAnim> : <div className="no-data">{noDataText}</div>
        }
      </div>
    )
  }
}

