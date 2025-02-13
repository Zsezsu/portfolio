import BOMB_IMG from "../assets/minesweeper_bomb.png";

function placeBombs(board, numberOfBombs) {
  const randomNumbers = [];
  let isGenerate = true;
  while (isGenerate) {
    let randomNumber = generateRandomNumber(numberOfBombs);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
    if (randomNumbers.length === numberOfBombs) {
      isGenerate = false;
    }
  }
  for (const randomNumber of randomNumbers) {
    const placeForBomb =
      randomNumber >= numberOfBombs ? `${randomNumber}` : `0${randomNumber}`;
    const field = board[placeForBomb[0]][placeForBomb[1]];
    field.isMine = true;
    field.img = BOMB_IMG;
  }
}

function placeImgOnFields(board) {
  for (const boardRow of board) {
    for (const field of boardRow) {
    }
  }
}

function checkFieldAround(board, field) {
  const boardMin = 0;
  const boardMax = board.length;
  let bombCount = 0;
  for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
    for (let colIndex = -1; colIndex < 2; colIndex++) {
      const checkedCoordinate = board[field.x + rowIndex][field.y + colIndex];
      const isInRange =
        checkedCoordinate > boardMin && checkedCoordinate < boardMax
          ? true
          : false;
      if (isInRange) {
        bombCount++;
      }
    }
  }
}

function generateRandomNumber(size) {
  return Math.floor(Math.random() * size * size);
}

export function generateBoard(boardSize) {
    const board = [];
    for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
      const rows = [];
      for (let colIndex = 0; colIndex < boardSize; colIndex++) {
        const field = {
          id: `${rowIndex}${colIndex}`,
          x: rowIndex,
          y: colIndex,
          isMine: false,
          hidden: true,
        };
        rows.push(field);
      }
      board.push(rows);
    }
    placeBombs(board, boardSize);
    return board;
  }