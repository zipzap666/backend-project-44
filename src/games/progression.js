import runGame from '../index.js';

const RULES = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const buildProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

const getRoundData = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);

  const progression = buildProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(RULES, getRoundData);

export default runProgressionGame;
