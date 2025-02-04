#https://leetcode.com/problems/median-of-two-sorted-arrays/

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        merged = sorted(nums1 + nums2)
        n = len(merged)
        if n % 2 == 0:
            return (merged[math.floor(n/2) - 1] + merged[math.floor(n/2)]) /2
        else:
            return merged[math.floor(n/2)]