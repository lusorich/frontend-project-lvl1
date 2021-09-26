import readlineSync from 'readline-sync';
import {
  getRandomInt, gameStart, looseGame,
  increaseUserPoints, repeatGame, getUserPoints, winGame,
} from '../index.js';

const desc = 'What is the result of the expression?';

gameStart();
console.log(desc);

const operationArray = ['+', '-', '*'];

const getResult = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+': {
      return firstNumber + secondNumber;
    }
    case '-': {
      return firstNumber - secondNumber;
    }
    case '*': {
      return firstNumber * secondNumber;
    }
    default: return null;
  }
};

// eslint-disable-next-line consistent-return
const game = () => {
  const randomOperation = operationArray[getRandomInt(2)];
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  const correctAnswer = getResult(randomOperation, firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${randomOperation} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === parseInt(correctAnswer, 10)) {
    increaseUserPoints();
    console.log('Correct!');
  } else {
    return looseGame(userAnswer, correctAnswer);
  }
  if (getUserPoints() === 3) {
    return winGame();
  }
};

export const calcGame = () => {
  repeatGame(game);
};
