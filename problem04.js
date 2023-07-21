const lastTwo = (str) => {
    if (str.length >= 2) {
      var lastChar = str.charAt(str.length - 1);
      var secondLastChar = str.charAt(str.length - 2);
      return str.substring(0, str.length - 2) + lastChar + secondLastChar;
    } else {
      return str;
    }
  }

  module.exports = lastTwo;
  