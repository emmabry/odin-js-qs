const palindromes = function (word) {
    word = word.replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase();
    let reversed = word.split("").reverse().join("").toLowerCase();
    if (reversed == word) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
