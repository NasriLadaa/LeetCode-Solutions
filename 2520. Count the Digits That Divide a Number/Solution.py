#https://leetcode.com/problems/count-the-digits-that-divide-a-number/

class Solution:
    def countDigits(self, num: int) -> int:
        
        original_num = num
        count = 0 

        while (num != 0):
            digit = num % 10
            if digit != 0 and original_num % digit == 0:
                count += 1
            num //= 10
        
        return count