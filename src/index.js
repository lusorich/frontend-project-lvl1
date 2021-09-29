import readlineSync from 'readline-sync';

let userName = '';
let userGamePoints = 0;
let isGameEnd = false;

export const welcomeTextForUser = () => console.log('Welcome to the Brain Games!');
export const setUserName = () => {
  userName = readlineSync.question('May I have your name? ');
};
export const getUserName = () => userName;
export const helloTextForUser = () => console.log(`Hello, ${getUserName()}!`);
export const congratulationsTextForUser = () => console.log(`Congratulations, ${getUserName()}!`);
/**
 * Get random integer
 * @param {string} max - max value
 * @param {string} min - min value
 */
export const getRandomInt = (max = 100, min = 1) => Math.round(Math.random() * (max - min) + min);
export const isEven = (number) => number % 2 === 0;
export const increaseUserPoints = () => { userGamePoints += 1; };
export const getUserPoints = () => userGamePoints;
export const refreshUserPoints = () => { userGamePoints = 0; };
export const setIsGameEnd = (closeGameSession) => {
  isGameEnd = closeGameSession;
};
export const getIsGameEnd = () => isGameEnd;
export const gameStart = () => {
  welcomeTextForUser();
  setUserName();
  helloTextForUser();
  refreshUserPoints();
  setIsGameEnd(false);
};
export const repeatGame = (game) => {
  while (getUserPoints() !== 3 && getIsGameEnd() === false) {
    game();
  }
};
const endGameText = (wrongAnswer, correctAnswer) => {
  console.log(
    `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${getUserName()}!`,
  );
};
export const looseGame = (wrongAnswer, correctAnswer) => {
  endGameText(wrongAnswer, correctAnswer);
  setIsGameEnd(true);
};
export const winGame = () => {
  congratulationsTextForUser();
  setIsGameEnd(true);
};
