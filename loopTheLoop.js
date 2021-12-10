//Part 1: It's Hip to Be Square

//Make a function that that squares each number passed into it from an array, and sums the results.

function sumOfSquares(arr) {
  return arr.reduce((acc, curr) => acc + curr ** 2);
}

//Part 2: Loop the Loop: 2D Array Addition
//Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array

function getArrColumns(arr) {
  return arr.reduce((acc, curr, index, arr) => {
    acc[index] = arr.map(a => a[index]);
    return acc;
  }, []);
}

function getDiagonals(arr) {
  const DesDiag = arr.map((vector, index) => vector[index]);
  const AscDiag = arr.map(
    (vector, index, arr) => vector[arr.length - index - 1]
  );
  return [DesDiag, AscDiag];
}

function arraySum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

function loopTheLoop(arr) {
  const allArr = [...arr, ...getArrColumns(arr), ...getDiagonals(arr)];
  return Math.max(...allArr.map(a => arraySum(a)));
}

//## Part 3: Bonus - Row, Column or Diagonal?
//Test your function on this data set and let me know if it was a row, column or diagonal that had the greatest sum!
function rowColOrDiag(arr) {
  const rows = Math.max(...arr.map(a => arraySum(a)));
  const cols = Math.max(...getArrColumns(arr).map(a => arraySum(a)));
  const diag = Math.max(...getDiagonals(arr).map(a => arraySum(a)));
  const allVectors = [rows, cols, diag];
  const allLabels = ['rows', 'cols', 'diag'];
  const maxVal = Math.max(...[rows, cols, diag]);
  return allLabels[allVectors.indexOf(maxVal)];
}

const bigArray = [
  [887, -541, -430, -590, 117, 172, -319, -18],
  [-269, 964, 209, 840, -456, 156, 365, -568],
  [289, -41, 488, 198, 240, 124, -427, 214],
  [452, 894, 968, -149, 683, 977, 741, -805],
  [181, -714, -950, 107, 800, 751, -143, 380],
  [152, 493, 707, 914, 37, 356, -625, 608],
  [-345, 906, 83, 676, 723, 381, 557, -183],
  [199, -943, -710, 565, 193, 315, 281, 245],
];

//## Part 4: Super Bonus - Generate 2D Arrays

//Part A
// Create a function that takes one argument, an integer, that makes a 2D array of random integers between 0  and 1000 where the length of the rows and columns is determined by the argument.

function randNum(negProb = 0) {
  const rand = Math.random();
  const neg = rand < negProb ? -1 : 1;
  return Math.floor(1000 * rand * neg);
}

function generateArray(num, negProb = 0) {
  return Array(num)
    .fill()
    .map((n, i, arr) => arr.map(_ => randNum(negProb)));
}

//Part B
// Add a 30% chance that the integer will become negative.

// Solution: generateArray(num, 0.3)
