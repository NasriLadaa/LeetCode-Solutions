//https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[left] = nums[i]
            left++
        }
    }

    while (left < nums.length) {
        nums[left] = 0;
        left++
    }

    return nums;
};