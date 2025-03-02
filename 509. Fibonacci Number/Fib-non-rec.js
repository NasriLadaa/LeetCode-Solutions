//https://leetcode.com/problems/fibonacci-number/
// Tip: Learn Swap elments before proceed with this solution.
function fibinacciSequence(num){
let num1 = 0 , num2 = 1, temp;

while (num > 0){
    temp = num2;
    num2 = num1 + num2;
    num1= temp;

    num--;
}

return num1;
}

console.log(fibinacciSequence(12));