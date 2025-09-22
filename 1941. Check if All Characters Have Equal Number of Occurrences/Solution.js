//https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    hash = {}
    for (var i = 0; i < s.length; i++) {
        if (hash[s[i]] == undefined) {
            hash[s[i]] = 1;
        }
        else {
            hash[s[i]]++;
        }
    }

    console.log(hash);

    let values = Object.values(hash);
    return new Set(values).size == 1; // true if frequencies differ
};