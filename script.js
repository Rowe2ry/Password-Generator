function getRandom (charList) {
  charlist.charAt(Math.floor(Math.random() * charList.length));
}

function generatePassword (){
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbercharacters = "0123456789";
  var capitalLetterCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetterCharacters = capitalLetterCharacters.toLocaleLowerCase();
  var validCharacterPool = "";
  var passLengthDesired = window.prompt ("How many characters would you like in this password? (must be a number between 8 and 128)");
  passLengthDesired = Number(passLengthDesired);
  if (typeof passLengthDesired === typeof 3){
    if (!(passLengthDesired >= 8 && passLengthDesired <= 128)) {
      if (passLengthDesired < 8) {
        window.alert("That number is too small. Passwords must be at least 8 characters long");
      } else {
        window.alert("That number is too large. Passwords must be no more than 128 characters long");
      }
      password = "This is NOT your password, you need to generate a new one while carefully reading the questions."
      return password;
    }
    
    password = "Just a placeholder test at the moment.";
    return password;
  } else {
    console.log("Password Generator has failed. \n Please respond to that question with a number from 8 to 128 next time.");
  } 
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
