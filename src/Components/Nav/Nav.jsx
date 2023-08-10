import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = ({ setsatetOne }) => {
  const [input, setInput] = useState("");
  return (
    <div className="navContainer">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Link to="/search">
        <button
          onClick={() => {
            setsatetOne(input);
          }}
        >
          search
        </button>
      </Link>
    </div>
  );
};

export default Nav;
