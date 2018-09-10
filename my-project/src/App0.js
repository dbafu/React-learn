import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'


const tags = ['恐龙', '足球小子']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply']
    }
    this.addComment = this.addComment.bind(this)
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  render() {
    const {comments} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NameCard name="King" number={1234567890} isHuman tags={tags}/>
        <LikesButton />
        <DigitalClock />
        <CommentList comments={comments} />
        <CommentBox
          commentsLength={comments.length}
          onAddComment={this.addComment}
        />
      </div>
    );
  }
}

export default App;
