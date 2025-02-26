#https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/

#
# Complete the 'deleteNode' function below.
#
# The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
# The function accepts following parameters:
#  1. INTEGER_SINGLY_LINKED_LIST llist
#  2. INTEGER position
#

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#

def deleteNode(llist, position):
    if position == 0:
        return llist.next
    currentNode = llist
    for i in  range (position -1 ):
        currentNode = currentNode.next
        
    currentNode.next = currentNode.next.next
    return llist

