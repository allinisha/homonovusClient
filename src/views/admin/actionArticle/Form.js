import React from 'react';
import { Form, Input, Select, Button, notification } from 'antd';
import request from '../../../utils/request';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const { Option } = Select;

// ClassicEditor.config._config.height = '600px';

const formItemLayout = {
  labelCol:  { span: 2 },
  wrapperCol: { span: 10 },
}

const formBtnLayout = {
  wrapperCol: { span: 16, offset: 0 }
}

const editConfig = {
  height: '600px'
}

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      summary: '',
      tags: [],
      content: null,
      tagsList: [],
      id: this.props.id,
      isLoaded: false
    }
  }
  componentDidMount() {
    if (this.props.mode === 'edit') {
      this.getTagList().then(() => {
        this.getArticle();
      })
    } else {
      this.getTagList().then(() => {
        this.setState({
          isLoaded: true
        });
      });
    }
  }
  getArticle = () => {
    return request.get('editArticle', {
      params: {
        id: this.state.id
      }
    }).then(resp => {
        const data = resp.data.data;
        data.isLoaded = true;
        data.tags = (data.tags && data.tags.map(tag => tag.id)) || [];
        this.setState({ ...data })
      });
  }
  getTagList = () => {
    return request.get('tagList')
      .then(resp => {
        const data = resp.data.data;
        this.setState({ tagsList: data })
      });
  }
  toAddArticle = params => {
    request.post('addArticle', params).then(resp => {
      if (resp.data && resp.data.status === 1) {
        this.props.history.push('/admin/index');
      } else {
        notification.error({
          message: '保存失败',
          description:
            '',
        });
      }
      this.state.isLoaded = true;
    });
  }
  toSaveEidt = params => {
    params.id = this.props.id;
    request.post('saveArticle', params).then(resp => {
      if (resp.data && resp.data.status === 1) {
        this.props.history.push('/admin/index');
      } else {
        notification.error({
          message: '修改失败',
          description:
            '',
        });
      }
    });
  }
  tagChange = value => {
    this.setState({
      tags: value,
    });
  }
  editChange = (e, editor) => {
    console.log(e, editor)
    this.setState({
      content: editor.getData()
    });
  }
  toSubmit = e => {
    e.preventDefault();
    const { mode } = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      var tags = this.state.tags.map(tag => {
        return this.state.tagsList.filter(item => item.id === tag)[0];
      });
      const params = {
        title: values.title,
        summary: values.summary,
        tags: tags,
        content: this.state.content,
      }
      if (mode === 'add') {
        this.toAddArticle(params);
      } else {
        this.toSaveEidt(params);
      }
      
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { mode } = this.props;
    const { title = null, summary = null, tags = [], tagsList = [], content = '', isLoaded = false } = mode === 'edit' ? this.state : { isLoaded: true, tagsList: this.state.tagsList };

    return (
      <Form {...formItemLayout} onSubmit={this.toSubmit}>
        <Form.Item label="标题">
          {getFieldDecorator('title', {
            initialValue: title,
            rules: [
              {
                required: true,
                message: '请输入文章标题！',
              },{
                max: 100,
                message: '不能超过100个字符',
              }
            ],
          })(<Input autoComplete="off"/>)}
        </Form.Item>
        <Form.Item label="摘要">
          {getFieldDecorator('summary', {
            initialValue: summary,
            rules: [
              {
                required: true,
                message: '请输入文章摘要!'
              },{
                max: 150,
                message: '不能超过150个字符',
              }
            ]
          })(<Input autoComplete="off"/>)}
        </Form.Item>
        <Form.Item label="标签">
          {
            isLoaded && <Select 
              mode="multiple"
              style={{ width: '100%' }} 
              tokenSeparators={[',']} 
              onChange={this.tagChange}
              defaultValue={tags}
            >
              {
                tagsList.length > 0 ? tagsList.map(tag =>(<Option key={tag.id}>{tag.name}</Option>)) : null
              }
            </Select>
          }
        </Form.Item>
        <Form.Item label="内容" wrapperCol={{span: 20}}>
          {getFieldDecorator('content', {
              initialValue: content,
              rules: [
                {
                  required: true,
                  message: '请输入文章内容！',
                },
              ],
            })(
              <CKEditor
                editor={ClassicEditor}
                config={editConfig}
                data={content}
                onInit={ editor => {
                    console.log()
                    // You can store the "editor" and use when it is needed.
                } }
                // onChange={ ( event, editor ) => {this.editChange(event, editor)}}
                onBlur={ ( event, editor ) => {this.editChange(event, editor)}}
              />
            )}
        </Form.Item>
        <Form.Item {...formBtnLayout}>
          <Button type="primary" htmlType="submit" onClick={this.toSubmit}>
            {mode === 'add' ? '保存' : '修改'}
          </Button>
        </Form.Item>
      </Form>
      
    )
  }
}

export default Form.create()(ArticleForm);