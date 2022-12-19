import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./main.css";
import { Route, Routes } from "react-router";
import UniteTest from "./pages/UniteTest/UniteTest";
import BookTest from "./pages/bookTest/BookTest";
import Dictionary from "./pages/Dictionary/Dictionary";

export default function Main({ words, setWords }) {
  return (
    <>
      <div className="hero">
        {/* <Header words={words} setWords={setWords} /> */}
      </div>
      <main className="main">
        <Routes>
          <Route path={"/"} element={<Dictionary />} />
        </Routes>
        {/* <Routes>
          <Route path={"/dictionary"} element={<Home />} />
          <Route path={"/booktest/:id"} element={<BookTest />} />
          <Route path={"/unittest/:id"} element={<UniteTest />} />
        </Routes> */}
      </main>
    </>
  );
}
