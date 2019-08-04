import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState(prevState => {
      return {
        activated: !prevState.activated
      };
    });
  }
  render() {
    const buttonText = this.state.activated
      ? this.props.activeText
      : this.props.inactiveText;
    return (
      <div className="button">
        <button onClick={this.handleChange}>{buttonText}</button>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button activeText="ON" inactiveText="OFF" />
      </div>
    );
  }
}

export default App;
