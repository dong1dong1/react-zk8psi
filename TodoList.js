import React, { Component, Fragment } from 'react';
import store from './store';
class TodoList extends Component {

  constructor(props){
    super(props)
    console.log(store);
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleList = this.handleList.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  handleInputChange(e){
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleList(){
    return this.state.list.map((item) => {
      return <li>{item}</li>
    })
  }
  btnClick(){
    const action = {
      type: 'add_input_value',
      value: this.state.inputValue
    }
    store.dispatch(action);
  }
  render() {
    return (
      <Fragment>
        <div>
          <input 
            value = {this.state.inputValue} 
            onChange = {this.handleInputChange}
          />
          <button onClick={this.btnClick}>提交</button>
        </div>
        <ul>
          {this.handleList()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;