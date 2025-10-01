#https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        max_num = 0

        for sentence in sentences:
            max_num = max( max_num , len(sentence.split()))
        
        return max_num
        