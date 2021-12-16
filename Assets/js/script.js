// Variables to track user input
// var confirmNumeric;
// var confirmLower;
// var confirmUpper;
// var confirmSpecial;
// var charSelect;

// Password content variables/arrays
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\\",":",";","?",">","<",",",".","/","-","="];

console.log(numeric, lower, upper, special);


// Function that has prompts asking about password length and validates user input to be a number between 8 and 128.
// so far learned two ways of storing info, empty array or an object 
// local storage, session storage, cache, cookies, database 
// var object = {
  //   key: value,
  //   key: value,
  // }
  
  
function setPassword(){
  var passLength = window.prompt("How long should your password be? Please enter a number equal to OR between 8 and 128", "Type your password length here");
  
  if (passLength >= 8 && passLength <= 128){
    window.alert("Your password will be " + passLength + " characters long!");
  }
  else if (passLength < 8 || passLength > 128){
    window.alert("The number you have entered is not within the valid range of 8 to 128, please try again!");
    setPassword();
  }
  else if (isNaN(!passLength)){
    window.alert("Please enter a valid number between 8 and 128!");
    setPassword();
  }
  else if (passLength === ""){
    window.alert("Please enter a valid number between 8 and 128!");
    setPassword();
  }
  else{
    window.alert("Please enter a valid number between 8 and 128!");
    setPassword();
  }

  var confirmLower = confirm("Would you like to include lowercase characters in your password? Select 'OK' for YES, or 'Cancel' for NO.");
  var confirmUpper = confirm("Would you like to include UPPERCASE characters in your password? Select 'OK' for YES, or 'Cancel' for NO.");
  var confirmNumeric = confirm("Would you like to include NUMBERS in your password? Select 'OK' for YES, or 'Cancel' for NO.")
  var confirmSpecial = confirm("Would you like to include special characters in your password? Select 'OK' for YES, or 'Cancel' for NO.")

  if (confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial === false){
    window.alert("You must choose at least one character type for your password. Please try again!");
    setPassword();
  }
  else {

    // an objet to store the user responses
    var storageObject = {
      passLength: passLength,
      confirmLower: confirmLower,
      confirmUpper: confirmUpper,
      confirmNumeric: confirmNumeric,
      confirmSpecial: confirmSpecial
    };
    return storageObject;
  }
};

function randomGenerator(array){
  //Math.floor(Math.random() * passLength) 
  var randomInd = Math.floor(Math.random() * array.length);
  var randomEl = array[randomInd];
  console.log(randomEl);
  return randomEl;
};

function generatePassword() {
  var answers = setPassword();
  var final = [];
  var possibleThings = [];
  var confirmedThings = [];
  // going to use .push() and .concat() methods to push characters into these empty arrays
  // a conditional to concat and push if user has chosen given criteria
  
  if (answers.confirmLower){
    possibleThings = possibleThings.concat(lower);
    confirmedThings.push(randomGenerator(lower));
  }
  
  if (answers.confirmUpper){
    possibleThings = possibleThings.concat(upper);
    confirmedThings.push(randomGenerator(upper));
  }

  if (answers.confirmNumeric){
    possibleThings = possibleThings.concat(numeric);
    confirmedThings.push(randomGenerator(numeric));
  }

  if (answers.confirmSpecial){
    possibleThings = possibleThings.concat(special);
    confirmedThings.push(randomGenerator(special));
  }

  for(var i = 0; i < answers.passLength; i++) {
    var possibleThings = randomGenerator(possibleThings);
    final.push(possibleThings);
  }

  for (var i = 0; i < confirmedThings.length; i++){
    final[i] = confirmedThings[i]
  }

  console.log(possibleThings);

  // answer is supposed to be in a string
  return final.join('')
};


// don't touch this code below
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


// // Allow the user to confirm or cancel the option to include UPPERCASE values in the generated password

// var setPassUpper = function(){
  //   confirmUpper = window.confirm("Would you like to include UPPERCASE characters in your password? Select 'OK' for YES, or 'Cancel' for NO.");
  
  //   console.log(confirmUpper);
  
  //   if (confirmUpper === true){
    //     window.alert("You have chosen to include UPPERCASE characters in your password!")
    //     return true;
    //   }
    //   else{
      //     window.alert("You have chosen NOT to include UPPERCASE characters in your password!")
      //     return false;
      //   };
      // };
      
      // // Allow the user to confirm or cancel the option to include lowercase values in the generated password
      
      // var setPassLower = function(){
  // a onfirm is a boolean meaning it checks for true or false
//   confirmLower = window.confirm("Would you like to include lowercase characters in your password? Select 'OK' for YES, or 'Cancel' for NO.");

//   console.log(confirmLower);

//   if (confirmLower === true){
//     window.alert("You have chosen to include lowercase characters in your password!")
//     return true;
//   }
//   else{
//     window.alert("You have chosen NOT to include lowercase characters in your password!")
//     return false;
//   };
// };

// // Allow the user to confirm or cancel the option to include NUMERIC values in the generated password

// var setPassNum = function(){
//   confirmNumeric = window.confirm("Would you like to include NUMBERS in your password? Select 'OK' for YES, or 'Cancel' for NO.");

//   console.log(confirmNumeric);

//   if(confirmNumeric === true){
//     window.alert("You have chosen to include NUMBERS in your password!")
//     return true;
//   }
//   else{
//     window.alert("You have chosen NOT to include NUMBERS in your password!")
//     return false;
//   };
// };