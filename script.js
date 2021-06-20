// Assignment Code
var generateBtn = document.querySelector("#generate");


// selection criteria
// var type = [ 
// 	{
// 		charList: 'abcdefghijklmnopqrstuvwxyz',
// 		input: 'IncludelowerCase'
// 	}, 
// 	{
// 		charList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// 		input: 'IncludeupperCase'
// 	},
// 	{
// 		charList: '0123456789',
// 		input: 'IncludeNumbers'
// 	},
// 	{
// 		charList: "@%+'!#$^?:,)(}{][~-_.",
// 		input: 'IncludeSpecialCharacter'
// 	}
// ];

// Write password to the #password input
generateBtn.addEventListener("click", function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
});

// Function to create pw based on length input and criteria selection
function generateRandomLowercase() {
  var lowercase = "abcdefghijklmnopqrstvwxyz";
  var random = Math.floor(Math.random() * lowercase.length);
  return lowercase[random];
}

function generateRandomUppercase() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var random = Math.floor(Math.random() * uppercase.length);
  return uppercase[random];
}

function generateRandomNumber() {
  var number = "1234567890";
  var random = Math.floor(Math.random() * number.length);
  return number[random];
}

function generateRandomSpecialCharacter() {
  var specialCharacter = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var random = Math.floor(Math.random() * specialCharacter.length);
  return specialCharacter[random];
}

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
