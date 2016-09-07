// var result = {
//   "l": [0],
//   "i": [1,10,],
//   "g": [2],
//   "h": [3,5,13,15],
//   "t": [4,12]
// }

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
      result[(str[i])].push(i);
    } else {
      result[str[i]] = [i];
    }
  } return result;
}

console.log(countLetters("hello world"));