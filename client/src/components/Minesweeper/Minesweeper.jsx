import { useEffect, useState } from "react";
import { ClickHandlers } from "./hooks/useClickHandler";
import BoardRow from "./BoardRow";
import { generateBoard } from "./utils/generateBoard";
import StatusBar from "./StatusBar";
import styles from "./Minesweeper.module.css";
import "./minesweeper.css";
import { useStopwatch } from "./hooks/useStopwatch";

const SIZE = 10;
const TOTAL_MINES = SIZE;
const MAX_FIELD_NUMBER = SIZE * SIZE;
const MAX_HIDDEN_FIELDS = MAX_FIELD_NUMBER - TOTAL_MINES;
const gameStates = {
  ready: "ready",
  running: "running",
  won: "won",
  lost: "lost",
};
const gameStateDescription = {
  ready: "Minesweeper game is ready to start, just click on any field below",
  running: "The game is running, Good luck!",
  won: "Congratulations, you won!",
  lost: "Unfortunately you lost :( Just click on the emoji to restart",
};

function Minesweeper() {
  const [gameBoard, setGameBoard] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState(gameStates.ready);
  const [flagsPlaced, setFlagsPlaced] = useState(0);
  const minesLeft = Math.max(TOTAL_MINES - flagsPlaced, 0);
  const { elapsed, reset: resetTimer } = useStopwatch(gameState === "running");

  useEffect(() => setGameBoard(generateBoard(SIZE)), []);

  const handleFirstReveal = () => {
    if (gameState === "ready") {
      setGameState(gameStates.running);
      setGameStarted(true);
    }
  };

  const handleWin = () => {
    setGameState(gameStates.won);
    setGameOver(true);
  };

  const handleLose = () => {
    setGameState(gameStates.lost);
    setGameOver(true);
  };

  const restart = () => {
    setGameBoard(generateBoard(SIZE));
    resetTimer();
    setFlagsPlaced(0);
    setGameState(gameStates.ready);
    setGameStarted(false);
    setGameOver(false);
  };

  function displayMines(row, col) {
    const displayBoard = gameBoard.map((row) =>
      row.map((field) =>
        field.isMine
          ? {
              ...field,
              hidden: false,
            }
          : {
              ...field,
            }
      )
    );
    displayBoard[row][col].exploded = true;
    setGameBoard(displayBoard);
  }

  function countOpenedFields(board) {
    return board.reduce((openedFieldCounter, row) => {
      return (openedFieldCounter += row.reduce(
        (countOnRow, field) => (!field.hidden ? (countOnRow += 1) : countOnRow),
        0
      ));
    }, 0);
  }

  function checkWin(actualBoard) {
    return countOpenedFields(actualBoard) === MAX_HIDDEN_FIELDS;
  }

  function handleClick(id, isGameOver) {
    if (!gameStarted) handleFirstReveal();
    const { row, col } = convertId(id);

    if (isGameOver) {
      handleLose();
      displayMines(row, col);
    } else {
      const clickedField = gameBoard[row][col];
      const actualBoard = structuredClone(gameBoard);
      actualBoard[row][col].hidden = false;
      clickedField.isEmpty && openAroundEmptyFields(actualBoard, row, col);
      checkWin(actualBoard) && handleWin();
      setGameBoard(actualBoard);
    }
  }

  function convertId(id) {
    const row = parseInt(id[0]);
    const col = parseInt(id.substring(1));
    return { row, col };
  }

  function handleRightClick(id, flagged) {
    if (!gameStarted) handleFirstReveal();
    const { row, col } = convertId(id);
    const board = structuredClone(gameBoard);
    board[row][col].flagged = !flagged;
    const flagCount = !flagged ? 1 : -1;
    setFlagsPlaced(flagsPlaced + flagCount);
    setGameBoard(board);
  }

  function openAroundEmptyFields(board, x, y) {
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
            openAroundEmptyFields(board, checkedRowCoord, checkedColCoord);
          } else if (!field.isMine && field.hidden && !field.flagged) {
            field.hidden = false;
          }
        }
      }
    }
    return;
  }

  return (
    <ClickHandlers.Provider
      value={{ onClick: handleClick, onRightClick: handleRightClick }}>
      <div className='container'>
        <h4>{gameState && gameStateDescription[gameState]}</h4>
        <div className={styles.frame}>
          <div className={styles.inner}>
            <StatusBar
              minesLeft={minesLeft}
              elapsed={elapsed}
              gameState={gameState}
              onRestart={restart}
            />
            {gameBoard &&
              gameBoard.map((boardRow, index) => {
                return (
                  <BoardRow
                    key={`row-${index}`}
                    rows={boardRow}
                    isGameOver={gameOver}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </ClickHandlers.Provider>
  );
}

export default Minesweeper;
