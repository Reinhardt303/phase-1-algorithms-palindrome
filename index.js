/* function isPalindrome(word) {
  // Write your algorithm here
  Does the first letter match the first letter from the end?
  Does the second letter, match the second letter from the end?
  There might need to be an if statement to determine if the number of letters is even or odd, but will try to avoid this
  This might be easier if word is split into single letter arrays
  
}*/

/* 
  Add your pseudocode here
  function isPalindrome(word) {
    let spellingArray = word.split('').reverse.join('')
    if (spellingArray === word) {
      return = true
    }
    else {
     return = false
    }
  }
*/
function isPalindrome(word) {
  let reverseSpelling = word.split('').reverse().join('')
  if (reverseSpelling === word) {
    return true
  }
  else {
   return false
  }
}
/*
  Add written explanation of your solution here
Solution was easier than expected.  Learned new built-in function .reverse
Did not need to check even/odd
Solution takes the word, pieces it into single letter arrays, reverses the array, and pieces it back together
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
