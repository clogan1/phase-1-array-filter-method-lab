
// function findMatching(drivers, string) {
//     return drivers.filter(name => name.toUpperCase() === string.toUpperCase());
// }

// function fuzzyMatch(drivers, string) {
//     return drivers.filter(name => name.slice(0,1).toUpperCase() === string.slice(0,1).toUpperCase());
// }

// function matchName(drivers, string) {
//     return drivers.filter( element => element.name.toUpperCase() === string.toUpperCase());
// }



//alternate tries

// function findMatching(drivers, name){
//     const matchDrivers = drivers.filter(driver => {
//         return driver.toUpperCase() === name.toUpperCase();
//     })

//     return matchDrivers
// }


// function fuzzyMatch(drivers, letter){
//     const fuzzyDrivers = drivers.filter(driver => {
//         return driver.slice(0,1).toUpperCase() === letter.slice(0,1).toUpperCase();
//     })

//     return fuzzyDrivers;
// }


// function matchName(drivers, string){
//     const matchNames = drivers.filter(driver => {
//         return driver.name === string;
//     })

//     return matchNames;

// }


//practice 7/5

function findMatching(drivers, string){
   return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
};

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver[0].toUpperCase() === string[0].toUpperCase())
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name.toUpperCase() === string.toUpperCase())
}