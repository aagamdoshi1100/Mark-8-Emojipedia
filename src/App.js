import React, { useState } from "react";

var myDict = {
  "❤️": "love",
  "🎃": "Holloween",
  "😊": "smile",
  "✨": "Sparkles",
  "🪔": "Diwali",
  "👍": "Thumbs up",
  "😎": "Smiling Face with Sunglasses",
  "😍": "Smiling Face with Heart-Eyes",
  "🥰": "Smiling Face with Hearts",
  "🙂": "Slightly Smiling Face",
  "😇": "Smiling Face with Halo",
  "⛷️": "Skier",
  "🏂": "Snowboarder",
  "🏌️": "Person Golfing",
  "🏌️‍♂️": "Man Golfing"
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

      <h3>Please copy and and paste emoji from below list to identify</h3>
      <input onChange={inputHandler}></input>

      <h3>Emoji is:{valueUserInput}</h3>

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
