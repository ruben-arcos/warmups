//Prompt 1: powOfTwoSumEven - Given an array of numbers, raise each number by the power of 2 and return the sum of all the numbers that are evenly divisible by 4, i.e. const myArr = [1, 5, 10, 4, 2] // => 120

//P: Given an array of numbers, raise each number by the power of 2 

//R: return the sum of all the numbers that are evenly divisible by 4

//E: console.log( powOfTwoSumEven())

// const myArr = [1, 5, 10, 4, 2] // => 120

// const powOfTwoSumEven = (nums)  => {
//     let sum = nums.reduce((acc, curr) => acc + curr, 0) ** 2;
//     if (sum % 2 === 0) {
//         return sum
//     }
// }

// console.log(powOfTwoSumEven(myArr))

const myArr = [1, 5, 10, 4, 2] // => 120

const powOfTwoSumEven = (nums) =>  {
    let sum = 0;
   for (let i = 1; i < myArr.length; i++) {
    if (nums[i] % 2 === 0) {
        sum += nums[i] ** 2;
    }
   }
   return sum;
}

console.log(powOfTwoSumEven(myArr))

const myArr2 =  [1, 5, 10, 4, 2] 

const powOfTwoSumEven2 = (nums) => {
    let sum = [];

    for (let i = 0; i < myArr2.length; i++) {
        if (nums[i] % 4 === 0) {
            sum.push(2 ** i)
        }
    }
}

console.log(powOfTwoSumEven2(myArr2))