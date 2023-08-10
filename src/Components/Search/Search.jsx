import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { myContext } from "../../App";
import Card from "../Card/Card";
import "./search.css";

const Search = () => {
  const context = useContext(myContext);
  console.log(context.stateOne);
  console.log(context.state);
  

  return (
    <div className="search">
      {context.search.map((ele) => {
        return <Card post={ele} />;
      })}
      <Link to="/">
        <button> Home</button>
      </Link>
    </div>
  );
};

export default Search;
