
function findMatching(drivers, string) {
    return drivers.filter(name => name.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(name => name.slice(0,1).toUpperCase() === string.slice(0,1).toUpperCase());
}

function matchName(drivers, string) {
    return drivers.filter( element => element.name.toUpperCase() === string.toUpperCase());
}

