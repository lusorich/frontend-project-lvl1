import readlineSync from 'readline-sync';
import {
  getRandomInt, gameStart, looseGame,
  increaseUserPoints, repeatGame, getUserPoints, winGame,
} from '../index.js';

const desc = 'Find the greatest common divisor of given numbers.';

gameStart();
console.log(desc);

const calculateGCDFor2Numbers = (first, second) => {
  let firstNumber = first;
  let secondNumber = second;
  if ((firstNumber > secondNumber) && firstNumber % secondNumber === 0) {
    return secondNumber;
  }
  if ((secondNumber > firstNumber) && secondNumber % firstNumber === 0) {
    return firstNumber;
  }

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }

  return firstNumber + secondNumber;
};

const getGcd = (firstNumber, secondNumber) => calculateGCDFor2Numbers(firstNumber, secondNumber);

// eslint-disable-next-line consistent-return
const game = () => {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  const correctAnswer = getGcd(firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(correctAnswer, 10) === parseInt(userAnswer, 10)) {
    increaseUserPoints();
    console.log('Correct!');
  } else {
    return looseGame(userAnswer, correctAnswer);
  }
  if (getUserPoints() === 3) {
    return winGame();
  }
};

export default () => {
  repeatGame(game);
};
