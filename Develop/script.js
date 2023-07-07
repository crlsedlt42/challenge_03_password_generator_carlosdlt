// Assignment Code

var numCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', '"', ',', '<', '.', '>', '/', '?'];
var pwCharacters = [];

//var upperCharacters = UpperCase(lowerCharacters);
// trying to capatilize lower character array

// Testing Arrays
// needed '' to be able to read array properly
// console.log(numCharacters);
// console.log(lowerCharacters);
// console.log(upperCharacters);
// console.log(specialCharacters);

//prompt : uses pop up to input an input as a string
//alert : uses pop up to give a message and has the user confirm
//confirm : uses pop up to give user a 'yes' or 'no'


function generatePassword() {

numberOfChar = prompt('Please choose the amount of characters you want in your new password (8-128 character limit)');

if (numberOfChar < 8 || numberOfChar > 128) {
return 'Choose a number value between 8 and 128 for your new password';

} else if (isNaN(numberOfChar)) {
  return;
}
else {
  confirm('Your password will contain ' + numberOfChar + ' characters');
}


// Meeting Assignment Criteria

// Number Criteria
containNumbers = confirm('Would you like NUMBERS in your new password');
if (containNumbers) {
  alert('The new password WILL contain NUMBERS.');
}
else {
  alert('The new password WILL NOT contain NUMBERS');
}

// Lowercase Criteria
containLowercase = confirm('Would you like LOWERCASE characters in your new password?');
if (containLowercase) {
  alert('The new password WILL contain LOWERCASE characters.');
}
else {
  alert('The new password WILL NOT contain LOWERCASE characters.');
}

// Uppercase Criteria
containUppercase = confirm('Would you like UPPERCASE characters in your new password');
if (containUppercase) {
  alert('The new password WILL contain UPPERCASE characters.');
}
else {
  alert('The new password WILL NOT contain UPPERCASE characters.');
}

//Special Character Criteria
containSpecial = confirm('Would you like SPECIAL characters in your new password?');
if (containSpecial) {
  alert('The new password WILL contain SPECIAL characters.');
}
else {
  alert('The new password WILL NOT contain SPECIAL characters.');
}


//If no password criteria is choosen, stop and show message
if (containNumbers === false && containUppercase === false && containLowercase === false && containSpecial === false) {
  return "Please select a MINIMUM of ONE character type from pre-selected options.";
};

// combining input from user and combining arrays
if (containNumbers) {
  pwCharacters = pwCharacters.concat(numCharacters);
}
if (containLowercase) {
  pwCharacters = pwCharacters.concat(lowerCharacters);
}
if (containUppercase) {
  pwCharacters = pwCharacters.concat(upperCharacters);
}

if (containSpecial) {
  pwCharacters = pwCharacters.concat(specialCharacters);
}


//Testing output of combined arrays
//console.log(pwCharacters);

// Based on user imput and criteria, determine length and create password
let resultPassword = ""
for (let i = 0; i < numberOfChar; i++) {
  let pw = [Math.floor(Math.random() * pwCharacters.length)];
  resultPassword = resultPassword + pwCharacters[pw];
  
}
return resultPassword;

}
  


// Given code for assignment
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
