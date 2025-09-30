#https://leetcode.com/problems/richest-customer-wealth/

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        max_wealth = 0

        for i in range (0, len(accounts), 1):
            sum = 0 
            for j in range(0, len(accounts[i]), 1):
                sum +=  accounts[i][j]
            if sum > max_wealth:
                max_wealth = sum
        return max_wealth
        