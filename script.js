"use strict";

const card = document.querySelector(`.full-page`);
const question = document.getElementById(`question`);
const spade = document.getElementById(`spade`);
const club = document.getElementById(`club`);
const diamond = document.getElementById(`diamond`);
const heart = document.getElementById(`heart`);
const reset = document.querySelector(`.reset`);
// Functions for adding hidden class
function staySpade() {
  diamond.classList.add(`hidden`);
  club.classList.add(`hidden`);
  heart.classList.add(`hidden`);
  question.classList.add(`hidden`);
}
function stayClub() {
  question.classList.add(`hidden`);
  heart.classList.add(`hidden`);
  diamond.classList.add(`hidden`);
  spade.classList.add(`hidden`);
}
function stayDimond() {
  question.classList.add(`hidden`);
  spade.classList.add(`hidden`);
  club.classList.add(`hidden`);
  heart.classList.add(`hidden`);
}
function stayHeart() {
  question.classList.add(`hidden`);
  club.classList.add(`hidden`);
  spade.classList.add(`hidden`);
  diamond.classList.add(`hidden`);
}
function hiddeSuits() {
  diamond.classList.add(`hidden`);
  club.classList.add(`hidden`);
  heart.classList.add(`hidden`);
  spade.classList.add(`hidden`);
}
// Lodic for swap suits
function logicCard() {
  const sNumber = String(Math.trunc(Math.random() * 4) + 1);
  switch (sNumber) {
    case "1":
      staySpade();
      spade.classList.remove(`hidden`);
      document.querySelector(`body`).style.background =
        `linear-gradient(90deg,rgba(69, 79, 217, 1) 0%, rgba(102, 202, 209, 1) 83%)`;
      break;
    case "2":
      stayClub();
      club.classList.remove(`hidden`);
      document.querySelector(`body`).style.background =
        `linear-gradient(90deg,rgba(209, 33, 33, 1) 0%, rgba(240, 178, 86, 1) 70%)`;
      break;
    case "3":
      stayDimond();
      diamond.classList.remove(`hidden`);
      document.querySelector(`body`).style.background =
        `linear-gradient(90deg,rgba(2, 36, 207, 1) 0%, rgba(53, 83, 110, 1) 83%)`;
      break;
    case "4":
      stayHeart();
      heart.classList.remove(`hidden`);
      document.querySelector(`body`).style.background =
        `linear-gradient(90deg,rgba(217, 43, 43, 1) 9%, rgba(255, 51, 0, 1) 49%, rgba(173, 108, 10, 1) 87%)`;
      break;
    default:
      console.log("Sorry, we are out of " + sNumber + ".");
  }
}
// Relise Lodic for swap card suits
card.addEventListener(`click`, logicCard);
// Relise Lodic for swap card suits by `Space`
document.addEventListener(`keydown`, function (e) {
  if (e.key === ` `) {
    logicCard();
  }
});
// Reset
reset.addEventListener(`click`, function () {
  hiddeSuits();
  question.classList.remove(`hidden`);
  document.querySelector(`body`).style.background = `radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  )`;
});
