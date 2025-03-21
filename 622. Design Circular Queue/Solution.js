//https://leetcode.com/problems/design-circular-queue/

class Node {
    constructor(val = null, next, prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyCircularQueue {
    constructor(k) {
        this.size = k;
        this.left = new Node(0, null, null)
        this.right = new Node(0, null, this.left)
        this.left.next = this.right;
    }

    enQueue(val) {
        if (this.isFull() === true) return false;
        var cur = new Node(val, this.right, this.right.prev)
        this.right.prev.next = cur
        this.right.prev = cur
        this.size -= 1;
        return true;
    }

    deQueue() {
        if (this.isEmpty() === true) return false;
        this.left.next = this.left.next.next;
        this.left.next.prev = this.left
        this.size += 1;  //incremebt space by one
        return true;
    }

    Front() {
        if (this.isEmpty() === true) return -1
        return this.left.next.val;
    }

    Rear() {
        if (this.isEmpty() === true) return -1
        return this.right.prev.val;
    }

    isEmpty() {
        if (this.left.next === this.right) return true
        return false;
    }

    isFull() {
        if (this.size === 0) return true
        return false;
    }

}