//https://leetcode.com/problems/kth-largest-element-in-an-array/

class Solution {
    public int findKthLargest(int[] nums, int k) {

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int i = 0; i < k; i++) {
            minHeap.offer(nums[i]);
        }

        for (int i = k; i < nums.length; i++) {
            if (nums[i] > minHeap.peek()) {
                minHeap.poll();
                minHeap.offer(nums[i]);
/*offer(nums[i]):
This is a method of the Priority     Queue class. It's used to add a new element to the queue.
 nums[i] represents the current element from thenums array that you're working with.
                */
            }
        }

        return minHeap.peek();
    }
        
    
}