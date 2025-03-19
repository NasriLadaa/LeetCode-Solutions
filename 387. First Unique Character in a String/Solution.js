//https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    hash = {}
    var ans = -1;
    for (var i = 0; i < s.length; i++) {
        //console.log("test" + hash[s[i]]);
        if ( s[i] in hash) {
            hash[s[i]]++;
        }
        else {
            hash[s[i]] = 1;
        }
    }
    // use normal for loop for getting index...
    for (let j = 0; j < s.length; j++) {
        if (hash[s[j]] == 1) {
        ans = j;
        return ans;
        }
    }
    return ans;

};