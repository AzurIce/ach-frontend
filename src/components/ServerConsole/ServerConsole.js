import './ServerConsole.css';

import React from "react";
import { Badge, Input } from 'antd';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

class ServerConsole extends React.Component {
  constructor(props) {
    super(props)
    this.socket = new WebSocket('ws://' + window.location.hostname.replace('http://', '').replace('https://', '') + ':8888/api/console');
    this.state = {
      status: 'connecting',
      lines: 'Test\nasddadsaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasd  sd\nNB!!!',
      inputStatus: ''
    }
  }

  componentDidMount() {
    this.socket.onopen = (e) => {
      console.log('WebSocket Connection established: ' + e)
      this.setState({ status: 'open', lines: '' })
      // this.socket.send('abaaba')
    }
    this.socket.onclose = (e) => {
      console.log('WebSocket Connection established: ' + e)
      this.setState({ status: 'closed' })
      // this.socket.send('abaaba')
    }

    this.socket.onmessage = (e) => {
      console.log(e)
      this.setState({ lines: this.state.lines + e.data })
      var el = document.getElementById('console')
      el.scrollTop = el.scrollHeight
    }
  }

  getStatus() {
    switch (this.state.status) {
      case 'connecting':
        return <Badge count={"connecting"} style={{ backgroundColor: '#ff8866' }} />
      case 'open':
        return <Badge count={"open"} style={{ backgroundColor: '#52c41a' }} />
      case 'closed':
        return <Badge count={"closed"} />
      default:
        break;
    }
  }

  render() {
    return (
      <div className='ServerConsoleContainer'>
        <div className='ServerConsoleInfo'>
          <text style={{margin: '0px 10px'}} >Connection: </text>
          {this.getStatus()}
        </div>
        <pre id='console' className='ServerConsole'>{this.state.lines}</pre>
        <Input
          value={this.state.input}
          prefix={this.state.inputStatus === 'error' ? <ClockCircleOutlined /> : ''}
          onChange={(e) => this.setState({ input: e.target.value })}
          onPressEnter={(e) => {
            if (this.state.status !== 'open') {
              return;
            }
            // this.setState({inputStatus: 'error'})
            try {
              this.socket.send(e.target.value)
            } catch (e) {
              console.log(e)
            } finally {
              console.log('finally')
              this.setState({ input: '' })
            }
          }}
        />
      </div>
    )
  }
}

export default ServerConsole;