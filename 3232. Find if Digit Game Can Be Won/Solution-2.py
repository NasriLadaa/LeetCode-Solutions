#https://leetcode.com/problems/find-if-digit-game-can-be-won/

class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:      
        single_digit = 0
        double_digit = 0
        for num in nums:
            if num >= 10:
                double_digit += num
            else:
                single_digit += num

        return abs(double_digit - single_digit ) > 0