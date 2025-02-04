//https://leetcode.com/problems/fibonacci-number/

class Solution {
    public int fib(int n) {
        return CalFib(n);
    }


    public int CalFib(int n){
        if ( n == 0 ){
            return 0;
        }
        else if ( n == 1){
            return 1;
        }
        else{
            return  CalFib(n-1) + CalFib(n-2);
        }

    }
}