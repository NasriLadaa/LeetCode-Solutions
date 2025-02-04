//https://practice.geeksforgeeks.org/problems/leap-year0943/1

function checkYear(n) {

    // Check if n is divisible by 4
    if (n % 4 === 0) {
    
        // If it's divisible by 100, it should also be 
        // divisible by 400 to be a leap year
        if (n % 100 === 0) {
            return n % 400 === 0;
        }
        return true;
    }
    return false;
}

// Driver Code
let year = 2000;
if (checkYear(year)) {
    console.log("true");
} else {
    console.log("false");
}