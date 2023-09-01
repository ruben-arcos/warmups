/*
P: create function and use reduce() 
R: return the sum of all 
E: console.log(sumArr(arr));
P:
*/

//Name the function
let arr = [1,2,3,4,5,6]

function sumArr(arr) {
    //use reduce function to iterate over instead of using a for loop
    return arr.reduce((acc, curr) => acc + curr, 0)
}

console.log(sumArr(arr));

//using bubble sort

/** 
* Use a nested for-loop to compare and swap if in wrong order.
* compare and swap using a second variable
* variable for length
* variable for the swapped number
* temp variable as a placeholder 
*/

//compare and swap 
// let bubbleSort = [120, 315, 43, 56, 22, 8224, 8, 68, 90, 10, 32, 23, 45, 5, 20, 34, 250]

// let bubble = [...new Set(bubbleSort)]
// console.log(bubble)

let bubbleSort = [120, 315, 43, 56, 22, 8224, 8, 68, 90, 10, 32, 23, 45, 5, 20, 34, 250];

function bubble(bubbleSort){
    return [...new Set(bubbleSort)].sort();
} 
console.log(bubble(bubbleSort));




