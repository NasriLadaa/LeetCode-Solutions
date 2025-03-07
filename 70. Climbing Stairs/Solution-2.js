//https://leetcode.com/problems/climbing-stairs/
// Pro Tip: Simialr to Fibonacci challange, can be solved using Depth First Search and Dynamic Programming.
// Top Down approach

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = {}) {
    
    //Base case
    if ( n in memo) return memo[n];
    if (n == 0) return 1;

    if (n < 0) return 0;

    //Progress forward
    memo[n] = climbStairs((n - 1), memo) + climbStairs((n - 2), memo)
    return memo[n];
};