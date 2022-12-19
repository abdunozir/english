import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SegmentIcon from "@mui/icons-material/Segment";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import "./header.css";
import TogleList from "../togleList/TogleList";
import { NavLink } from "react-router-dom";

export default function Header({ words, setWords }) {
  let [siteNav, setSiteNav] = useState(true);
  let leaveSiteNav = () => {
    setSiteNav(true);
  };
  let callSiteNav = () => {
    setSiteNav(false);
  };
  return (
    <div className="container">
      <header className="header">
        <IconButton
          onClick={callSiteNav}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <SegmentIcon />
        </IconButton>

        <div
          className={
            siteNav === true ? "leavesitenav sitenav" : "sitenav sitenavanim"
          }
        >
          <div className="sitenav__context">
            <p className="sitenav__title">Choose one of</p>
            <nav>
              <NavLink to={"/"} onClick={leaveSiteNav}>
                Home
              </NavLink>
              <NavLink to={"/dictionary"} onClick={leaveSiteNav}>
                Dictionary
              </NavLink>
              {words.map((book) => {
                return (
                  <TogleList
                    leaveSiteNav={leaveSiteNav}
                    key={book.id}
                    book={book}
                  />
                );
              })}
            </nav>
          </div>
          <div onClick={leaveSiteNav} className="sitenav__back">
            <p>Click to back</p>
          </div>
        </div>

        <p>LearningZone</p>
      </header>
    </div>
  );
}
