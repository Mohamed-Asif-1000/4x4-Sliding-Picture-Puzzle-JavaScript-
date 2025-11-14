const size = 4; // 4×4 puzzle
let puzzle = [];
let solvedPuzzle = [];
let moves = 0;


const board = document.getElementById("puzzleBoard");
const message = document.getElementById("message");
const movesCounter = document.getElementById("movesCounter");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");

// Initialize solved puzzle
function initPuzzle() {
  solvedPuzzle = [];
  for (let i = 1; i <= size * size - 1; i++) {
    solvedPuzzle.push(i);
  }
  solvedPuzzle.push(0); // empty space
}

// Shuffle puzzle
function shufflePuzzle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  if (!isSolvable(arr)) return shufflePuzzle(arr);
  return arr;
}

// Check if puzzle is solvable
function isSolvable(arr) {
  let inversions = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] && arr[j] && arr[i] > arr[j]) inversions++;
    }
  }
  const emptyRow = Math.floor(arr.indexOf(0) / size);
  if (size % 2 === 0) {
    return (inversions + emptyRow) % 2 === 0;
  } else {
    return inversions % 2 === 0;
  }
}

// Display puzzle board
function displayPuzzle() {
  if (!board) return;
  board.innerHTML = "";
  puzzle.forEach((num, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (num === 0) {
      cell.classList.add("empty");
    } else {
      cell.style.backgroundImage = "url(cat3.jpg)";
      const row = Math.floor((num - 1) / size);
      const col = (num - 1) % size;
      cell.style.backgroundPosition = `${-col * 100}px ${-row * 100}px`;
      cell.style.backgroundSize = `${size * 100}px ${size * 100}px`;
    }

    cell.addEventListener("click", () => movePiece(index));
    board.appendChild(cell);
  });

  movesCounter.textContent = `Moves: ${moves}`;
}

// Move a piece
function movePiece(index) {
  const emptyIndex = puzzle.indexOf(0);
  if (isAdjacent(index, emptyIndex)) {
    [puzzle[index], puzzle[emptyIndex]] = [puzzle[emptyIndex], puzzle[index]];
    moves++;
    displayPuzzle();
    checkWin();
  }
}

// Check adjacency (same row or same column)
function isAdjacent(i1, i2) {
  const row1 = Math.floor(i1 / size),
    col1 = i1 % size;
  const row2 = Math.floor(i2 / size),
    col2 = i2 % size;
  return (
    (row1 === row2 && Math.abs(col1 - col2) === 1) ||
    (col1 === col2 && Math.abs(row1 - row2) === 1)
  );
}

// Check if puzzle is solved
function checkWin() {
  for (let i = 0; i < puzzle.length - 1; i++) {
    if (puzzle[i] !== i + 1) return false;
  }
  message.textContent = "🎉 Puzzle Completed!";
  board.classList.add("win");
  setTimeout(() => board.classList.remove("win"), 3000);
  return true;
}

// Reset puzzle to solved state
function resetPuzzle() {
  moves = 0;
  puzzle = [...solvedPuzzle];
  displayPuzzle();
  message.textContent = "";
}

// Shuffle puzzle and start game
function shuffle() {
  moves = 0;
  puzzle = shufflePuzzle([...solvedPuzzle]);
  displayPuzzle();
  message.textContent = "";
}

// Initialize the puzzle
initPuzzle();
shuffle();

// Hook up buttons
shuffleBtn.addEventListener("click", shuffle);
resetBtn.addEventListener("click", resetPuzzle);
