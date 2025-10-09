#https://leetcode.com/problems/robot-return-to-origin/

class Solution:
    def judgeCircle(self, moves: str) -> bool:

        x = 0
        y = 0

        for i in range(0, len(moves), 1):
            if  moves[i] == 'U':
                y += 1
            elif moves[i] == 'D':
                y -= 1
            elif moves[i] == 'L':
                x -= 1
            else:
                x += 1

        return x == 0 and y == 0

        