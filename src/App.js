import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import db from "./data/Data";
import Main from "./Main";
import Home from "./pages/Home/Home";

function App() {
  let [words, setWords] = useState([...db]);
  return (
    <div>
      <Main words={words} setWords={setWords} />
    </div>
  );
}

export default App;
