//https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var str = s;
        const sym = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900,
    }
    var num = 0;
    var count = 0;
    while (count < str.length){
        var nums = str[count]+str[count+1]
        console.log("Test "+nums)
        if ( sym[nums] != null && nums != "" ){
            num = num + sym[nums]
            count += 2
        }        
        else{
            num += sym[str[count]];
            count++;
        }
        console.log(num); 
    }
    return num;

};