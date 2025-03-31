//https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    hash = {}
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            hash[nums[i]]++;
        }else{
            hash[nums[i]] = 1;
        }
    }

    console.log(hash);
    for (var i = 0; i < nums.length; i++) {
        if (hash[nums[i]] < 2){
            return nums[i];
        }
    }

};