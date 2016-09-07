function combineString(str) {
  var replaceSpace = str.replace(" ", "");
  var splitString = replaceSpace.split('');
  return splitString;
}

function countLetters(str) {
  str = combineString(str);
  var result = {};

  for (var i = 0; i < str.length; i++) {
    if (str[i] in result) {
      result[str[i]] += 1;
    } else {
      result[(str[i])] = 1;
    }
  } return result;
}

console.log(countLetters("hello world"));