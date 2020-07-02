
// Character Variables
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowcaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upcaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

// If user confirms a character type, it will be added to an array.
var choices = [];

// Password variable created by generatePassword function
var newPass = ("");

// This function collects user data such as how many characters, and which type of characters they would like.
// If user selects less than 8 or more than 128 characters they will get an alert to select between 8 and 128.
function userSelectType() {
  howMany = prompt("How many characters would you like your password to contain.")
  if (howMany < 8 || howMany > 128) {
    alert("Please select a value between 8 and 128.")
  } else {
    firstType = confirm("Click OK to add lowercase characters.")
    secondType = confirm("Click OK to add uppercase characters.")
    thirdType = confirm("Click OK to add numeric characters.")
    fourthType = confirm("Click OK to add special characters.")
  }
};

// This function takes confirmed character types, and adds that array to a new array.
function addChoices() {
  if (firstType == true)
    choices = choices.concat(lowcaseChar);
  if (secondType == true)
    choices = choices.concat(upcaseChar);
  if (thirdType == true)
    choices = choices.concat(numericChar);
  if (fourthType == true)
    choices = choices.concat(specialChar);
};

// This function generates the password. If they did not select any character types, 
// the password box will state no characters selected and an alert will ask them to choose at least one type of chracter.
// If they selected at least one type password is generated and returned.
function generatePassword() {
  if (firstType === false && secondType === false && thirdType === false && fourthType === false) {
    alert("Please choose at least one type.")
    return "No password characters selected."
  } else {
    for (i = 0; i < howMany; i++) {
      newPass += choices[Math.floor(Math.random() * (choices.length - 1))];

    } return newPass
  }
}

// This function resets the password output each time you click for a new password.
function reset() {
  howMany = (0);
  choices = [];
  newPass = ("");
  password = ("");
}

// Assignment Code.
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input. This will also run the generate password function.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function copyPass() {
     var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

  // Add event listener to generate button.
  // When clicked button will run several functions. First it will reset values so the new password is not added to the old password.
  // It will then run user input prompt and confirms, then populate the new array and then write the generated password to box.
  generateBtn.addEventListener("click", function () {
    reset();
    userSelectType();
    addChoices();
    writePassword();
  });

  copyBtn.addEventListener("click", function(){
    copyPass();
  });