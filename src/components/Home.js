import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import News from "./News/News";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    );
  }
}
