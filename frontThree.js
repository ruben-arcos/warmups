// How to Solve a Challenge

// Restate the question aloud.

// Write the question out at the top of the whiteboard.

// Ask any clarifying questions you need.

// Invoke the function and write out the expected output given the sample input. If none is given, make it up. 

// Write out a code plan to the side of the whiteboard. Speak aloud every thought you have. THIS IS THE MOST IMPORTANT PART!

// Build the structure of your function(s).

// Slowly work through your code plan, building the steps you need.

// Don't be afraid to mess up and say it aloud.

// It's not about finding the solution. It's about collaborating and working toward a solution!



// Warmup-1 -- front3
// P: Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. 

//R: Return a new string which is 3 copies of the front.

// Examples

// front3('Java') → JavJavJav
// front3('Chocolate') → ChoChoCho
// front3('abc') → abcabcabc

//slice(indexStart)
//slice(indexStart, indexEnd)

//create function
function create1 (str) {
    
    let sliced = str.slice(0, 3)
    return `${sliced}${sliced}${sliced}`
}

console.log(create1('Java'));
console.log(create1('Ja'));

// *****************************************************

function create2 (str) {
    
    let sliced = str.slice(0, 3)
   
    let newStr = ''

    for (let i = 0; i < 3; i++) {
        newStr += sliced
    }
    return newStr
}

console.log(create2('chocolate'));



function create3 (str) {
    let sliced = '';
    for (let i = 0; i < 3; i++ ) {
        sliced += str[i]
        if (str[i+1] === undefined ) {
            break
        }
    }
    let newStr = ''

    for (let i = 0; i < 3; i++) {
        newStr += sliced
    }
    return newStr
}

console.log(create3('peanut'));
console.log(create3('pe'));

function create4 (str) {
    return str.match(/)
} 


