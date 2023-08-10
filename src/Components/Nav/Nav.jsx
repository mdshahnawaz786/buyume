import React, { useContext, useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { filterText } from "../Functions/function";
import { myContext } from "../../App";

const Nav = ({ setsatetOne }) => {
  const context = useContext(myContext)
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
            filterText(context)
          }}
        >
          search
        </button>
      </Link>
    </div>
  );
};

export default Nav;
