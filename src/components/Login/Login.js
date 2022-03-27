import React from "react"
import "./Login.css"
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLoggedIn = props.onLoggedIn;
    this.state = {
      password: ""
    };
  }

  login(password) {
    console.log('http://' + window.location.hostname.replace('http://', '').replace('https://', '') + ':8888/api/login')

    var data = new FormData()
    data.append('password', password)
    // var data = {password: password}
    axios.post(
      'http://' + window.location.hostname.replace('http://', '').replace('https://', '') + ':8888/api/login',
      data,
    ).then((res) => {
      this.onLoggedIn(res.data)
      console.log(res)
    }).catch((err) => {
      console.error(err)
    })

  }

  render() {
    return (
      <div className="LoginContainer">
        <h2>Login</h2>
        <Input.Password
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
          onPressEnter={(e) => this.login(this.state.password)}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </div>
    )
  }
}

export default Login;