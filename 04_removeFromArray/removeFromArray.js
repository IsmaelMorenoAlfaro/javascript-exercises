const removeFromArray = function(array, ...elements) {
    
    for (let i=0; i<array.length; i++){
        for (let j=0; j<elements.length; j++){
            if (array[i] === elements[j]){
                array.splice(i,1);
                i = 0;
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
