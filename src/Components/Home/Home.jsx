import React, { useContext, useEffect, useState } from "react";
import { apiFetching } from "../Functions/function";
import "./home.css";
import { myContext } from "../../App";
import Card from "../Card/Card";

const Home = () => {
  const context = useContext(myContext);
  return (
    <>
      <div>
        <div className="container">
          {context.state &&
            context.state.map((ele) => {
              return (
                <>
                  <Card post={ele} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
