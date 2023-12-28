import React, { Component } from 'react';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="inputText"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <div className="outputResult">
          <h3>Pro Note</h3>
          <div className="outputText">{this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default Notes;
