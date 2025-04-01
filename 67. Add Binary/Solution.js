//https://leetcode.com/problems/add-binary/description/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let i = a.length -1
    let j = b.length -1 
    let carry = 0
    let result = ""
    while ( i>= 0 || j >=0 ){
        let sum = (Number(a[i]) || 0) + (  Number(b[j]) || 0) + carry;
        console.log("a "+ a[i]+ " and " +"b "+ b[j])
        console.log("Sum " + sum);
        result = (sum % 2) + result
        carry = sum > 1 ? 1 : 0 
        i--;
        j--;
    }

    if (carry) result = '1' + result
    return result
};