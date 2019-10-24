import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = { value: '' }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3"value={this.state.value} onChange={this.handleChange} ></textarea>
        <div className="counter">{this.state.value.length}</div>
      </div>
    );
  }
}

export default App;
