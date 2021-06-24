var generateButton = document.querySelector("#generate-button");

var lowercaseString = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var specialcharactersString = "(!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)"
var numbersString = '1234567890'
var passwordString = ''
finalString = ''

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function userInput() {
    var userInput = false
    var userNumber = false
    var lowercase = false
    var uppercase = false
    var numbers = false
    var specialcharacters = false
    //Check how many characters the user wants in the password
    while(userNumber === false) {
        var numCharacters = parseInt(prompt(`How many characters do you want in the password (choose between 8 and 128)`))

        if(numCharacters > 8 && numCharacters < 128) {
            userNumber = true;
        }
        else {
            alert("Please choose a number between 8 and 128!");
        }
     }
     //check what type of characters the user wants in the password
     while(userInput === false) {
        if(confirm("Do you want lowercase letters in the password")) {
            lowercase = true
         }

        if(confirm("Do you want uppercase letters in the password")) {
            uppercase = true
        }

        if(confirm("Do you want numbers in the password")) {
            numbers = true
        }

        if(confirm("Do you want special characters in the password")) {
            specialcharacters = true
        }

        if(lowercase || uppercase || numbers || specialcharacters) {
            userInput = true
        }
        else {
            alert("You must select at least one character option!")
        }
     }
        //add characters to string if user selected those options
        if(lowercase) {
            passwordString += lowercaseString
        }
        if(uppercase) {
            passwordString += uppercaseString
        }
        if(numbers) {
            passwordString += numbersString
        }
        if(specialcharacters) {
            passwordString += specialcharactersString
        }

        passwordString = passwordString.split('')
        
        for (let i = 0; i < numCharacters; i++) {
            var randomNumber = getRandomInt(numCharacters)
            finalString += passwordString[randomNumber]   
        }
        
        document.getElementById("password").textContent = finalString

}




//call the userInput function to generate password on buttonclick
window.onload=function(){
generateButton.addEventListener("click", userInput)
}