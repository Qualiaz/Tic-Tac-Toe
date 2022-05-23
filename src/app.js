"use strict";

import "./styles/main.scss";

import xImg from "./assets/mark-X.png";
import oImg from "./assets/mark-O.png";

function insertImg(xImg) {
  return `<img src="${xImg}" />`;
}

const Board = (() => {
  const cells = document.querySelectorAll(".main__board-cell");
  console.log(cells);
  return { cells };
})();

const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;

  const score = 0;

  return { getName, getMark, score };
};

const player1 = Player("robert", "X");
const player2 = Player("mark", "O");

const Game = (() => {
  // current board
  let currBoard = Array(9);

  // check if there is currently a winner
  let winner = false;
  let draw = false;
  // Player switch
  let currPlayerTurn = player2;
  const currPlayer = () => {
    if (currPlayerTurn === player1) {
      return (currPlayerTurn = player2);
    } else return (currPlayerTurn = player1);
  };

  // change board state
  const changeBoard = (() => {
    let listener = true;
    Board.cells.forEach((cell, i) => {
      cell.addEventListener("click", () => {
        if (listener) {
          if (typeof currBoard[i] === "undefined") {
            currBoard[i] = currPlayer().getMark();
            cell.innerHTML =
              currPlayerTurn.getMark() === "X"
                ? insertImg(xImg)
                : insertImg(oImg);
            checkWinCondition();
          }
        }

        if (draw) {
          currPlayerTurn = player1;
          setTimeout(resetBoard, 1000);
        }

        if (winner) {
          currPlayerTurn = player1;
          listener = false;
          currPlayerTurn.score++;
          setTimeout(() => (listener = true), 1800);
          setTimeout(resetBoard, 1000);
        }
      });
    });
  })();

  function resetBoard() {
    currBoard = Array(9);
    for (let i = 0; i < Board.cells.length; i++) {
      Board.cells[i].textContent = undefined;
    }
    currPlayerTurn = player2;
    winner = false;
    draw = false;
  }

  // Check Win Condition
  function checkWinCondition() {
    if (
      //ROWS
      (currBoard[0] === currPlayerTurn.getMark() &&
        currBoard[1] === currPlayerTurn.getMark() &&
        currBoard[2] === currPlayerTurn.getMark()) ||
      (currBoard[3] === currPlayerTurn.getMark() &&
        currBoard[4] === currPlayerTurn.getMark() &&
        currBoard[5] === currPlayerTurn.getMark()) ||
      (currBoard[6] === currPlayerTurn.getMark() &&
        currBoard[7] === currPlayerTurn.getMark() &&
        currBoard[8] === currPlayerTurn.getMark()) ||
      //COLUMNS
      (currBoard[0] === currPlayerTurn.getMark() &&
        currBoard[3] === currPlayerTurn.getMark() &&
        currBoard[6] === currPlayerTurn.getMark()) ||
      (currBoard[1] === currPlayerTurn.getMark() &&
        currBoard[4] === currPlayerTurn.getMark() &&
        currBoard[7] === currPlayerTurn.getMark()) ||
      (currBoard[2] === currPlayerTurn.getMark() &&
        currBoard[5] === currPlayerTurn.getMark() &&
        currBoard[8] === currPlayerTurn.getMark()) ||
      //DIAGONALS
      (currBoard[0] === currPlayerTurn.getMark() &&
        currBoard[4] === currPlayerTurn.getMark() &&
        currBoard[8] === currPlayerTurn.getMark()) ||
      (currBoard[2] === currPlayerTurn.getMark() &&
        currBoard[4] === currPlayerTurn.getMark() &&
        currBoard[6] === currPlayerTurn.getMark())
    ) {
      winner = currPlayerTurn.getName();
    }
    if (!winner && !currBoard.includes(undefined)) {
      draw = true;
    }
  }
})();
