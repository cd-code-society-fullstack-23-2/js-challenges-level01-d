const startWord = (str, word) => {
    if (str.length === 0 || word.length === 0) {
      return "";
    }
  
    if (str.substring(1, word.length) === word.substring(1)) {
      return str.substring(0, word.length);
    }
  
    return "";
}
module.exports = startWord;