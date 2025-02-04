//https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if ( n == 0){
        return 0;
    }
    if ( n == 1 || n == 2){
        return 1;
    }
    var arr = []
    arr[0] = 0
    arr[1] = 1
    arr[2] = 1
    for ( var i = 3 ; i <= n ; i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
    }

    return arr[n]
};