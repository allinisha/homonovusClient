import React from 'react';
import { Table, Divider, Tag, Button, Popconfirm, notification } from 'antd';
import { Link } from 'react-router-dom';
import request from '../../utils/request';

export default class AdminArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoaded: false
    };
    console.log(props)
    this.columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        render: (text, record) => <Link to={`/article/${record._id}`}>{text}</Link>,
      },
      {
        title: '创建日期',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              return (
                <Tag key={tag}>
                  {tag.name}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={`/admin/article/edit/${record._id}`}>编辑</Link>
            <Divider type="vertical" />
            <Popconfirm title="确认删除这篇文章吗?" onConfirm={() => this.toDelete(record._id)}>
              <a>删除</a>
            </Popconfirm>
          </span>
        ),
      },
    ];
  }
  componentDidMount() {
    this.getArticleList();
  }
  getArticleList = () => {
    request.get('articleList')
      .then(res => {
        this.setState({
          list: res.data.data,
          isLoaded: true
        });
      });
  }
  toDelete(id) {
    request.get('deleteArticle', {
      params: {
        id: id
      }
    }).then(res => {
        if (res.data.status === 1) {
          this.props.history.go(0);
        } else {
          notification.error({
            message: '删除失败',
            description:
              '',
          });
        }
      })
  }
  render() {
    const { list, isLoaded } = this.state;
    console.log(list)
    return (
      <div>
        <Button style={{marginBottom: '20px'}}><Link to="/admin/article/add">上传文章</Link></Button>
        {
          isLoaded && <Table style={{ backgroundColor: '#fff' }} columns={this.columns} dataSource={list} />
        }
      </div>
    )
  }
}