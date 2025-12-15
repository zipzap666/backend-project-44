import runGame from '../index.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const getRoundData = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));

  return [question, correctAnswer];
};

const runGcdGame = () => runGame(RULES, getRoundData);

export default runGcdGame;
