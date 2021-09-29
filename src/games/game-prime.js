import readlineSync from 'readline-sync';
import {
  getRandomInt, gameStart, looseGame,
  increaseUserPoints, repeatGame, getUserPoints, winGame,
} from '../index.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameStart();
console.log(desc);

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return 'no';
  return num > 1 ? 'yes' : 'no';
};

// eslint-disable-next-line consistent-return
const game = () => {
  const randomNumber = getRandomInt(1000, 1);
  const correctAnswer = isPrime(randomNumber);

  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    increaseUserPoints();
    console.log('Correct!');
  } else {
    return looseGame(userAnswer, correctAnswer);
  }

  if (getUserPoints() === 3) {
    return winGame();
  }
};

export const primeGame = () => {
  repeatGame(game);
};
