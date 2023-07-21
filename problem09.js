const deFront = (str) => {
    if (str.charAt(0) === 'a' && str.charAt(1) === 'b') {
      return str;
    } else if (str.charAt(0) === 'a') {
      return 'a' + str.substring(2);
    } else if (str.charAt(1) === 'b') {
      return 'b' + str.substring(2);
    } else {
      return str.substring(2);
    }
}
module.exports = deFront;