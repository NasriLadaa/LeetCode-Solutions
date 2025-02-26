#https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/

# Complete the insertNodeAtTail function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
def insertNodeAtTail(head, data):
    newNode = SinglyLinkedListNode(data)
    if(head is None):
        head = newNode
        return head
    else:
        current = head
        while(current.next is not None):
            print(current.data)
            current = current.next
            
        current.next = newNode
        print(newNode.data)
        
        return  head

    
    
