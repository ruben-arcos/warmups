// Prompt 1: withinLimits - Given two numbers, say x and y, write a program that determines if the numbers are between the ranges of 0-20 or 80-100, which includes the edges of the limit: 0, 20, 80, and 100.

const withinLimits = (x, y) => {
    if ((x >= 0 && x <= 20) || (x >= 80 && x <= 100)) {
        return true;
    } else if ((y >= 0 && y <= 20) || (y >= 80 && y <= 100)) {
        return true;
    } else {
        return false;
    }
}

console.log(withinLimits(10, 99));  // true
console.log(withinLimits(21, 81));  // false


withinLimits(10, 99) 
withinLimits(21, 81) 
