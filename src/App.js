import React from 'react';
import './App.css';
// import MaterialList from './components/MaterialList/MaterialList';
import ServerConsole from './components/ServerConsole/ServerConsole';
import Login from './components/Login/Login';

class App extends React.Component {
  constructor() {
    super()
    this.state = { isLoggedIn: false }
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="App">
          <Login onLoggedIn={(token) => { this.setState({ isLoggedIn: true, token: token }) }} />
        </div>
      );
    }

    return (
      <div className="App">
        <ServerConsole token={this.state.token}/>
        {/* <MaterialList /> */}
        {/* <nav>
        <Link ot="/"
      </nav> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}

export default App;
