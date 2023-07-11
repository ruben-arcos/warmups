//return unsorted scores in a descending sorted array

//loop through the unsorted array


const unsortedScores = [37,89, 41, 65, 91, 53]

const sortedScores = unsortedScores.sort((a, b) => b - a);
// const sortedScores = unsortedScores.sort().reverse();

console.log(sortedScores)




// ***********************************************************

const unsortedScores2 = [37,89, 41, 65, 91, 53]

const sortedScores2 = arr => {
    let newScores = arr.sort()
    console.log(newScores)
}

sortedScores2(unsortedScores2)

// ***********************************************************

/** Given set of scores in an array, sort array in descending order.
* 1. Need function name: unsortedScores
* 2. Need two variable buckets to compare: a, b
* 3. For each index bucket we compare
*     if (usnorted[a] < unsortedScores[b])
* 4. Then assign a temp bucket, "temp" to temporarily hold lower value
* 5. Repeate iteration


*/

const unsortedScores3 = [37, 89, 41, 65, 91, 53];




// // iterate up to N length of array:
for (let a = 0; a < unsortedScores3.length - 1; a++) {
  for (let b = a + 1; b < unsortedScores3.length; b++) {
    if (unsortedScores3[a] < unsortedScores3[b]) {
      
      // Swap the elements
      const temp = unsortedScores3[a];

      // var a is assigned the higher value from b
      // b is assigned the var temp 
      unsortedScores3[a] = unsortedScores3[b];
      unsortedScores3[b] = temp;
    }
  }
}

 console.log(unsortedScores3);