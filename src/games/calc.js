import runGame from '../index.js';

const RULES = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const OPERATORS = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRoundData = () => {
  const a = getRandomNumber(1, 50);
  const b = getRandomNumber(1, 50);
  const operator = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)];

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));

  return [question, correctAnswer];
};

const runCalcGame = () => runGame(RULES, getRoundData);

export default runCalcGame;
