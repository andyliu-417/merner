import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log(this.state.count);
    // this.setState(
    //   prevState => ({
    //     count: prevState.count + 1
    //   }),
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    // console.log(this.state.count);

    this.setState({count: this.state.count+1});
    this.setState({count: this.state.count+1});

    this.setState(prevState => ({
      count: prevState.count + 1
    }));
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.count}
        </p>
      </div>
    );
  }
}


export default App;
