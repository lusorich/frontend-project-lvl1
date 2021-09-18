import readlineSync from 'readline-sync';

export const helloUser = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`!);
};
