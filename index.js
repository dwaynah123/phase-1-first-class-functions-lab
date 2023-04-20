// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    let fare = function () {
        return x * x;
    }
    return fare;
}

function fareDoubler(x) {
    return x * 2;
}

function fareTripler(x) {
    return x * 3;
}
 
function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func = returnFirstTwoDrivers()) {
        return arrayOfDrivers.slice(0, 2);
    }else if (func = returnLastTwoDrivers()) {
        return arrayOfDrivers.slice(2);
    }
}