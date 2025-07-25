import { useEffect, useState } from "react";
import { ClickHandler } from "./hooks/useClickHandler";
import "./minesweeper.css";
import BoardRow from "./BoardRow";
import { generateBoard } from "./utils/generateBoard";

const SIZE = 10;

function Minesweeper() {
  const [gameBoard, setGameBoard] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  // TODO: need a counter state, which should start from zero, and end size*size
  // at every click we count +1 if we reach the maximum, and the game is not over, we won

  useEffect(() => {
    const board = generateBoard(SIZE);
    setGameBoard(board);
    console.log(board);
  }, []);

  function handleClick(id, isGameOver) {
    isGameOver && setIsGameOver(true);
    const board = gameBoard.map((row) =>
      row.map((field) => {
        if (field.id === id) {
          return {
            ...field,
            hidden: false,
          };
        }
        return field;
      })
    );
    setGameBoard(board);
  }


  return (
    <ClickHandler.Provider value={handleClick}>
      <div className='container'>
        {gameBoard &&
          gameBoard.map((boardRow, index) => {
            return (
              <BoardRow
                key={`row-${index}`}
                rows={boardRow}
                isGameOver={isGameOver}
              />
            );
          })}
      </div>
    </ClickHandler.Provider>
  );
}

export default Minesweeper;
