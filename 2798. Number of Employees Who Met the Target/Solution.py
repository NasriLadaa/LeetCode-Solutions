#https://leetcode.com/problems/number-of-employees-who-met-the-target/

class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:

        count = 0
        for i in range (0,len(hours), 1):
            if hours[i] >= target:
                count += 1

        return count
        