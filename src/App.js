import React, { Component } from 'react';
import './App.css';
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="main-header">
            <div className="logo">
              <a href="#hjem">
                <img src={logo} alt=""/>
              </a>
            </div>

            <ul className="nav">
              <li> <a id="hjem" href="#hjem">Hjem</a> </li>
              <li> <a href="#">Om Oss</a> </li>
              <li> <a href="#">Prosjekter</a> </li>
              <li> <a href="#">Kontakt</a> </li>
            </ul>
          </header>
          <div className="main-content">
            <div className="section1">
              <h1>Main Headline</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis lobortis quam id venenatis. Integer eget pulvinar elit. Nunc magna mauris, sollicitudin eget ex quis, sagittis pretium velit. Morbi eget tortor vel massa iaculis tincidunt in eget nunc. Curabitur ornare faucibus fringilla. Praesent magna neque, auctor ac euismod sed, suscipit sed lorem. Curabitur euismod tellus et nibh condimentum mollis. Phasellus eleifend semper augue, ut feugiat orci fringilla non. Cras vel ultricies eros. Sed sed ante a ante gravida efficitur quis non dui. Fusce sagittis ullamcorper metus et tempus.</p>
              <a className="button" href="#">Learn More</a>
            </div>
          </div>
          <footer>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;