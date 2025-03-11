//https://www.geeksforgeeks.org/problems/buildings-receiving-sunlight3032/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find length of longest subarray of consecutive integers.
    longest(arr) {
        var count = 0 ;
        //assuming there is no building yet
        var highest = 0 ;
        for (building in arr){
            //if the building is higher than the previous highest one, then the new one is the highest
            if (building >= highest) {
                count+=1;
                highest = building;
            }
                
        }
        
        return count;
    }
}