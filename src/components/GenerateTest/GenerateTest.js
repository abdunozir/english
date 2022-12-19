import React, { useState } from "react";
import db from "../../data/Data";

export default function GenerateTest() {
  let [test, settest] = useState([
    {
      id: 1,
      savol: {},
      variant: [],
    },
  ]);
  for (let i = 0; i >= 10; i++) {}

  console.log(generateUnit());
}

function generateRndom() {
  return Math.floor(Math.random() * 10);
}

function generateUnit() {
  let b = 1;
  let u = 1;
  return db.filter((el) => {
    if (el.id == b) {
      if (el.book.id == u) {
        return el.book.unit;
      }
    }
  });
}
