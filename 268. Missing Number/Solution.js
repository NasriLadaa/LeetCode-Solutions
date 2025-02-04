//https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //Cyclic sort pattern
    let i =0;

    while ( i < nums.length){
        let j = nums[i];
        if( nums[i] < nums.length && nums[i] !== nums[j]  ){
            var temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }
        else{
            i++;
        }
    }

    //sort the array
    

    for ( var k = 0 ; k < nums.length ; k++){
        if ( nums[k] != k){
            return k;
        }
    }

    return nums.length;
};