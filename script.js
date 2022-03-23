//simple function get a random character from any string passed into it
function getRandom (charList) {
  var chosenCharacter = charList.charAt(Math.floor(Math.random() * charList.length));
  return chosenCharacter;
}

//error handler if the user does not adhere to the prompt criteria
function errorHandlerPassLength(userInputPassLength){
// We check to see if the password is a number. And that falls between 8 and 128
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

//small function to add to the pool of characters that the password may contain
function addCharacterSet(originalString, newString) {
  originalString += newString;
  return originalString;
}

// the real "meat" of this assignment. The function that generates the password.
function generatePassword (){
  // declaring the variables for the various character sets
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var numbercharacters = "0123456789";
  var capitalLetterCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetterCharacters = capitalLetterCharacters.toLocaleLowerCase();
  var validCharacterPool = "";
  
  //the user will say how long they want their password to be
  var passLengthDesired = window.prompt ("How many characters would you like in this password? (must be a number between 8 and 128)");
  
  //running my error handler function (I am pretty proud of this)
  errorHandlerPassLength(Number(passLengthDesired))

  // we are checking if the user wants to use special characters or not
  if (window.confirm("1 of 4 — Do you want the password to contain special characters? (i.e. \"!\", \"?\", \"#\", etc.) \n Click \"okay\" for yes, and \"cancel\" for no.")) {
    validCharacterPool = addCharacterSet(validCharacterPool, specialCharacters);
    console.log("The user wants special characters.");
  } else {
    console.log("The user has chosen to omit special characters.");
  }
  
    // we are checking if the user wants to use UPPERCASE letters or not
  if (window.confirm("2 of 4 - Do you want the password to contain capitalized letters? \n Click \"okay\" for yes, and \"cancel\" for no.")) {
    validCharacterPool = addCharacterSet(validCharacterPool, capitalLetterCharacters);
    console.log("The user wants capital letters.");
  } else {
    console.log("The user has chosen to omit capital letters.");
  }

    // we are checking if the user wants to use lowercase letters or not
  if (window.confirm("3 of 4 - Do you want the password to contain lowercase letters? \n Click \"okay\" for yes, and \"cancel\" for no.")) {
    validCharacterPool = addCharacterSet(validCharacterPool, lowercaseLetterCharacters);
    console.log("The user wants lowercase letters.");
  } else {
    console.log("The user has chosen to omit lowercase letters.");
  }

    // we are checking if the user wants to use numbers or not
  if (window.confirm("4 of 4 - Do you want the password to contain numbers? \n Click \"okay\" for yes, and \"cancel\" for no.")) {
    validCharacterPool = addCharacterSet(validCharacterPool, numbercharacters);
    console.log("The user wants numbers.");
  } else {
    console.log("The user has chosen to omit numbers.");
  }

  // we cannot generate a password as the user has denied all types of character sets we could have used.
  if (validCharacterPool.length === 0) {
    console.log("The user has not permitted any character types. A password could NOT be generated.");
    window.alert("You must allow some type of character from the options we have given you in your password in order to generate a password ");
    password = "This is NOT your password, you need to generate a new one while carefully reading the questions.";
    return password;
  }
  // resetting to a blank string to prepare for the "for" loop
  password = "";

  // "for" loop should add a random character to the password to the length desired
  for (i = 0; i < Number(passLengthDesired); i++) {
    password+= getRandom(validCharacterPool);
  }

  //return statement gives the generated password back to the page
  return password;
}

/* =========================================================================
 * Actual function calls and event listener below.
 * ========================================================================= */

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
