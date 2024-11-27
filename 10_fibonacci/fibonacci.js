const fibonacci = function(num) {
    let sequence = [];
    let value = 0
    if (num < 0) {
        return "OOPS";
    }
    for (let i=1; i < num+1; i++) {
        if (sequence.length == 0 || sequence.length == 1){
            sequence.push(1);
        } else {
            let next = sequence[i-2] + sequence[i-3]
        sequence.push(next)
        value = next
        }
    };
    return value
};

// Do not edit below this line
module.exports = fibonacci;
