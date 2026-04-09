# Rock, Paper & Scissors

A clean, modern browser-based Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript.

## Features

- **Animated choices** — emoji icons bounce in after each pick (✊ ✋ ✌️)
- **Colour-coded results** — result panel turns green on a win, red on a loss, yellow on a draw
- **Full score tracking** — separate counters for Player wins, Computer wins, and Draws
- **Round counter** — tracks how many rounds have been played
- **Reset button** — clears all scores and resets the board
- **Descriptive outcomes** — tells you exactly why you won or lost (e.g. "Rock crushes Scissors!")
- **Responsive design** — works on desktop and mobile

## How to Play

1. Click **Rock**, **Paper**, or **Scissors**
2. The computer picks randomly
3. The result and scores update instantly
4. Hit **Reset Game** to start over

## Tech Stack

| Layer | Detail |
|---|---|
| HTML | Semantic HTML5 |
| CSS | Custom CSS with CSS variables, flexbox, `@keyframes` animations |
| JavaScript | Vanilla ES6+ (no frameworks) |
| Font | [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts |

## Project Structure

```
game_rock_paper_scissor/
├── index.html                  # Main entry point
├── rock-paper-scissor.html     # Game page
├── rock-paper-scissor.css      # All styles
├── r-pp-sc.js                  # Game logic
├── icons8-hand-rock-100.png    # Rock icon
├── icons8-hand-100.png         # Paper icon
├── icons8-hand-scissors-100.png# Scissors icon
└── _config.yml                 # GitHub Pages config
```

## Live Demo

Hosted on GitHub Pages: [https://eavcode.github.io/game_rock_paper_scissor](https://eavcode.github.io/game_rock_paper_scissor)
