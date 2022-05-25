"use strict";

import "./styles/main.scss";

import xImg from "./assets/mark-X.png";
import oImg from "./assets/mark-O.png";

const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;
  const score = 0;

  return { getName, getMark, score };
};

let player1;
let player2;

const Board = (() => {
  const cells = document.querySelectorAll(".main__board-cell");
  return { cells };
})();

// MARK SELECTION SCREEN
const selectMark = (() => {
  const xMark = document.querySelector("#xMarkSelection");
  const oMark = document.querySelector("#oMarkSelection");

  const markContainer = document.querySelector("#markContainer");
  const enemyContainer = document.querySelector("#enemyContainer");

  xMark.addEventListener("click", () => {
    player1 = Player("Player 1", "X");
    player2 = Player("Player 2", "O");

    markContainer.style.display = "none";
    enemyContainer.style.display = "block";
  });

  oMark.addEventListener("click", () => {
    player1 = Player("Player 1", "O");
    player2 = Player("Player 2", "X");

    markContainer.style.display = "none";
    enemyContainer.style.display = "block";
  });
})();

// ENEMY SELECTION SCREEN
const selectEnemy = (() => {
  const gameContainer = document.querySelector("#gameContainer");
  const enemyContainer = document.querySelector("#enemyContainer");
  const aiSelection = document.querySelector("#aiEnemySelection");
  const playerSelection = document.querySelector("#playerEnemySelection");

  const selectEnemy = function () {
    enemyContainer.style.display = "none";
    gameContainer.style.display = "block";
    Game();
  };

  playerSelection.addEventListener("click", selectEnemy);
  aiSelection.addEventListener("click", selectEnemy);
})();

const Game = () => {
  // current board
  let currBoard = Array(9);

  let winner = false;
  let draw = false;

  // Player switch
  let currPlayerTurn;
  player1.getMark() === "X"
    ? (currPlayerTurn = player1)
    : (currPlayerTurn = player2);
  const playerSwitch = () => {
    if (currPlayerTurn === player1) {
      return (currPlayerTurn = player2);
    } else return (currPlayerTurn = player1);
  };

  //highlight player turn
  const renderTurn = () => {
    const containerPlayer1 = document.querySelector("#player1Container");
    const containerPlayer2 = document.querySelector("#player2Container");

    if (currPlayerTurn.getName() === "Player 1") {
      // console.log(currPlayerTurn.getName());
      containerPlayer2.style.outline = "none";
      if (player1.getMark() === "X")
        return (containerPlayer1.style.outline = "1px solid #6dd6da");
      else {
        return (containerPlayer1.style.outline = "1px solid #edb458");
        // console.log(currPlayerTurn.getMark());
      }
    }

    if (currPlayerTurn.getName() === "Player 2") {
      containerPlayer1.style.outline = "none";
      if (player2.getMark() === "X")
        return (containerPlayer2.style.outline = "1px solid #6dd6da");
      else return (containerPlayer2.style.outline = "1px solid #edb458");
    }
  };
  renderTurn();

  const renderScore = () => {
    const scorePlayer1 = document.querySelector("#player1Score");
    const scorePlayer2 = document.querySelector("#player2Score");

    scorePlayer1.textContent = player1.score;
    scorePlayer2.textContent = player2.score;
  };

  // change board state
  const changeBoard = (() => {
    let listener = true;
    const insertImg = (img) => {
      return `<img src="${img}" />`;
    };

    Board.cells.forEach((cell, i) => {
      cell.addEventListener("click", () => {
        if (listener) {
          if (typeof currBoard[i] === "undefined") {
            currBoard[i] = currPlayerTurn.getMark();
            cell.innerHTML =
              currPlayerTurn.getMark() === "X"
                ? insertImg(xImg)
                : insertImg(oImg);
            checkWinCondition();
            renderScore();
            playerSwitch();
            renderTurn();
          }
        }

        if (draw) {
          player1.getMark() === "X"
            ? (currPlayerTurn = player1)
            : (currPlayerTurn = player2);
          setTimeout(resetBoard, 1000);
        }

        if (winner) {
          player1.getMark() === "X"
            ? (currPlayerTurn = player1)
            : (currPlayerTurn = player2);
          listener = false;

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

    winner = false;
    draw = false;
    renderTurn();
  }

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
      currPlayerTurn.score++;
    }
    if (!winner && !currBoard.includes(undefined)) {
      draw = true;
    }
  }
};

// TODO AI
