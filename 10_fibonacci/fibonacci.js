const fibonacci = function(number) {
    let a = 0,
        b = 1;
    if (number < 0) return "OOPS";
    if (number === 0) return a;
    for (let i=1; i<number; i++){
        let aux = b;
        b = a + b;
        a = aux;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
