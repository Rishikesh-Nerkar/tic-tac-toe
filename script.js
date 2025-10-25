let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerMsg = document.querySelector("#winner");

let turn0 = true;
let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let box of boxes) {
  box.addEventListener("click", () => {
    if (turn0) {
      //box.style.color = "red" //this also works
      box.setAttribute("style", "color: #68C3D4"); // and this also works
      box.innerText = "X";
      turn0 = false;
    } else {
      box.setAttribute("style", "color: #568EA3"); // and this also works
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
    checkDraw(box);
  });
}
const showWinner = (winner) => {
  winnerMsg.innerText = `Winner is ${winner}`;
  winnerMsg.classList.remove("hide");
};

let boxesWithText = 0;
const checkDraw = (box) => {
  if (box.innerText != "") {
    boxesWithText++;
  }
  if (boxesWithText >= 9 && winnerMsg.innerText === "") {
    winnerMsg.innerText = "It's Draw!";
    winnerMsg.classList.remove("hide");
    boxesWithText = 0;
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const newGame = () => {
  turn0 = true;
  winnerMsg.classList.add("hide");
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
    boxesWithText = 0;
    winnerMsg.innerText = "";
  }
};
resetBtn.addEventListener("click", newGame);

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner is", pos1Val);
        showWinner(pos1Val);
        disableBoxes();
      }
    }
  }
};
