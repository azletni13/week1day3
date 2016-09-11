function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
    return str + midstring + re;
}

console.log(testinput("Amna", "Hi my name is Amna"))
