import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleBtnClick() {
    let val = this.state.inputValue
    if (val) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }

  handleInputChange(e) {
    let val = e.target.value.trim()
    console.log('val : ', val);
    if (val) {
      this.setState({
        inputValue: e.target.value
      })
    }
  }

  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            delete={this.handleDelete}
            content={item}
            key={index}
            index={index}
          />
        );
      })
    );
  }

  // 父组件通过属性的方式向子组件传递参数
  // 子组件通过 props 接受 父组件传递过来得到参数
  render() {
    return (
      <Fragment>
        <div>
          <input value= {this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
          <button style={{background: 'red', color: 'white'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
