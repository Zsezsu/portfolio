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

    const row = parseInt(id[0]);
    const col = parseInt(id[1]);
    const clickedField = gameBoard[row][col];

    //TODO check why is this true when we click on a bomb
    if (clickedField.isEmpty) {
      const board = openEmptyFields(row, col);
      setGameBoard(board);
    } else {
      const board = structuredClone(gameBoard);
      board[row][col].hidden = false;
      setGameBoard(board);
    }
  }

  function openEmptyFields(row, col) {
    const board = structuredClone(gameBoard);
    board[row][col].hidden = false;
    openAround(board, row, col);
    return board;
  }

  function openAround(board, x, y) {
    const boardMin = 0;
    const boardMax = board.length;

    const isInRange = (coordinate) =>
      coordinate >= boardMin && coordinate < boardMax;

    for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
      for (let colIndex = -1; colIndex < 2; colIndex++) {
        if (rowIndex === 0 && colIndex === 0) continue;
        const checkedRowCoord = x + rowIndex;
        const checkedColCoord = y + colIndex;
        if (isInRange(checkedRowCoord) && isInRange(checkedColCoord)) {
          const field = board[checkedRowCoord][checkedColCoord];
          if (field.isEmpty && field.hidden) {
            field.hidden = false;
            openAround(board, checkedRowCoord, checkedColCoord);
          } else if (!field.isMine && field.hidden) {
            field.hidden = false;
          }
        }
      }
    }
    return;
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
