//https://leetcode.com/problems/split-strings-by-separator/
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let newStr = [];
  for (let i = 0; i < words.length; i++) {
    let arr = words[i].split(separator);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].length > 0) {
        newStr.push(arr[j]);
      }
    }
  }

  return newStr;
};
