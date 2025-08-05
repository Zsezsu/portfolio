import { useEffect, useState } from "react";
import { ClickHandlers } from "./hooks/useClickHandler";
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

  function displayMines() {
    setGameBoard(
      gameBoard.map((row) =>
        row.map((field) => {
          if (field.isMine)
            return {
              ...field,
              hidden: false,
            };
          return {
            ...field,
          };
        })
      )
    );
  }

  function handleClick(id, isGameOver) {
    const row = parseInt(id[0]);
    const col = parseInt(id[1]);
    const clickedField = gameBoard[row][col];

    if (isGameOver) {
      setIsGameOver(true);
      displayMines();
    } else if (clickedField.isEmpty) {
      const board = openEmptyFields(row, col);
      setGameBoard(board);
    } else {
      const board = structuredClone(gameBoard);
      board[row][col].hidden = false;
      setGameBoard(board);
    }
  }

  function handleRightClick(id, flagged) {
    console.log(id, flagged);
    const row = parseInt(id[0]);
    const col = parseInt(id[1]);
    const board = structuredClone(gameBoard);
    board[row][col].flagged = !flagged;
    setGameBoard(board);
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
          if (field.isEmpty && field.hidden && !field.flagged) {
            field.hidden = false;
            openAround(board, checkedRowCoord, checkedColCoord);
          } else if (!field.isMine && field.hidden && !field.flagged) {
            field.hidden = false;
          }
        }
      }
    }
    return;
  }

  return (
    <ClickHandlers.Provider value={{onClick: handleClick, onRightClick: handleRightClick}}>
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
    </ClickHandlers.Provider>
  );
}

export default Minesweeper;
