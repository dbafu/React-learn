import React from 'react'

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    // alert(this.textInput.value)
    this.props.onAddComment(this.textInput.value)
    this.textInput.value = ''
    e.preventDefault()
  }

  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入内容"
            ref={(textInput) => {this.textInput = textInput}}
          />
          <button className="btn btn-primary" type="submit">留言</button>
          <p>已有{this.props.commentsLength}条评论</p>
        </div>
      </form>
    )
  }
}

export default CommentBox;
