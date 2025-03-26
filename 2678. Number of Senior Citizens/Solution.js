
//https://leetcode.com/problems/number-of-senior-citizens/
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    
    let passengerCount = 0;
    for ( let i = 0 ; i < details.length ; i++){
        if( Number(details[i].slice(11,13)) > 60 )  passengerCount++;
    }
    return passengerCount;
};