import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {

  constructor (props) {
    super(props)

    //Bind the this context to the handler function
    this.onClickEvent = this.onClickEvent.bind(this);

    // Set some state
    this.state = {
      count: 0
    };
  }

  // This method will be sent to the child component
  onClickEvent () {
    this.setState({
      count: this.state.count + 1
    });
  }

  //Render the child component and set the action property with the handler as value
  render() {
    return (

      <div className="container">
        <Header />
        <MainContent onClickEvent={this.onClickEvent} value={this.state.count}/>
      </div>
    );
  }
}

export default App;
