//simple function get a random character from any string passed into it
function getRandom (charList) {
  charlist.charAt(Math.floor(Math.random() * charList.length));
}

//error handler if the user does not adhere to the prompt criteria
function errorHandlerPassLength(userInputPassLength){
// We check to see if the password is a number that walls between 8 and 128
  if (userInputPassLength >= 8 && userInputPassLength <= 128) {
  
  console.log("Error handler check for password length - result:pass \n the users has chosen a " + userInputPassLength + " character long password.");
  } else if (userInputPassLength < 8) {
    window.alert("That number is too small. Passwords must be at least 8 characters long");
    password = "This is NOT your password, you need to generate a new one while carefully reading the questions.";
    console.log("Error!!! Password length input by user was too small.")
    return password;
  } else if (userInputPassLength > 128) {
    window.alert("That number is too large. Passwords must be no more than 128 characters long");
    password = "This is NOT your password, you need to generate a new one while carefully reading the questions.";
    console.log("Error!!! Password length input by user was too big.")
    return password;
  } else {
    window.alert("Password Generator has failed. \n Please respond to that question with a number from 8 to 128 next time.");
    password = "This is NOT your password, you need to generate a new one while carefully reading the questions. ";
    console.log("Error!!! Password length input by user was NaN.")
    return password;
  }
}

function generatePassword (){
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var numbercharacters = "0123456789";
  var capitalLetterCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetterCharacters = capitalLetterCharacters.toLocaleLowerCase();
  var validCharacterPool = "";
  
  var passLengthDesired = window.prompt ("How many characters would you like in this password? (must be a number between 8 and 128)");
  //converting the string input to a number

  errorHandlerPassLength(Number(passLengthDesired))
  password = "the error handler is working but the password generator is coming soon!"
  return password;
  //window.confirm("Do you want special characters in this password")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
