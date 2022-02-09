const sumAll = function(number1, number2) {
    const invalidNumber1 = (number1<0) || !Number.isInteger(number1);
    const invalidNumber2 = (number2<0) || !Number.isInteger(number2);
    let sum = 0;

    if (invalidNumber1 || invalidNumber2){
        return "ERROR";
    }

    if (number1 < number2){
        for (let i=number1; i<=number2; i++){
            sum += i;
        }
    }
    else if (number1 > number2){
        for (let i=number1; i>=number2; i--){
            sum += i;
        }
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
