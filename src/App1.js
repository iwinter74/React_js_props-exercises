import './App1.css';
import React, { Component } from 'react';
import TodoList from './Todos/TodoList';







class App1 extends Component {
  state = {
    // i: 0,
    // arr: ['html', 'js'],
    // status: true
  }
  // handleIncrement = () => {

  //   this.setState({ i: this.state.i + 1 });
  //   console.log(this.state.i)
  // }
  // handleDecrement = () => {
  //   this.setState({ i: this.state.i - 1 });
  // }
  // handleReset = () => {
  //   this.setState({ i: 0 });
  // }
  // handleBlack = () => {
  //   this.setState({ status: true });
  // }
  // handleBlue = () => {
  //   this.setState({ status: false });
  // }
  render() {
    return (
      // <div className={this.state.status ? 'App' : 'dark'} >
      //   <button onClick={this.handleIncrement}>Increment</button>
      //   <button onClick={this.handleDecrement}>Decrement</button>
      //   <button onClick={this.handleReset}>Reset</button>
      //   <p>{this.state.i}</p>
      //   {this.state.arr.map((elt, i) => <p key={i}>{elt}</p>)}
      //   <button className="black-white" onClick={this.handleBlack}></button>
      //   <button className="blue-red" onClick={this.handleBlue}></button>

      // </div>
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App1;
