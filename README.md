# Tic-Tac-Toe Game 

A clean, interactive Tic-Tac-Toe game built with React. It supports win detection, draw detection, move blocking after game end, and a visual winning strike-through line.

live here : https://tic-tac-toe-azure-zeta-84.vercel.app/

## Overview

This project is a classic 3×3 Tic-Tac-Toe game where two players take turns placing **X** and **O**. The app:

- Tracks board state in React state
- Computes the winner (or draw) after each move
- Highlights the winning cells and draws a strike-through line for the winning combination
- Lets you reset and play again

## Features

- **Turn-based play**: X and O alternate automatically
- **Win detection**: checks all 8 winning lines
- **Draw detection**: detects full board with no winner
- **Winning UI**: highlights winning cells + displays an animated line overlay
- **Reset**: restart the game anytime

## Tech Stack

- **React 19**
- **Vite** (this repo uses `rolldown-vite` under the `vite` package alias)
- **ESLint**
- Plain **CSS** for styling

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Run locally (dev)

```bash
npm run dev
```

Then open the URL printed in your terminal.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deployment

This is a standard Vite app.

- Build command: `npm run build`
- Output directory: `dist/`

For platforms like Netlify/Vercel, set the build command and output directory as above.

## Project Structure

```text
tic-tac-toe/
	src/
		components/
			Board.jsx        # Renders 3x3 grid + winning line overlay
			Cell.jsx         # Individual clickable cell
			WinningLine.jsx  # Strike-through line for the winning combo
		utils/
			gameLogic.js     # Winner/draw calculation logic
		styles/
			styles.css       # App styling
		App.jsx            # Game state + UI composition
		main.jsx           # React entry point
```

## How It Works

- The board is stored as an array of 9 values (`null`, `"X"`, `"O"`).
- After each move, the app calls `calculateWinner(board)` from `src/utils/gameLogic.js`.
- `calculateWinner` returns:
	- `{ winner: "X" | "O", line: [a,b,c] }` when someone wins
	- `{ winner: "draw", line: [] }` when the board is full
	- `null` if the game should continue
- When a winning `line` exists, `WinningLine` renders a positioned overlay that matches the line.

## Game Rules

- Players alternate placing X and O.
- First player to get 3 in a row (horizontal, vertical, or diagonal) wins.
- If all 9 cells are filled and nobody wins, it’s a draw.

## Possible Enhancements

- Single-player mode (basic AI)
- Move history + time travel
- Scoreboard across rounds
- Accessibility improvements (keyboard play + ARIA)

## License

No license file is currently included in this repository. If you plan to share or reuse this code publicly, consider adding a `LICENSE`.
