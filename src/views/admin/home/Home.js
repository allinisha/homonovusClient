import React from 'react';
import { Layout } from 'antd';
import './index.scss';

import AdminArticles from '../../../components/adminArticles/AdminArticles';
const { Header, Content, Footer } = Layout;

export default class Home extends React.Component{
  render() {
    return (
      <Layout style={{ background: '#ea' }}>
        <Header style={{background: '#fff', padding: '0 20px', fontSize: '18px'}} >
          新人类后台管理
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <AdminArticles {...this.props} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2020 Created by all in isha</Footer>
      </Layout>
    )
  }
}