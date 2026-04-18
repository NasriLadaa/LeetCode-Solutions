//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum=0;
    let prod=1;
    while(n>0){
        const mod = n %10;
        sum += mod;
        prod *=mod;
        n = Math.floor(n/10);
    }

    return prod- sum;
};