//https://leetcode.com/problems/angle-between-hands-of-a-clock/

class Solution {
    public double angleClock(int hour, int minutes) {
        int hoursDegreeRatio = 360/12;
        int minutesDegreeRation = 360/60;

        float h = ( hour%12 + (float)minutes/60) * hoursDegreeRatio ;
        float m = minutes * minutesDegreeRation ;
        float angel = Math.abs(h-m);
        //beacuse alawys we have to return the smallest angel so we have to check if the result is more than 360 
        if (angel > 180){
            angel = 360 - angel;
            }
       
            return angel;
        
        
    }
}