#https://leetcode.com/problems/find-the-difference/

class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        #Counter is sub class that convert values to hashtable values, frequency 
        count_s, count_t = Counter(s), Counter(t)
        for c in count_t:
            #if char does not exist
            if c not in count_s:
                return c
            # if char frequency is different 
            if count_s[c] < count_t[c]:
                return c