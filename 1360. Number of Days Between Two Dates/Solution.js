/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const dayMill = 24 * 60 * 60 * 1000;
    date1  = new Date(date1)
    date2  = new Date(date2)
    let diff = date1 -  date2
    diff = diff / dayMill

    return Math.abs(diff)
};