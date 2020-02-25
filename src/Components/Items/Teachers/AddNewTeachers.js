import React from 'react';

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker,
    Card,
    Upload,
    message,
  } from 'antd';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  //Styling
  const myStyle={
    fontSize: '15px',
    fontWeight: '500',
    fontColor: 'lightgrey',
  }

  const myInputField = {

    backgroundColor: '#fafafa',
    border: '1px solid lightgrey',
    outline: 'none'

  }

  // Upload 

  
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
 
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };


    // Upload

    handleChange = info => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            loading: false,
          }),
        );
      }
    };
  
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '+977',
      })(
        <Select style={{ width: 70 }}>
          <Option value="+977">+977</Option>
        </Select>,
      );
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));


      // Upload

      const uploadButton = (
        <div>
          <Icon type={this.state.loading ? 'loading' : 'plus'} />
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      const { imageUrl } = this.state;
  
      return (
        <Card title= {
          <span style={{fontSize :'20px'}}>
            ADD NEW TEACHER
          </span>
        }>
        <Form layout='inline' onSubmit={this.handleSubmit}>

        <Row className="row" gutter={24}>  
          <Col className="column" span={6}>  
          <Form.Item label = {
            <span style={myStyle}>
              Upload Your Photo
            </span>
          }
          extra = {
           

            <span style={{fontColor: 'black', fontWeight: '600', fontSize: '15px' }}>
           Note : Please upload JPG/PNG file 
            whose size is smaller than 2MB.
           </span>
          }
          >
            {getFieldDecorator('Photo', {
              rules: [{ required: true, message: 'Please upload your photo!' }],
            })(
              <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            )}
          </Form.Item>
          </Col>
          </Row>

        <Row style={{marginBottom: '4%', marginTop: '4%'}} className="row" gutter={24}>
        <Col className="column" span={6}>
          <Form.Item
            label={
              <span  style={myStyle}>
                First Name
                <Tooltip title="What do you want others to call you?">
                  
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('Name', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>
          <Col className="column" span={6}>
          <Form.Item
            label={
              <span style={myStyle}>
                Middle Name
              
              </span>
            }
          >
            {getFieldDecorator('Middle Name', {
              rules: [{ required: true, message: 'Please input your middle name!', whitespace: false }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>
          <Col className="column" span={6}>
          <Form.Item
            label={
              <span style={myStyle}>
                Last Name
              
              </span>
            }
          >
            {getFieldDecorator('Last Name', {
              rules: [{ required: true, message: 'Please input your last name!', whitespace: false }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>

          <Col className="column" span={6}>  
          <Form.Item
            label={
              <span style={myStyle}>
                Gender&nbsp;
                <Tooltip title="Are you male or female?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('Gender', {
              rules: [{ required: true, message: 'Please input your blood group!', whitespace: true }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>
          </Row>
        
          <Row style={{marginBottom: '4%'}} className="row" gutter={24}>
          <Col className="column" span={6}> 
          <Form.Item
            label={
              
              <span style={myStyle}>

                Date of Birth

              
                <Tooltip title="When is your birthday?">
                  
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('Date of Birth', {
              rules: [{ required: true, message: 'Please input your birth date!', whitespace: true }],
            })(<DatePicker style={myInputField} size="large"/>)}
          </Form.Item>
          </Col>

          <Col className="column" span={6}>  
          <Form.Item
            label={
              <span style={myStyle}>
                Religion&nbsp;
                <Tooltip title="What is your religion?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('Religion', {
              rules: [{ required: true, message: 'Please input your religion!', whitespace: true }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>

        
 
          <Col className="column" span={6}>  
          <Form.Item
            label={
              <span style={myStyle}>
                Blood Group&nbsp;
                <Tooltip title="What is your blood group?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('Blood group', {
              rules: [{ required: true, message: 'Please input your blood group!', whitespace: true }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>

          <Col className="column" span={6}>  
          <Form.Item
            label={
              <span style={myStyle}>
                E-mail&nbsp;
                <Tooltip title="What is your e-mail address?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('E-mail', {
              rules: [{ required: false, message: 'Please input your e-mail address!', whitespace: true }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>
          </Row>

                    

          <Row className="row" gutter={24} style={{marginBottom: '20px'}}> 

          <Col className="column" span={6}>  
          <Form.Item
            label={
              <span style={myStyle}>
                Residence;
                <Tooltip title="Where do you live??">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('residence', {
              rules: [{ required: true, message: 'Please input your residence!', whitespace: true }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>
        
          <Col className="column" span={6}>  
          <Form.Item label = {
            <span style={myStyle}>
              Phone 
            </span>
          }>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input style={myInputField} size="large" addonBefore={prefixSelector}  />)}
          </Form.Item>
          </Col>

          <Col className="column" span={6}>  
          <Form.Item
            label={
              <span style={myStyle}>
                Admission ID
                <Tooltip title="Your Admission ID?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('Admission ID', {
              rules: [{ required: true, message: 'Please input your Admission ID!', whitespace: true }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>
        
          <Col className="column" span={4}>  
          <Form.Item label = {
            <span style={myStyle}>
              Class
            </span>
          }>
            {getFieldDecorator('Class', {
              rules: [{ required: true, message: 'Please input your class!' }],
            })(<Input style={myInputField} size="large" />)}
          </Form.Item>
          </Col>
          </Row>



   

            <Row  className="row" gutter={24} style={{marginTop: '8%', marginLeft:'-3%', float:'left'}}>  
            <Col className="column" span={24}>

            <Form.Item {...tailFormItemLayout} >
            <Button type="primary" htmlType="submit" size="large">
              Submit
            </Button>
            </Form.Item>
      
             </Col>    
             </Row>
       
         
         

      
        
      
          
        </Form>


        </Card>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  
  export default WrappedRegistrationForm;