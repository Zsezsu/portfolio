import { Link } from "react-router";

function MyGames() {
  return (
    <>
      <div>MyGames</div>
      <Link to="/games/minesweeper">
        <button type="text">Play minesweeper</button>
      </Link>
    </>
  );
}

export default MyGames;
