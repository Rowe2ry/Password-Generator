/* Global declaration of a message directly in the generator to let users
 * know that the generator was unable to generate a password based on the
 * information the user provided.*/
var failedAttemptPass = "This is NOT your password, you need to generate a new one while carefully reading the questions.";

// global declaration of string to include in window.confirm messages
var giveConfirm = "\n Click \"okay\" for yes, and \"cancel\" for no."

/* simple function get a random character from any string passed into it
 * it is choosing from the 0 index point of the string to the
 * (length -1) index number by using "Math.floor" to round
 * down, this truly picking from the entire list of characters
 * in the string.*/
function getRandom (charList) {
  var chosenCharacter = charList.charAt(Math.floor(Math.random() * charList.length));
  return chosenCharacter;
}

/* error handler if the user does not adhere to the prompt criteria
 * the handler logs any scenario for aid in debugging as well as
 * giving users who are looking at the console a better understanding
 * of how their password is being generated. */
function errorHandlerPassLength(userInputPassLength){
// We check to see if the password is a number & that falls between 8 and 128

// local declaration of an error string to be used in this handler
var passLengthError = "Error!!! Password length input by user was ";

  if (userInputPassLength >= 8 && userInputPassLength <= 128) {
  console.log("Error handler check for password length - result: PASS \n the user has chosen a " + userInputPassLength + " character long password.");
  } else if (userInputPassLength < 8) {
    window.alert("That number is too small. Passwords must be at least 8 characters long");
    password = failedAttemptPass;
    console.log(passLengthError + "too small.")
    return password;
  } else if (userInputPassLength > 128) {
    window.alert("That number is too large. Passwords must be no more than 128 characters long");
    password = failedAttemptPass;
    console.log(passLengthError + "too big.")
    return password;
  } else {
    window.alert("Password Generator has failed. \n Please respond to that question with a number from 8 to 128 next time.");
    password = failedAttemptPass;
    console.log(passLengthError + "NaN.")
    return password;
  }

  /* if none of the "else if" events are triggered, this handler will
   * return a value of "true" to tell the password generator the input
   * data is good and that the password generation may continue. */
  var testPass = true;
  return testPass;
}

/* small function to add to the pool of characters that the password may contain
 * This actually isn't as efficient as just writing the logic in the larger
 * function that calls it multiple times, but I was practicing with the
 * idea of calling functions within functions, and think it helps to
 * better promote the D.R.Y. mentality */
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
  
  /* starting with an empty string. We will add valid characters as
   * the user permits them for use in the final password. */
  var validCharacterPool = "";
  
  //the user will say how long they want their password to be
  var passLengthDesired = window.prompt ("How many characters would you like in this password? (must be a number between 8 and 128)");
  
  /* running my error handler function (I am pretty proud of this)
   * if the test passes, it comes back as true, if it fails, it
   * returns as a string. This string triggers the the if statement
   * to leave an error on the console and then exit the "generatePassword"
   * function and passes the "fail" password to the page so the user
   * knows that the script did not generate a new password. */
  if (typeof errorHandlerPassLength(Number(passLengthDesired)) != "boolean") {
  console.log("error handler fail");
  return password;
  } 

  // we are checking if the user wants to use special characters or not
  if (window.confirm("1 of 4 — Do you want the password to contain special characters? (i.e. \"!\", \"?\", \"#\", etc.)" + giveConfirm)) {
    validCharacterPool = addCharacterSet(validCharacterPool, specialCharacters);
    console.log("The user wants special characters.");
  } else {
    console.log("The user has chosen to omit special characters.");
  }
  
    // we are checking if the user wants to use UPPERCASE letters or not
  if (window.confirm("2 of 4 - Do you want the password to contain capitalized letters?" + giveConfirm)) {
    validCharacterPool = addCharacterSet(validCharacterPool, capitalLetterCharacters);
    console.log("The user wants capital letters.");
  } else {
    console.log("The user has chosen to omit capital letters.");
  }

    // we are checking if the user wants to use lowercase letters or not
  if (window.confirm("3 of 4 - Do you want the password to contain lowercase letters?" + giveConfirm)) {
    validCharacterPool = addCharacterSet(validCharacterPool, lowercaseLetterCharacters);
    console.log("The user wants lowercase letters.");
  } else {
    console.log("The user has chosen to omit lowercase letters.");
  }

    // we are checking if the user wants to use numbers or not
  if (window.confirm("4 of 4 - Do you want the password to contain numbers?" + giveConfirm)) {
    validCharacterPool = addCharacterSet(validCharacterPool, numbercharacters);
    console.log("The user wants numbers.");
  } else {
    console.log("The user has chosen to omit numbers.");
  }

  // we cannot generate a password as the user has denied all types of character sets we could have used.
  if (validCharacterPool.length === 0) {
    console.log("The user has not permitted any character types. A password could NOT be generated.");
    window.alert("You must allow some type of character from the options we have given you in your password in order to generate a password ");
    password = failedAttemptPass;
    return password;
  }
  // resetting to a blank string to prepare for the "for" loop
  password = "";

  // "for" loop should add a random character to the password to the length desired
  for (var i = 0; i < Number(passLengthDesired); i++) {
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
