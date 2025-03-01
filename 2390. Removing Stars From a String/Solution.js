//https://leetcode.com/problems/removing-stars-from-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
if ( s.length === 0) return ''
let stack = []
console.log(stack);
for ( let i = 0 ; i < s.length ; i++){
    if ( s[i] == '*'){
        stack.pop()
        console.log("tt"+stack);
    }
    else{
        stack.push(s[i])
    }
}
return stack.join('')
};

var str = "*leet**cod*e";
console.log(removeStars(str));
