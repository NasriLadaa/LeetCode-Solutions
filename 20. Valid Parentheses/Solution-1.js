//https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    

    str = s;
    let stack = []
    
    for ( let i = 0 ; i < str.length ; i++ ){
        let top = stack[stack.length- 1]  // get the top element 
         console.log("Top "+top+ "   "+str[i] )
        if ( str[i] == "(" || str[i] == "{" || str[i] == "[" ){
            console.log(str[i])
            stack.push(str[i])
             console.log("here")
        }
        else if ( ( str[i] == ")" && top == "(" ) || ( str[i] == "}" && top == "{"   ) || ( str[i] == "]" && top == "["   ) ){
                    console.log("before")
                    stack.pop();
                    console.log("after")
        }
        else{
            console.log("Invalid Paranthses 2")
            return false;
        }
        console.log(stack)
        
    }
    
    return stack.length ? false : true
    
    };