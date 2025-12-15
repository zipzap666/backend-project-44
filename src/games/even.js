import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const isEven = (n) => n % 2 === 0;

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const number = Math.floor(Math.random() * 100) + 1; // 1..100
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEvenGame;
