import BOMB_IMG from "../assets/minesweeper_bomb.png";
import HIDDEN_FIELD from "../assets/minesweeper_unopened.png";
import FLAG_FIELD from "../assets/minesweeper_flag.png";
import EMPTY_FIELD from "../assets/minesweeper_0.png";
import ONE_FIELD from "../assets/minesweeper_1.png";
import TWO_FIELD from "../assets/minesweeper_2.png";
import THREE_FIELD from "../assets/minesweeper_3.png";
import FOUR_FIELD from "../assets/minesweeper_4.png";
import FIVE_FIELD from "../assets/minesweeper_5.png";
import SIX_FIELD from "../assets/minesweeper_6.png";
import SEVEN_FIELD from "../assets/minesweeper_7.png";
import EIGHT_FIELD from "../assets/minesweeper_8.png";

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
      if(!field.isMine){
        checkFieldAround(board, field);
      }
    }
  }
}

function assignFieldImage(field, bombCount) {
  switch (bombCount) {
    case 0:
      field.img = EMPTY_FIELD;
      break;
    case 1:
      field.img = ONE_FIELD;
      break;
    case 2:
      field.img = TWO_FIELD;
      break;
    case 3:
      field.img = THREE_FIELD;
      break;
    case 4:
      field.img = FOUR_FIELD;
      break;
    case 5:
      field.img = FIVE_FIELD;
      break;
    case 6:
      field.img = SIX_FIELD;
      break;
    case 7:
      field.img = SEVEN_FIELD;
      break;
    case 8:
      field.img = EIGHT_FIELD;
      break;
  }
}

function checkFieldAround(board, field) {
  const boardMin = 0;
  const boardMax = board.length;
  let bombCount = 0;
  for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
    for (let colIndex = -1; colIndex < 2; colIndex++) {
      const checkedRowCoord = field.x + rowIndex;
      const checkedColCoord = field.y + colIndex;
      const isInRange = (coordinate) =>
        coordinate >= boardMin && coordinate < boardMax;
      if (isInRange(checkedRowCoord) && isInRange(checkedColCoord)) {
        board[checkedRowCoord][checkedColCoord].isMine && bombCount++;
      }
    }
  }
  assignFieldImage(field, bombCount);
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
  placeImgOnFields(board);
  return board;
}
