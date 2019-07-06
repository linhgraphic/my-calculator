import React from "react";
import "./Board.css";
import Button from "../Button";

const Board = props => {
  return (
    <div className="board-container">
      {props.symbols.map(symbol => (
        <Button
          id={symbol}
          onClick={props.onChange}
          key={symbol}
          disabled={props.disabled}
        >
          {symbol}
        </Button>
      ))}
    </div>
  );
};

export default Board;
