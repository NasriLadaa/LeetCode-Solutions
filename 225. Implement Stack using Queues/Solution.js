//https://leetcode.com/problems/implement-stack-using-queues/

class Node {

    constructor(val = null, next = null) {
        this.val = val;
        this.next = null;
    }
}

class MyQueue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enQueue(val) {
        const newNode = new Node(val)

        if (!this.size) {
            this.head = newNode;
            this.tail = newNode
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    deQueue() {
        if (!this.size) return null;

        let node = this.head
        this.head = this.head.next
        node.next = null;

        this.size--;

        return node.val;
    }

    peek() {
        return this.head.val;
    }

    empty() {
        return this.size === 0;
    }

}

class MyStack {
    constructor() {
        this.Queue = new MyQueue();
    }

    push(val) {
        let rotate = this.Queue.size;
        this.Queue.enQueue(val);

        while (rotate) {
            this.Queue.enQueue(this.Queue.deQueue());
            rotate--;
        }


    }

    pop() {
        return this.Queue.deQueue();
    }

    top() {
        return this.Queue.peek();
    }

    empty() {
        return this.Queue.empty();
    }

}