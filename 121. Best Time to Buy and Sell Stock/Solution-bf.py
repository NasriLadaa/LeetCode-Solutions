#https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
#Brute force solution
#Note: this solution will not pass on leetcode (Time limit exceeded)
# Time Complexity: O(N^2), Space Complexity: O(1)

def maxProfit(prices):
    max_profit = float('-inf')
    for i in range(len(prices)):
        for j in range(i+1, len(prices)):
            profit = prices[j]-prices[i]
            if profit > 0:
                max_profit = max(max_profit,profit)

    return max_profit if max_profit > float('-inf') else 0


print(maxProfit([7,1,5,3,6,4]) )