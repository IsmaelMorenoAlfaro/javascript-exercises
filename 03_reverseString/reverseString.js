const reverseString = function(string) {
    let newString = "";
    const words = string.split("");
    for (let i=words.length-1; i>=0; i--){
        newString+= words[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
