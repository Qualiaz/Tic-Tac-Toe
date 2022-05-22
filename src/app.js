"use strict";

import "./styles/main.scss";

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

  // Player switch
  let currPlayerTurn = player2;
  let currPlayer = () => {
    if (currPlayerTurn === player1) {
      return (currPlayerTurn = player2);
    } else return (currPlayerTurn = player1);
  };

  // change board state
  Board.cells.forEach((cell, i) => {
    cell.addEventListener("click", () => {
      if (typeof currBoard[i] === "undefined") {
        currBoard[i] = currPlayer().getMark();
        cell.textContent = currBoard[i];
        console.log(cell.textContent);
        checkWinCondition();
      }

      if (winner) {
        currPlayerTurn.score++;

        setTimeout(resetBoard, 1000);
      }
    });
  });

  function resetBoard() {
    currBoard = Array(9);
    for (let i = 0; i < Board.cells.length; i++) {
      Board.cells[i].textContent = undefined;
    }
    currPlayerTurn = player2;
    winner = false;
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
  }
})();
