import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './theme-context'
import ThemedBar from './components/ThemedBar'


const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme(theme) {
    this.setState({
      theme
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <a href="#theme-switcher"
              className="btn btn-light"
              onClick={() => {this.changeTheme('light')}}
            >
              浅色主题
            </a>
            <a href="#theme-switcher"
              className="btn btn-secondary"
              onClick={() => {this.changeTheme('dark')}} 
            >
              深色主题
            </a>
          </header>
          <ThemedBar />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
