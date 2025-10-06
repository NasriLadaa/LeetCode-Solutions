#https://leetcode.com/problems/find-if-digit-game-can-be-won/

class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        single_digit = 0
        double_digit = 0

        for i in range ( 0, len(nums), 1):
            if nums[i] >= 0 and nums[i] < 10:
                single_digit = single_digit + nums[i]
            else:
                double_digit = double_digit + nums[i]

        print(single_digit)
        print(double_digit)
        if single_digit == double_digit:
            return False
    
        return True
    
