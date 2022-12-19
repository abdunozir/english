import React from "react";
import EachChoice from "../EachChoice/EachChoice";
import GenerateTest from "../GenerateTest/GenerateTest";
import "./EachTest.css";

export default function EachTest() {
  return (
    <div className="testVariant">
      <h2>
        <span>1</span> savol-1
      </h2>
      <div className="choices">
        <EachChoice />
      </div>
    </div>
  );
}
