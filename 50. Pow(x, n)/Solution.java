//https://leetcode.com/problems/powx-n/

class Solution {
    public double myPow(double x, int n) {
           if (n == Integer.MAX_VALUE) return x;
        else if (n == Integer.MIN_VALUE) return (x == 1 || x == -1) ? 1 : 0; 
        boolean flag = false;
        if ( n < 0){
            flag = true;
            n = Math.abs(n);
        }
       
        double result = CalPow(x, n);
        if (flag){
            return 1/result; 
        }
        else{
            return result;
        }
    }

    public double CalPow(double x, int n){
        if ( n == 0 ){
            return 1;
        }
        else{
            return x * CalPow(x, n-1);
        }
    }
}