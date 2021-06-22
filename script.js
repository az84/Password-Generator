// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
});

// Function to create a password based on Lowercase letters
function generateRandomLowercase() {
  var lowercase = "abcdefghijklmnopqrstvwxyz";
  var random = Math.floor(Math.random() * lowercase.length);
  return lowercase[random];
}

// Function to create password based on Uppercase letters
function generateRandomUppercase() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var random = Math.floor(Math.random() * uppercase.length);
  return uppercase[random];
}

// Function to generate password based on Numbers
function generateRandomNumber() {
  var number = "1234567890";
  var random = Math.floor(Math.random() * number.length);
  return number[random];
}

// Function to geenrate password based on Special characters
function generateRandomSpecialCharacter() {
  var specialCharacter = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var random = Math.floor(Math.random() * specialCharacter.length);
  return specialCharacter[random];
}

// Function to create error messages if length not specified, length requirements not met, or if no criteria specified
function generatePassword() {
  var length = prompt("Please provide the length of the password");
  if (length < 8 || length > 128) {
    alert("Enter the password length between 8 and 128");
  } else {
    var includeLowercase = false;
    if (confirm("Do you want lower case in your password")) {
      includeLowercase = true;
    }
    var includeUppercase = false;
    if (confirm("Do you want Upper case in your password")) {
      includeUppercase = true;
    }
    var includeNumbers = false;
    if (confirm("Do you want numbers in your password")) {
      includeNumbers = true;
    }
    var includeSpecialCharacters = false;
    if (confirm("Do you want special characters in your password")) {
      includeSpecialCharacters = true;
    }
  }
  var password = "";
  for (var i = 0; i < length; i++) {
    if (includeLowercase) {
      password = password + generateRandomLowercase();
    }
    if (includeUppercase) {
      password = password + generateRandomUppercase();
    }
    if (includeNumbers) {
      password = password + generateRandomNumber();
    }
    if (includeSpecialCharacters) {
      password = password + generateRandomSpecialCharacter();
    }
  }
  return password.substring(0, length);
}
