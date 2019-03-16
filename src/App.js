import React, { Component } from "react";

import "./App.css";
import Navbar from "./Component/Layout/Navbar";
import Sidebar from "./Component/Layout/Sidebar";
import Content from "./Component/Layout/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
