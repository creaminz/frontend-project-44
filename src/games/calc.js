import runEngine from '../index.js'

const description = 'What is the result of the expression?'

const generateRound = () => {
  const number1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1
  const number2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1

  const operators = ['+', '-', '*']

  const randomOperator = operators[Math.floor(Math.random() * operators.length)]

  const question = `${number1} ${randomOperator} ${number2}`

  let result
  switch (randomOperator) {
    case '+':
      result = number1 + number2;
      break
    case '-':
      result = number1 + number2;
      break
    case '*':
      result = number1 * number2;
      break
    default:
      result = 0
  }

  const correctAnswer = String(result)

  return [question, correctAnswer]
};

const runCalcGame = () => runEngine(description, generateRound)

export default runCalcGame
