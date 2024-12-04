const grid = document.querySelector(".grid");
let curPlayer = "X";
const arr = Array(9).fill(null);
const resultContainer = document.querySelector(".result");
const checkWinner = () => {
  if (
    (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    // document.write(`The Winner is ${curPlayer}`);
    resultContainer.innerHTML = `<p>The Winner is <span>${curPlayer}</span>!</p>`;
    resultContainer.classList.add("winner");
    grid.removeEventListener("click", handleClick); // Stop further clicks
    return;
  }
  // Check for a draw
  if (!arr.includes(null)) {
    // document.write("It's a draw!");
    resultContainer.innerHTML = `<p>It's a draw!</p>`;
    resultContainer.classList.add("draw");
    grid.removeEventListener("click", handleClick); // Stop further clicks
  }
};
const handleClick = (e) => {
  let curCell = Number(e.target.id);
  if (arr[curCell] != null) return;
  arr[curCell] = curPlayer;

  document.getElementById(curCell).innerText = curPlayer;
  checkWinner();
  curPlayer = curPlayer === "X" ? "O" : "X";
};
grid.addEventListener("click", handleClick);
