import React, { useState } from "react";
import "./App.css";
import { symbolArray } from "./constants";
import Board from "./components/board";
import Header from "./components/header";

function App() {
  const [expression, setExpression] = useState("");
  const onChange = event => {
    const key = event.target.id;
    switch (key) {
      case "C":
        setExpression(expression.slice(0, -1));
        break;
      case "CE":
        setExpression("");
        break;
      case "=":
        try {
          //eslint-disable-next-line
          setExpression(eval(expression));
        } catch (error) {
          setExpression("Error");
        }
        break;
      default:
        setExpression(expression + key);
    }
  };
  return (
    <div className="app-container">
      <Header value={expression} />
      <Board
        onChange={onChange}
        symbols={symbolArray}
        disabled={expression === "Error"}
      />
    </div>
  );
}

export default App;
