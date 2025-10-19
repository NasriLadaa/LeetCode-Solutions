#https://leetcode.com/problems/find-words-containing-character/

class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        
        res = []
        count = 0
        for word in words:
            for c in word:
                if c == x:
                    res.append(count)
                    break
            count += 1

        return res
                
            
    
## using lambda and filter
## print( list( filter(  lambda i : x in words[i]   , range(len(words))  )) )