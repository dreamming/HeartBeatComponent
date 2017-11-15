/* eslint-disable */

import React, { Component } from "react";
import IndexPage from "./IndexPage";

const style = {
  marginTop: "-1%",
  marginLeft: "1%",
  textAlign: "center",
  padding: 0,
  position: "absolute"
};

class App extends Component {
  render() {
    return (
      <div>
        <div style={style}>
          <input type="email" />
          <br />
          <input type="password" />
        </div>
        <IndexPage />
      </div>
    );
  }
}

export default App;
