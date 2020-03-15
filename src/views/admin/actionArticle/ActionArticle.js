import React from 'react';
import { PageHeader } from 'antd';
import './actionArticle.scss';

import ArticleForm from './Form'

export default class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.match.url.split('/')[3],
      id: this.props.match.url.split('/')[4]
    }
  }
  render() {
    const { mode, id } = this.state;
    const { history } = this.props;
    return  (
      <div className="admin-article-box">
        <PageHeader 
          onBack={()=>this.props.history.push('/admin/index')}
          title='返回'
          subTitle={mode === 'add' ? '上传文章' : '编辑文章'}
          style={{marginBottom: '30px'}}
        >
        </PageHeader>
        <ArticleForm mode={mode} id={id} history={history} />
      </div>
    )
  }
}