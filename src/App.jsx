import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./utils/gameLogic";
import "./styles/styles.css";

export default function App() {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  useEffect(() => {
    const result = calculateWinner(board);
    if (result) {
      if (result.winner === "draw") {
        setIsDraw(true);
      } else {
        setWinner(result.winner);
        setWinningLine(result.line);
      }
    }
  }, [board]);

  const resetGame = () => {
    setBoard(emptyBoard);
    setXIsNext(true);
    setWinner(null);
    setWinningLine([]);
    setIsDraw(false);
  };

  return (
    <div className="app-container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <Board board={board} onClick={handleClick} winningLine={winningLine} winner={winner} />
      <h3 className="status">
        {winner
          ? `Winner: ${winner}`
          : isDraw
          ? "It's a Draw!"
          : `Next Player: ${xIsNext ? "X" : "O"}`}
      </h3>
      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}
