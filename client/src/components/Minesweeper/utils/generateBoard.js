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
        exploded: false,
      };
      rows.push(field);
    }
    board.push(rows);
  }
  placeBombs(board, boardSize);
  countBombsAroundFields(board);
  return board;
}
