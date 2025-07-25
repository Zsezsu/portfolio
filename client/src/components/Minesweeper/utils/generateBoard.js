import BOMB_IMG_CLICKED from "../assets/minesweeper_bomb_clicked.png";
import BOMB_IMG_DEFAULT from "../assets/minesweeper_bomb_default.png";
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

const FIELD_IMAGES = [
  EMPTY_FIELD,
  ONE_FIELD,
  TWO_FIELD,
  THREE_FIELD,
  FOUR_FIELD,
  FIVE_FIELD,
  SIX_FIELD,
  SEVEN_FIELD,
  EIGHT_FIELD,
];

function placeBombs(board, numberOfBombs) {
  const bombPositions = [];
  while (bombPositions.length < numberOfBombs) {
    let bombPosition = generateRandomNumber(numberOfBombs);
    if (!bombPositions.includes(bombPosition)) {
      bombPositions.push(bombPosition);
    }
  }
  for (const position of bombPositions) {
    const placeForBomb = position >= 10 ? `${position}` : `0${position}`;
    const field = board[placeForBomb[0]][placeForBomb[1]];
    field.isMine = true;
    field.isEmpty = false;
  }
}

function generateRandomNumber(size) {
  return Math.floor(Math.random() * size * size);
}

function countBombsAroundFields(board) {
  for (const boardRow of board) {
    for (const field of boardRow) {
      if (!field.isMine) {
        checkFieldAround(board, field);
      }
    }
  }
}

function assignFieldImage(field, bombCount) {
  field.img = FIELD_IMAGES[bombCount];
  field.isEmpty = bombCount === 0 ? true : false;
}

//TODO: assignFieldImg, and the inside if could be arguments as callbacks, in this way I could reuse this function for checking a field around
function checkFieldAround(board, field) {
  const boardMin = 0;
  const boardMax = board.length;
  let bombCount = 0;
  const isInRange = (coordinate) => coordinate >= boardMin && coordinate < boardMax;
  
  for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
    for (let colIndex = -1; colIndex < 2; colIndex++) {
      const checkedRowCoord = field.x + rowIndex;
      const checkedColCoord = field.y + colIndex;
      if (isInRange(checkedRowCoord) && isInRange(checkedColCoord)) {
        board[checkedRowCoord][checkedColCoord].isMine && bombCount++;
      }
    }
  }
  //assignFieldImage(field, bombCount);
  field.bombCount = bombCount;
  field.isEmpty = bombCount === 0 ? true : false;
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
        isEmpty: true,
        hidden: true,
        flagged: false,
        bombCount: 0,
      };
      rows.push(field);
    }
    board.push(rows);
  }
  placeBombs(board, boardSize);
  countBombsAroundFields(board);
  return board;
}
