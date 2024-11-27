const removeFromArray = function(array, ...value) {
    const newArray = []
    for (i=0; array.length+1 != i; i++) {
        if (array[i] != value) {
            newArray.push(array[i])
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
