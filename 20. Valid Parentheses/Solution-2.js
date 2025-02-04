//https://leetcode.com/problems/valid-parentheses/

​​/**
* @param {string} s
* @return {boolean}
*/


var isValid = function(s) {


   let code = {
       ")": "(",
       "]": "[",
       "}": "{"
   }
   let stack = []


   for(let i=0; i< s.length; i++){
       if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
           stack.push(s[i])
       }else{
           if (stack[stack.length-1] == code[s[i]])
               stack.pop()
           else{
               return false
           }
       }
   }
   if (stack.length != 0)
       return false
   return true;


  
  
};