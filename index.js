/**
 * Game 2048 AI, implements with javascript.
 *
 * Game rule:
 * The main idea of the game is that you have a 4×4 grid with Integer values,
 * all of which are powers of 2. Zero valued cells are considered empty.
 * At every point during the game you are able to move the values towards 4
 * directions Up, Down, Right or Left. When you perform a move all the values
 * of the grid move towards that direction and they stop either when they reach
 * the borders of the grid or when they reach another cell with non-zero value.
 * If that previous cell has the same value, the two cells are merged into one
 * cell with double value. At the end of every move a random value is added in
 * the board in one of the empty cells and its value is either 2 with 0.9 probability
 * or 4 with 0.1 probability. The game ends when the player manages to create a cell
 * with value 2048 (win) or when there are no other moves to make (lose).
 *
 *
 * Every tile may be in three kinds of state: old, new, and merged.
 *
 * hellfire(asyncloading#163.com)
 * Feb 15th.
 */


/* Use two-dimension array to store tile value.
 * When user move by keyboard directions. we just maintain and update array value.
 */

var arr = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

/**
 * Random value, value is either 2 with 0.9 probability or 4 with 0.1 probability.
 * @return 2 || 4
 */
function randomValue() {
  var rand = Math.Random();
  if (rand >=0 && rand < 0.9) {
    return 2;
  } else {
    return 4;
  }
}

/**
 * Move the values towards left direction.
 */
function moveLeft() {
  for ( var i = 0; i < 4; i ++ ) {
    for ( var j = 1; j < 4; j ++ ) {
      if (arr[i][j - 1] == 0 && arr[i][j] != 0) {
        arr[i][j - 1] = arr[i][j];
        arr[i][j] = 0;
      }
      if (arr[i][j - 1] != 0 && arr[i][j] != 0 && arr[i][j] == arr[i][j - 1]) {
        arr[i][j - 1] *= 2;
        arr[i][j] = 0;
      }
    }
  }
}

/**
 * Move the values towards right direction.
 */
function moveRight() {
  for ( var i = 0; i < 4; i ++ ) {
    for ( var j = 3; j > 0; j -- ) {
      if (arr[i][j] == 0 && arr[i][j - 1] != 0) {
        arr[i][j] = arr[i][j - 1];
        arr[i][j - 1] = 0;
      }
      if (arr[i][j] != 0 && arr[i][j - 1] != 0 && arr[i][j] == arr[i][j - 1] ) {
        arr[i][j] *= 2;
        arr[i][j - 1] = 0;
      }
    }
  }
}

/**
 * Move the values towards up direction.
 */
function moveUp() {
  for ( var i = 1; i < 4; i ++ ) {
    for ( var j = 0; j < 4; j ++ ) {
      if (arr[i - 1][j] == 0 && arr[i][j] != 0) {
        arr[i - 1][j] = arr[i][j];
        arr[i][j] = 0;
      }
      if (arr[i - 1][j] != 0 && arr[i][j] != 0 && arr[i - 1][j] == arr[i][j]) {
        arr[i - 1][j] *= 2;
        arr[i][j] = 0;
      }
    }
  }
}

/**
 * Move the values towards down direction.
 */
function moveDown() {
  for ( var i = 3; i > 0; i --) {
    for (var j = 0; j < 4; j ++) {
      if (arr[i][j] == 0 && arr[i - 1][j] != 0) {
        arr[i][j] = arr[i - 1][j];
        arr[i - 1][j] = 0;
      }
      if (arr[i - 1][j] != 0 && arr[i][j] != 0 && arr[i - 1][j] == arr[i][j]) {
        arr[i][j] *= 2;
        arr[i - 1][j] = 0;
      }
    }
  }
}