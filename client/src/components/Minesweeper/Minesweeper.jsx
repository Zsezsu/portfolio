import { useEffect, useState, createContext } from "react";
import hiddenField from "./assets/32px-Minesweeper_unopened_square.svg.png";
import "./minesweeper.css";
import BoardRow from "./BoardRow";

const SIZE = 10;

function generateGameBoard() {
  const board = [];
  for (let rowIndex = 0; rowIndex < SIZE; rowIndex++) {
    const rows = [];
    for (let colIndex = 0; colIndex < SIZE; colIndex++) {
      const field = {
        id: `${rowIndex}${colIndex}`,
        x: rowIndex,
        y: colIndex,
        isMine: false,
        img: hiddenField,
      };
      rows.push(field);
    }
    board.push(rows);
  }
  return board;
}

export const ClickHandler = createContext(null);

function Minesweeper() {
  const [gameBoard, setGameBoard] = useState(null);

  useEffect(() => {
    const board = generateGameBoard();
    setGameBoard(board);
    console.log(board);
  }, []);

  function handleClick() {
  }

  return (
    <ClickHandler.Provider value={handleClick}>
      <div className='container'>
        {gameBoard &&
          gameBoard.map((boardRow, index) => {
            return <BoardRow key={`row-${index}`} rows={boardRow} />;
          })}
      </div>
    </ClickHandler.Provider>
  );
}

export default Minesweeper;
