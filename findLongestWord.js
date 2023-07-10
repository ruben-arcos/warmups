// Build a program to find the length of the longest word in a string excluding punctuation and removing whitespace.
//  words               1    2  3   4     5      6             7
let myString2 = "This is for your own personal journey."
//  leters               4    2  3   4       3     8             7

let findLongestWord = str => {
    // Split the string into individual words and store them in the `longWord` array
    let longWord = str.split(' ');
     // Create an empty string variable to store the longest word
    let words = ''

    // Loop through each word in the `longWord` array
    for (let i = 0; i < longWord.length; i++) {
        // Compare the length of the current word to the length of the longest word stored in the `words` variable
        if ( longWord[i].length > words.length) {
            // If the current word is longer, update the `words` variable to store the new longest word
            words = longWord[i].replace(/[\.,?!]/g);
        }
    }
    // Return the longest word found
    return words;
}

console.log(findLongestWord(myString2))



// YOU CAN ALTERNATIVELY USE THIS TO TAKE CARE OF PUNCTUATION

// https://dev.to/foxinfotech/how-to-remove-punctuation-from-text-using-javascript-59pe

  // let punctuation = /[\.,?!]/g;  // defined punctuation we are looking for

  // let newText = text.replace("punctuation", "");  // replacing the punctuation with an empty string
  //               text.replace(".", "");
  //               text.replace(",", "");
  //               text.replace("?", "");
  //               text.replace("!", "");

