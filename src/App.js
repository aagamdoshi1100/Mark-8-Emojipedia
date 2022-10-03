import React, { useState } from "react";

var myDict = {
  "❤️": "love",
  "🎃": "Holloween",
  "😊": "smile",
  "✨": "Sparkles"
};
var objectToArray = Object.keys(myDict);

export default function App() {
  var [valueUserInput, setUserInput] = useState("");

  function inputHandler(event) {
    valueUserInput = event.target.value;
    console.log(valueUserInput);

    var meaning = myDict[valueUserInput];
    console.log(meaning + valueUserInput);

    setUserInput(meaning);
  }

  function ClickHandler1(emoji) {
    var meaning = myDict[emoji];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <input onChange={inputHandler}></input>

      <h2>Emoji is:{valueUserInput}</h2>

      {objectToArray.map(function (emoji) {
        return (
          <span
            onClick={() => ClickHandler1(emoji)}
            style={{ cursor: "pointer", fontSize: "3rem", padding: "2rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
