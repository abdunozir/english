import React, { useState } from "react";
import EachTest from "../../components/EachTest.jsx/EachTest";
import db from "../../data/Data";
import "./UniteTest.css";

export default function UniteTest() {
  let [ready, setReady] = useState(false);
  let [data, setData] = useState([...db]);

  let begin = () => {
    setReady(true);
  };
  return (
    <div className="unitTest">
      {ready !== true ? (
        <div className="unitTest__ready">
          <h2>Unit - {1}</h2>
          <p>
            test soni 10 ta bo'lib yuqorida yozilgan unit bo'yicha tahmini
            tanlash orqali tuzuladi !
          </p>
          <p>Bo'yicha testni boshlash uchun tugmani bosing !</p>
          <button onClick={begin}>Boshlash</button>
        </div>
      ) : (
        <div className="unitTest_variants">
          <EachTest />
        </div>
      )}
    </div>
  );
}
