const conCat =(a, b) => {
  if (a.length > 0 && b.length > 0 && a.charAt(a.length - 1) === b.charAt(0)) {
    return a + b.substring(1);
  } else {
    return a + b;
  }
}

module.exports = conCat;