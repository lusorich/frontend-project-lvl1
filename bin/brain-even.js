import readlineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';
const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = (max = 100) => Math.round(Math.random() * max);
const isEven = (number) => number % 2 === 0;
const endGame = (wrongAnswer, userName) => {
  const correctAnswer = wrongAnswer === 'yes' ? 'no' : 'yes';
  console.log(
    `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`,
  );
};

export const evenOrNotGame = () => {
  console.log(welcome);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(desc);
  let userPoints = 0;

  while (userPoints !== 3) {
    const randomNumber = getRandomInt();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    switch (userAnswer) {
      case 'yes':
        if (isEven(randomNumber)) {
          userPoints += 1;
          console.log('Correct!');
        } else {
          return endGame(userAnswer, userName);
        }
        break;
      case 'no': {
        if (!isEven(randomNumber)) {
          userPoints += 1;
          console.log('Correct!');
        } else {
          return endGame(userAnswer, userName);
        }
        break;
      }
      default:
        console.log('Not correct answer');
        return endGame(userAnswer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

evenOrNotGame();
