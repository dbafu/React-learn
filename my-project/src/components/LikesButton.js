import React from 'react'

class LikesButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    this.increaseLikes = this.increaseLikes.bind(this)
  }

  increaseLikes() {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div className="likes-btn-component">
        <button type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={this.increaseLikes}
        >
        <span role="img" aria-label="icon">👍</span> {this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikesButton;
