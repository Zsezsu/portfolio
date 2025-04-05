import { useEffect, useState } from "react";
import { ClickHandler } from './hooks/useClickHandler';
import "./minesweeper.css";
import BoardRow from "./BoardRow";
import { generateBoard } from "./utils/generateBoard";

const SIZE = 10;

function Minesweeper() {
  const [gameBoard, setGameBoard] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const board = generateBoard(SIZE);
    setGameBoard(board);
    console.log(board);
  }, []);

  function handleClick(field, isGameOver) {
    console.log(field)
    isGameOver && setIsGameOver(true);
  }

  return (
    <ClickHandler.Provider value={handleClick}>
      <div className='container'>
        {gameBoard &&
          gameBoard.map((boardRow, index) => {
            return <BoardRow key={`row-${index}`} rows={boardRow} isGameOver={isGameOver} />;
          })}
      </div>
    </ClickHandler.Provider>
  );
}

export default Minesweeper;
