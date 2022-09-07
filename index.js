// Code your solution here
function findMatching(array, string) {
    const nameArr = array.filter(element => element.toLowerCase() === string.toLowerCase())
    return nameArr
}

function fuzzyMatch(array, string) {
    const nameArr = array.filter(element => element.charAt(0) === string.charAt(0))
    return nameArr
}

function matchName(array, string) {
    const nameArr = array.filter(element => element.name === string)
    return nameArr
}