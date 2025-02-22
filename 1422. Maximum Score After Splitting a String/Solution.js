//https://leetcode.com/problems/maximum-score-after-splitting-a-string

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let ans = 0
    arr = s.split('');
    for ( let i = 0 ; i < arr.length -1 ; i++){
        let curr = 0;
        for (let j = 0 ; j<i+1; j++){
            if ( arr[j] == '0' ){
                curr++;
            }
        }

        for ( let j = i+1; j<arr.length;j++){
            if (arr[j] == "1"){
                curr++;
            }

        }
         ans = Math.max(ans, curr);

    }

    return ans;
};