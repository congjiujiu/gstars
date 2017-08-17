// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.css';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.token);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Login</h2>
          <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>
            <FormItem>
              {getFieldDecorator('token', {
                rules: [{ required: true, message: 'Please input your token!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Github token" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
