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
}



// Write password to the #password input
function writePassword() {
  setPassLength();
  
    



  var password = generatePassword();
    var numeric = "0123456789";
    var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var speical = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);