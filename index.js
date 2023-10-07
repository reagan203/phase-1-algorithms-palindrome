function isPalindrome(str) {
  // Remove spaces and special characters, and convert to lowercase
  str = str.replace(/[^a-z]/g, "").toLowerCase();

  // Compare the original string with its reverse
  return str === str.split("").reverse().join("");
}

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
