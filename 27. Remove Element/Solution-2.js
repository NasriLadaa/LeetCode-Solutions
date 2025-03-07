//https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var k = nums.length;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums[i] = "_";
      k -= 1;
    }
  }
  nums.sort();
  return k;
};
