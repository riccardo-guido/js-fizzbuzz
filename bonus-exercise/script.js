const inputString = prompt("Inserisci una stringa:");
let modifiedString = "";

for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if ('aeiou'.includes(char)) {
        modifiedString += char + 'f' + char; 
    } else {
        modifiedString += char;
    }
}

console.log("Stringa modificata:", modifiedString);