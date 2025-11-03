let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelectorAll(".msg-container");
let msg = document.querySelector("#msg");

let changeO = true;

let pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (changeO) {
      box.innerText = "O";
      changeO = false;
    } else {
      box.innerText = "X";
      changeO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let par of pattern) {
    let position1 = boxes[par[0]].innerText;
    let position2 = boxes[par[1]].innerText;
    let position3 = boxes[par[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        console.log("Winner", position1);
        showWinner(position1);
      }
    }
  }
};
