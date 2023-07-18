// TIMER

// When a hg empties, the time to flip or evaluate is not relevant.

// Don't always need to use both hourglasses.

// Don't always have to add the results of a flip to the target time.

// ********************************************************************

// Need 3 vars for the hourglasses and target:

// hg1 is 4 mins
// hg2 is 7 mins
// target time is 9 minutes
const sandTimers = () {
    let hg1 = 4;
    let hg2 = 7;
    let totalTime = 0;

// flip both at the same time and stop when hg1 is empty
// thats means:
// 	hg1 is 0 and counted 4 minutes
// 	hg2 has lost 4 minutes of sand, so it has 7-4 = 3 mins left
while (hg1 > 0) {
    
}

// 	target time is 4

// flip both again
// 	hg1 is 0 - hg2 is 3
// 	so when hg2 is 0 stop again and count
// 	hg2 is 0 - and we counted 3 mins
// 	hg1 is 1

// 	target is 4 + 3 = 7

// flip hg1 to get a 1 min count, so target is 7 + 1 = 8

// Now, hg1 is 0 and hg2 is 2

// flip hg2 and stop when it's empty, but don't add it to target



   

}