// Password content variables/arrays
var numeric = [0,1,2,3,4,5,6,7,8,9];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\\",":",";","?",">","<",",",".","/","-","="];

console.log(numeric, lower, upper, special);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function that has prompts asking about password length and validates user input to be a number between 8 and 128.

var setPassLength = function(){
  passLength = window.prompt("How long should your password be? Please enter a number equal to OR between 8 and 128", "Type your password length here");

  if (passLength >= 8 && passLength <= 128){
    window.alert("Your password will be " + passLength + " characters long!");
  }
  else if (passLength < 8 || passLength > 128){
    window.alert("The number you have entered is not within the valid range of 8 to 128, please try again!");
    setPassLength();
  }
  else if (isNaN(!passLength)){
    window.alert("Please enter a valid number between 8 and 128!");
    setPassLength();
  }
  else{
    window.alert("Please enter a valid number between 8 and 128!");
    setPassLength();
  }
};

// Allow the user to confirm or cancel the option to include UPPERCASE values in the generated password

var setPassUpper = function(){
  passUpper = window.confirm("Would you like to include UPPERCASE characters in your password? Select 'OK' for YES, or 'Cancel' for NO.");

  console.log(passUpper);

  if (passUpper === true){
    return true;
  }
  else{
    return false;
  };
};

// Allow the user to confirm or cancel the option to include lowercase values in the generated password

var setPassLower = function(){
  passLower = window.confirm("Would you like to include lowercase characters in your password? Select 'OK' for YES, or 'Cancel' for NO.");

  console.log(passLower);

  if (passLower === true){
    return true;
  }
  else{
    return false;
  };
};

// Allow the user to confirm or cancel the option to include NUMERIC values in the generated password

var setPassNum = function(){
  passNum = window.confirm("Would you like to include NUMBERS in your password? Select 'OK' for YES, or 'Cancel' for NO.");

  console.log(passNum);

  if(passNum === true){
    return true;
  }
  else{
    return false;
  };
};



// Write password to the #password input
function writePassword() {
  setPassLength();
  setPassUpper();
  setPassLower();
  setPassNum();
  
    



  var password = generatePassword();
    var numeric = "0123456789";
    var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);