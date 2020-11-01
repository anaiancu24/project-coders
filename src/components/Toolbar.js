import React from "react";
import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <div
      style={{
        display: "flex",
        color: "red",
        opactity: "0.7",
        justifyContent: "space-between",
        padding: "15px",
        background: 'pink'
      }}
    >
      <Link to='/'>Homepage</Link>
      <Link to='/developers'>Developers List</Link>
    </div>
  );
};

export default Toolbar;

