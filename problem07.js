const minCat = (a, b) => {
    var minLength = Math.min(a.length, b.length);
    return a.substring(a.length - minLength) + b.substring(b.length - minLength);
}

module.exports = minCat;