import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import News from "./News/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Home extends Component {
  pageSize = 8;
  state={
    progress:0
  }
  setProgress= (progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={5}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Business">
              <News setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exactpath="/Entertainment">
              <News setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/General">
              <News setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Health">
              <News setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/Science">
              <News setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/Sports">
              <News setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/Technology">
              <News setProgress={this.setProgress}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
