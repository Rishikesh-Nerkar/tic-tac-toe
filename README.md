# Tic Tac Toe

Simple browser-based Tic Tac Toe game built with vanilla JavaScript, HTML and CSS.

## Features
- 2-player local game (X and O)
- Win detection for rows, columns and diagonals
- Draw detection
- Reset / New Game button

## Files
- index.html — game markup
- styles.css — styling
- script.js — game logic (event handling, win/draw detection)

## How to run
1. Clone or copy this folder to your machine.
2. Open `index.html` in your browser (or use VS Code Live Server: right-click → "Open with Live Server").

No build tools or dependencies required.

## How to play
- Click any empty box to place X (first move) or O.
- The game detects a winner or a draw and disables further moves.
- Click "Reset" to clear the board and start a new game.

## Notes / Improvements
- Prevent double counting in draw logic (current implementation counts filled boxes incrementally).
- Add simple AI for single-player mode.
- Improve accessibility (keyboard support, ARIA labels).

## License
MIT
