import React, { Component } from "react";
import HeartBeat from "../components/HeartBeat";

const style = {
  "margin-top": "-1%",
  marginLeft: "1%",
  padding: 0,
  position: "absolute"
};

class IndexPage extends Component {
  render() {
    return (
      <div>
        <canvas id="mainCanvas" />
        <HeartBeat style={style} />
      </div>
    );
  }
}
export default IndexPage;
