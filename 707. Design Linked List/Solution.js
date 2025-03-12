//https://leetcode.com/problems/design-linked-list/

class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = new Node(); // dummy node
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) return -1;
    let cur = this.head;
    for (let i = 0; i <= index; i++) {
      cur = cur.next;
    }
    return cur.val;
  }

  addAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head.next;
    this.head.next = newNode;
    this.length++;
  }

  addAtTail(value) {
    const newNode = new Node(value);
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;
  }

  addAtIndex(index, value) {
    if (index < 0 || index > this.length) return;
    const newNode = new Node(value);
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
    this.length++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return;
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    cur.next = cur.next.next;
    this.length--;
  }
}
