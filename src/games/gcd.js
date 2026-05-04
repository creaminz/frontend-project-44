import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateRound = () => {
  const number1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const number2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));

  return [question, correctAnswer];
};

const runGcdGame = () => runEngine(description, generateRound);

export default runGcdGame;
