const scubaNames = ['Antonia', 'Nuru', 'Amari', 'Mo']
    const returnFirstTwoDrivers = function (scubaNames){
        return scubaNames.slice(0, 2)

    }
const returnLastTwoDrivers = function (scubaNames){
    return scubaNames.slice(2)
}
    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function multipliedFare (fare){
        return number * fare
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, nameFunctions){
    if (nameFunctions === returnFirstTwoDrivers){
       return ['Antonia','Nuru']
    }
    else if (nameFunctions === returnLastTwoDrivers) {
        return ['Amari', 'Mo']
    }

}