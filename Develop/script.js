//Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);

// The Arrays 
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Password function
function generatePassword() {
  var confirmLength = (prompt(" How many characters would you like your password to be? "));

  // If the user submits a number that is under 8 or above 128 it will return an alert to try again within the paramters of 8 and 128. 
  while (confirmLength < 8 || confirmLength > 128) {
    alert(" Password must have 8 to 128 characters. Try again. ");
  }

  // Setting the variables so that it will be prompted after entering in the length of the password.
  var confirmSpecialCharacter = confirm(" Click OK if you want to add special characters. ");
  var confirmNumericCharacter = confirm(" Click OK if you want to add numeric characters. ");
  var confirmLowerCase = confirm(" Click OK if you want to add lowercase characters. ");
  var confirmUpperCase = confirm(" Click OK if you want to add uppercase characters. ");

  
  // 
  var passwordCharacters = []

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  console.log(passwordCharacters)

  // A for loop so "generate password" will return random characters from each of the array varibles on line 5-8. 
  var newPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    newPassword = newPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(newPassword)
  }
  return newPassword;
}

// Write password to the #password input (given to us in the prework)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};