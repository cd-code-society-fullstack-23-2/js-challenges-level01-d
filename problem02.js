const lastChars = (a, b) => {
    var firstChar = a.length > 0 ? a.charAt(0) : "@";
    var lastChar = b.length > 0 ? b.charAt(b.length - 1) : "@";
    return firstChar + lastChar;
}

module.exports = lastChars;