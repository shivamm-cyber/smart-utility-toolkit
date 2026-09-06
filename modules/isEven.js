// isEven.js - Custom module to check if a number is even or odd

function isEven(number) {
    if (number % 2 === 0) {
        return `${number} is Even`;
    } else {
        return `${number} is Odd`;
    }
}

module.exports = isEven;
