//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    hash = {}
    for (var i = 0; i < nums.length; i++) {
        neededNumber = target - nums[i];
        if (neededNumber in hash) {
            return [hash[neededNumber], i]
        }
        else {
            hash[nums[i]] = i
        }
    }

    return [-1, -1]
};