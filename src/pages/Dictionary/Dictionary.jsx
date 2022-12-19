import React, { useRef, useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [val, setVal] = useState("");
  let [result, setResult] = useState([]);
  let audioWord = useRef(null);
  let [loading, setLoading] = useState(true);
  let getData = (val) => {
    setLoading(false);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.title !== undefined) {
          setResult(data);
        } else {
          setResult([...data]);
        }
        setLoading(true);
      });
  };

  let SearchWord = (e) => {
    setVal(e.target.value);
    if (e.key == "Enter") {
      getData(e.target.value);
    }
  };
  let searchBtn = () => {
    getData(val);
  };
  let playme = () => {
    audioWord.current.play();
  };
  return (
    <div className="dictionarPage">
      <div className="searchInput">
        <input
          type="text"
          placeholder="type word"
          onKeyUp={(e) => SearchWord(e)}
        />
        <button onClick={searchBtn}>Search</button>
      </div>

      {loading == true ? (
        <>
          {result.title == undefined ? (
            <div className="searchResult">
              {result.map((el, i) => {
                return (
                  <div key={i}>
                    <div>
                      <span className="word">{el.word}</span> :{" "}
                      <span>{el.phonetic}</span>
                      {el.phonetics.length > 0 &&
                      el.phonetics[0].audio.length > 0 ? (
                        <>
                          <button onClick={playme}>voice</button>
                          <audio
                            ref={audioWord}
                            className="audioWord"
                            controls
                            src={el.phonetics[0].audio}
                          ></audio>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    {el.meanings.map((meaning, i) => {
                      return (
                        <div key={i} className="antonWord">
                          <span className="wordType">
                            [{meaning.partOfSpeech}]
                          </span>{" "}
                          {meaning.antonyms.length > 0 ? (
                            <p>
                              antonims:{" "}
                              {meaning.antonyms.map((anto) => (
                                <span> {anto},</span>
                              ))}
                            </p>
                          ) : (
                            ""
                          )}
                          {meaning.synonyms.length > 0 ? (
                            <p className="synonWord">
                              synonyms:{" "}
                              {meaning.synonyms.map((syno, i) => (
                                <span key={i}> {syno},</span>
                              ))}
                            </p>
                          ) : (
                            ""
                          )}
                          {meaning.definitions.length > 0 ? (
                            <div className="difinitionsWord">
                              {meaning.definitions.map((def, i) => (
                                <div key={i}>
                                  <p className="difinitionWord">
                                    {def.definition}
                                  </p>
                                  {def.example !== undefined ? (
                                    <p className="wordExample">{`-${def.example}`}</p>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="notFindWord">
              <p>{result.title}</p>
              <p>{result.resolution}</p>
              <p>{result.message}</p>
            </div>
          )}
        </>
      ) : (
        <div className="loading">
          <p>loading...</p>
        </div>
      )}
    </div>
  );
}
