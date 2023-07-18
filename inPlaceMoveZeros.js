// inPlaceMoveZeros given an array of numbers write a function to move all 0s to the end of the array while maintining the relative order of the non 0 numbers

// input: [0,1,0,3,12] ---> output: [1,3,12,0,0]

const testArr2 = [0, 1, 0, 3, 12];

const inPlaceMoveZeros = (arr) => {
  // create variables for the 0s and not 0s
  const zeros = arr.filter((element) => element === 0);
  const notZeros = arr.filter((element) => element !== 0);
  // console.log(notZeros.concat(zeros));
  return notZeros.concat(zeros);
};

console.log(inPlaceMoveZeros(testArr2));