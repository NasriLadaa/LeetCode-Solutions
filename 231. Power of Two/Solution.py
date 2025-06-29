#https://leetcode.com/problems/power-of-two/

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if ( n <- 0):
            return False
        x = 1
        while ( x < n):
            x *= 2
        return x == n
        