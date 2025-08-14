import { useEffect, useState } from "react";
import { ClickHandlers } from "./hooks/useClickHandler";
import BoardRow from "./BoardRow";
import { generateBoard } from "./utils/generateBoard";
import StatusBar from "./StatusBar";
import styles from "./Minesweeper.module.css";
import "./minesweeper.css";
import { useStopwatch } from "./hooks/useStopwatch";

const SIZE = 10;

function Minesweeper() {
  const [gameBoard, setGameBoard] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  // TODO: need a counter state, which should start from zero, and end size*size
  // at every click we count +1 if we reach the maximum, and the game is not over, we won
  const [gameState, setGameState] = useState("ready"); // ready|running|won|lost
  const [flagsPlaced, setFlagsPlaced] = useState(0);
  const totalMines = SIZE;
  const minesLeft = Math.max(totalMines - flagsPlaced, 0);
  const { elapsed, reset: resetTimer } = useStopwatch(gameState === "running");

  useEffect(() => {
    const board = generateBoard(SIZE);
    setGameBoard(board);
    console.log(board);
  }, []);

  const handleFirstReveal = () => {
    if (gameState === "ready") {
      setGameState("running");
      setGameStarted(true);
    }
  };

  const handleWin = () => setGameState("won");
  const handleLose = () => setGameState("lost");

  const restart = () => {
    setGameBoard(generateBoard(SIZE));
    resetTimer();
    setFlagsPlaced(0);
    setGameState("ready");
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

  function handleClick(id, isGameOver) {
    if (!gameStarted) handleFirstReveal();
    const row = parseInt(id[0]);
    const col = parseInt(id[1]);
    const clickedField = gameBoard[row][col];

    if (isGameOver) {
      setGameOver(true);
      displayMines(row, col);
      handleLose();
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
    if (!gameStarted) handleFirstReveal();
    console.log(id, flagged);
    const row = parseInt(id[0]);
    const col = parseInt(id[1]);
    const board = structuredClone(gameBoard);
    board[row][col].flagged = !flagged;
    const flagCount = !flagged ? 1 : -1;
    setFlagsPlaced(flagsPlaced + flagCount);
    console.log(minesLeft);
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
    <ClickHandlers.Provider
      value={{ onClick: handleClick, onRightClick: handleRightClick }}>
      <div className='container'>
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
