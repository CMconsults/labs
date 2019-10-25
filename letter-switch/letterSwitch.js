function switchChar (inputChar, actualChar, changeChar){
 // Code goes here
 let indexStore = [];
 let output= "";
 if (actualChar.length !== changeChar.length){
    return "Length mismatch";
}
if (inputChar.length > actualChar.length){
    return -1;
}

for (let a = 0; a < inputChar.length; a++) {
    let foundMatch = false;
    let actualCharCopy = "";
    for (let b = 0; b < actualChar.length; b++) {
        //please check duplicate
        if (actualCharCopy.indexOf(actualChar[b]) !== -1){
          return "Repeated value";
       }
       actualCharCopy = actualCharCopy + actualChar[b];
        if(inputChar[a] === actualChar[b]) {
            foundMatch = true;
        }
        /* if (inputChar[a] === actualChar[b]){
            indexStore.push(b); 
            } */
        
    }
    if (foundMatch === false) {
        return -1;
    }
    
}

// store indexes - later delete this block and uncomment the logic in the for loop above
for (let i = 0; i < inputChar.length; i++) {
    for (let j = 0; j < actualChar.length; j++) {
        if (inputChar[i] === actualChar[j]){
        indexStore.push(j); 
        }
    }
}

for (let k = 0; k < indexStore.length; k++) {
    for (let l = 0; l < changeChar.length; l++) {
        if (l === indexStore[k]){
        output= output + changeChar[l];
        }
    }   
}
console.log(output, ' ..output')
 return output;
}
// console.log(switchChar('we', 'wkeapk', 'imgren'));


module.exports = switchChar;


