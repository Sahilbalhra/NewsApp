import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import News from "./News/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Home extends Component {
  pageSize=8;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={this.pageSize} country="in" category="general" />
            </Route>
            <Route exact path="/Business">
              <News  key="business" pageSize={this.pageSize} country="in" category="business" />
            </Route>
            <Route  exactpath="/Entertainment">
              <News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />
            </Route>
            <Route exact path="/General">
              <News key="general" pageSize={this.pageSize} country="in" category="general" />
            </Route>
            <Route exact path="/Health">
              <News key="health" pageSize={this.pageSize} country="in" category="health" />
            </Route>
            <Route exact path="/Science">
              <News key="science" pageSize={this.pageSize} country="in" category="science" />
            </Route>
            <Route exact path="/Sports">
              <News key="sports" pageSize={this.pageSize} country="in" category="sports" />
            </Route>
            <Route exact path="/Technology">
              <News key="technology" pageSize={this.pageSize} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
