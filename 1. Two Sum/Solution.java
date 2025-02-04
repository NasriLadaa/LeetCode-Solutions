//https://leetcode.com/problems/two-sum/

class Solution {
    public int[] twoSum(int[] nums, int target) {

    HashMap<Integer, Integer> n = new HashMap<>();
    for ( int i = 0 ; i <= nums.length ; i ++){
        if (n.containsKey(target-nums[i])){
            int number = n.get(target-nums[i]);
            return new int[] { number, i};
        }
        else{
            n.put(nums[i], i);
        }
    }
           

             return new int[] {-1,-1 };
	        
    }
}