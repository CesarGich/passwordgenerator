const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?",
"/"];
let randomPasswordOne = document.getElementById("randompass-one")
let randomPasswordTwo = document.getElementById("randompass-two")



function generateRandomPassword() {
    randomPasswordOne.textContent = ""
    randomPasswordTwo.textContent = ""
    let passwordLength = 12

    for (i = 0; i < passwordLength; i++) { 
        let randomOne = Math.floor(Math.random() * characters.length) + 1
        let generatedOne = characters[randomOne]
        randomPasswordOne.textContent += generatedOne
    }

    for (i = 0; i < passwordLength; i++) { 
        let randomTwo = Math.floor(Math.random() * characters.length) + 1
        let generatedTwo = characters[randomTwo]
        randomPasswordTwo.textContent += generatedTwo
    }
}
 
