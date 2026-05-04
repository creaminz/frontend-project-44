import runEngine from '../index.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
    let startNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let step = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let progressionLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    let array = []

    for (let i = 0; i < progressionLength; i++) {
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