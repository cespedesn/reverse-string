function reverseString(str) {
  // type your code here
  let str = 'ih'
  let output = ''
    for( let i = str.length - 1; i >= 0; i--) {
        output = output + str[i]
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// use let since variable is changing. In this case, i
// need to use str.length -1 to start at the end of the word
// -1 because of 0 index
// make i greater than or equal to 0 since we are moving in decending order
// and want to reverse it without using reverse method



