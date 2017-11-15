import React from "react";
import PropTypes from "prop-types";
import "./HeartBeat.css";

const HeartBeat = ({ style }) => (
  <div style={style}>
    <div className="heart-beat">
      <div className="heart-shape" />
    </div>
  </div>
);

HeartBeat.propTypes = {
  style: PropTypes.string.isRequired
};

export default HeartBeat;
