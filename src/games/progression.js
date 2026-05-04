import runEngine from '../index.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const startNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const step = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const progressionLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

  const array = [];

  for (let i = 0; i < progressionLength; i += 1) {
    array.push(startNum + (step * i));
  }

  const randomNumOfArray = Math.floor(Math.random() * array.length);
  const correctAnswer = String(array[randomNumOfArray]);

  array[randomNumOfArray] = '..';

  const question = array.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => runEngine(description, generateRound);

export default runProgressionGame;
