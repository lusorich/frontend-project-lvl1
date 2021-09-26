#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  isEven, getRandomInt, gameStart, looseGame,
  increaseUserPoints, repeatGame, getUserPoints, winGame,
} from '../index.js';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

gameStart();
console.log(desc);

// eslint-disable-next-line consistent-return
const game = () => {
  const randomNumber = getRandomInt();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  if (correctAnswer === userAnswer) {
    increaseUserPoints();
    console.log('Correct!');
  } else {
    return looseGame('even', userAnswer, correctAnswer);
  }
  if (getUserPoints() === 3) {
    return winGame();
  }
};

export const evenOrNotGame = () => {
  repeatGame(game);
};
