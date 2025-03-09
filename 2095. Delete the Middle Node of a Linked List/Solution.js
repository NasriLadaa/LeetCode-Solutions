
//https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    
    if (!head || !head.next) return null;

    let fast = head;
    let slow = head;
    var temp = null;
    //let current = head;
    while (fast != null  && fast.next != null ){
        fast = fast.next.next;
        temp = slow;
        slow = slow.next
        //current = current.next;
    }

    temp.next = slow.next;
    return head;


};