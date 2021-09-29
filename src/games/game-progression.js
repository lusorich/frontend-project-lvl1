import readlineSync from 'readline-sync';
import {
  getRandomInt, gameStart, looseGame,
  increaseUserPoints, repeatGame, getUserPoints, winGame,
} from '../index.js';

const desc = 'What number is missing in the progression?';

gameStart();
console.log(desc);

/**
 *
 */
const func = (progressionLength, startNumber, randomIndex, constantProgressionNumber) => {
  const progressionAnswer = [startNumber];
  for (let i = 1; i < progressionLength - 1; i += 1) {
    const num = progressionAnswer[i - 1] + constantProgressionNumber;
    progressionAnswer.push(num);
  }
  const progressionForQuestion = [...progressionAnswer];
  const correctAnswer = progressionAnswer[randomIndex];
  progressionForQuestion[randomIndex] = '..';
  return { progressionForQuestion, correctAnswer };
};

const progressionToOutput = (progression) => progression.join(' ');

// eslint-disable-next-line consistent-return
const game = () => {
  const progressionLength = getRandomInt(20, 5);
  const startNumber = getRandomInt();
  const randomIndex = getRandomInt(progressionLength, 0);
  const constantProgressionNumber = getRandomInt(10, 1);

  const { progressionForQuestion, correctAnswer } = func(progressionLength, startNumber,
    randomIndex, constantProgressionNumber);

  console.log(`Question: ${progressionToOutput(progressionForQuestion)}`);
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

export const progressionGame = () => {
  repeatGame(game);
};
