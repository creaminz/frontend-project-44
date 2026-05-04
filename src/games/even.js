import runEngine from "../index.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
    const magicNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const question = String(magicNumber)
    const correctAnswer = magicNumber % 2 === 0 ? 'yes' : 'no';
    return [question, correctAnswer];
};

const runEvenGame = () => runEngine(description, generateRound);

export default runEvenGame;