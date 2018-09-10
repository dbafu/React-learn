import React from 'react'

class Welcome extends React.Component {
  render() {
    const isLogin = false 
    return (
      <div>
        <h1>Hello React !</h1>
        { isLogin ? <p>你已经登录</p> : <p>请登录</p>}
      </div>
    );
  }
}

export default Welcome;
