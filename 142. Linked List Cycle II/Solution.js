//https://leetcode.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let isCycleExists = false;

        while( fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;

            if(slow == fast){
                isCycleExists = true;
                fast = head;
                break;
            }
        }

        if(!isCycleExists){
            return null;
        }
           while(slow != fast){
            fast = fast.next;
            slow = slow.next;
            }
        
        return fast;
};