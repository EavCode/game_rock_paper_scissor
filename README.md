# Rock, Paper & Scissors ✊✋✌️

![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A clean, modern browser-based Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## Live Demo

🎮 [https://eavcode.github.io/game_rock_paper_scissor](https://eavcode.github.io/game_rock_paper_scissor)

---

## Features

- **Animated choices** — emoji icons bounce in after each pick (✊ ✋ ✌️)
- **Colour-coded results** — result panel turns green on a win, red on a loss, yellow on a draw
- **Full score tracking** — separate counters for Player wins, Computer wins, and Draws
- **Round counter** — tracks how many rounds have been played
- **Reset button** — clears all scores and resets the board instantly
- **Descriptive outcomes** — tells you exactly why you won or lost (e.g. "Rock crushes Scissors!")
- **Responsive design** — works on desktop and mobile

---

## How to Play

1. Click **Rock**, **Paper**, or **Scissors**
2. The computer picks randomly
3. The result and scores update instantly
4. Hit **Reset Game** to start a fresh session

### Rules

| You pick | Computer picks | Result |
|---|---|---|
| Rock | Scissors | You win — Rock crushes Scissors |
| Scissors | Paper | You win — Scissors cuts Paper |
| Paper | Rock | You win — Paper covers Rock |
| Same | Same | Draw |
| Any | Beats yours | Computer wins |

---

## Tech Stack

| Layer | Detail |
|---|---|
| HTML | Semantic HTML5 |
| CSS | Custom CSS — flexbox, `@keyframes` animations, glass-morphism |
| JavaScript | Vanilla ES6+ (no frameworks) |
| Font | [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts |

---

## Project Structure

```
game_rock_paper_scissor/
├── index.html                    # Main entry point
├── rock-paper-scissor.html       # Game page
├── rock-paper-scissor.css        # All styles
├── r-pp-sc.js                    # Game logic
├── icons8-hand-rock-100.png      # Rock icon
├── icons8-hand-100.png           # Paper icon
├── icons8-hand-scissors-100.png  # Scissors icon
└── _config.yml                   # GitHub Pages config
```

---

## Getting Started

No build step required — just open the file in a browser:

```bash
git clone https://github.com/EavCode/game_rock_paper_scissor.git
cd game_rock_paper_scissor
open index.html
```

---

## Changelog

### v2.0.0
- Complete UI redesign — dark gradient background, glass-morphism cards
- Added emoji choice display with bounce-in animation
- Added colour-coded result section (win/lose/draw)
- Added Draws score column and round counter
- Added Reset Game button
- Added descriptive win/lose messages
- Removed Bootstrap dependency
- Fixed stray `</script>` tag and blank page title

### v1.0.0
- Initial release — basic Rock Paper Scissors with score tracking

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## License

This project is open source and available under the [MIT License](LICENSE).
