//https://leetcode.com/problems/palindrome-number/

class Solution {
    public boolean isPalindrome(int x) {
        
       // Stack<Integer> s = new Stack<Integer>();
        //s.push(1);
       // s.push(2);
       // s.push(1);

      //  String str = "";

       // str += s.pop();
      //  str += s.pop();
      //  str += s.pop();

        //int n = Integer.parseInt(str);
       
        if ( x < 0){
            return false;
        }
     
  int n = pali(x, 0);
        if (n == x){return true;}
        return false;    
       
        

    }

    public int pali(int num, int m){
        if(num == 0){
            return m;
        }
        else{
            m = num%10 + m * 10;
            return pali(num/10,m);
        }
    }
}