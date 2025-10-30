import React from "react";
import Cell from "./Cell";
import WinningLine from "./WinningLine";

export default function Board({ board, onClick, winningLine, winner }) {
  return (
    <div className="board-wrapper">
      <div className="board">
        {board.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            onClick={() => onClick(index)}
            highlight={winningLine.includes(index)}
          />
        ))}
      </div>
      <WinningLine winningLine={winningLine} winner={winner} />
    </div>
  );
}
