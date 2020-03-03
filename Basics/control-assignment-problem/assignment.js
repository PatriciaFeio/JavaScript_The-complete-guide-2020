const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

console.log('1.');

function alertRandom() {
  if (randomNumber > 0.7) {
    alert('Be careful! Number greater than 0.7.');
  }
  alert('You´re safe! Number smaller than 0.7.');
}

console.log(randomNumber);
alertRandom();

console.log('2.1');
let arrOfNumbers = [17, 23, 34, 50];

function loopOne() {
  for (let i = 0; i < arrOfNumbers.length; i++) {
    console.log(arrOfNumbers[i]);
  }
}

loopOne();

console.log('2.2');
function loopTwo() {
  for (const numb of arrOfNumbers) {
    console.log(numb);
  }
}

loopTwo();

console.log('3.');

function loopThree() {
  for (let i = arrOfNumbers.length - 1; i >= 0; i--) {
    console.log(arrOfNumbers[i]);
  }
}

loopThree();

console.log('4.');
const anotherRandomNumber = Math.random();

function bothGreater() {
  if (
    (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
    randomNumber > 0.2 || anotherRandomNumber > 0.2
  ) {
    alert('Greater than 0.7 or smaller than 0.2.');
  }
}

console.log(randomNumber);
console.log(anotherRandomNumber);
bothGreater();
