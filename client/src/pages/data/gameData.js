export const games = [
  {
    title: "Minesweeper",
    path: "/games/game-info/minesweeper",
    description: "I love this game, so I've created my version. Click for more details.",
  },
  {
    title: "Chess Game",
    path: "/games/game-info/chess",
    description: "A full-stack chess app with multiplayer support and tactic tips.",
  },
];

export const gameDetails = {
  minesweeper: {
    title: "Minesweeper",
    why: `This game is much more than simple clicking. What I love about it is that it seems incredibly simple, yet it is full of deeper tactical possibilities. 
    It beautifully combines logical thinking with skill and speed. So I was curious and wanted to see how it works under the hood.`,
    description:
      "Minesweeper is a classic puzzle game where the goal is to uncover all cells that do not contain mines. Clicking a mine ends the game.",
    resources: [
      { label: "How to play Minesweeper", url: "https://minesweepergame.com/strategy/how-to-play-minesweeper.php" },
      { label: "Advanced strategy", url: "https://minesweepergame.com/strategy/patterns.php" },
    ],
    playLink: "/games/minesweeper",
  },
  chess: {
    title: "Chess",
    why: `Actually this game is in progress right now. When I started to learn coding, me and my teammates started to work on a chess project which unfortunately we couldn't finish. 
    Since then, this is my big dream to create my own version. 
    I've started to work on the backend part and until the full application is ready you can check my repository.`,
    description:
      "Chess is a strategic board game for two players. It requires planning, tactics, and long-term thinking.",
    resources: [
      { label: "Chess Tactics Trainer", url: "https://chesstempo.com" },
      { label: "Beginner’s Guide to Chess", url: "https://www.chess.com/lessons" },
    ],
    playLink: "/projects",
  },
};