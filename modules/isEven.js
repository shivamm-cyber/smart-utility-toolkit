function isEven(number) {
    if (number % 2 === 0) {
        return `${number} is Even`;
    } else {
        return `${number} is Odd`;
    }
}

module.exports = isEven;
