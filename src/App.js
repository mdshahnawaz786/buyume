import { createContext, useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import { apiFetching } from "./Components/Functions/function";
import Search from "./Components/Search/Search";

export const myContext = createContext();
function App() {
  const [state, setstate] = useState([]);
  const [stateOne, setsatetOne] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    apiFetching(setstate);
  }, []);

  return (
    <>
      <myContext.Provider value={{ state, stateOne ,search, setSearch}}>
        <div className="App">
          <Nav setsatetOne={setsatetOne} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </myContext.Provider>
    </>
  );
}

export default App;
