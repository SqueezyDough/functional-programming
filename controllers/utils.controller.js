const utilsController = {};

// capitalise first char from string
utilsController.capitaliseFirstCharacter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// --> "string" = "String"

// checks if string contains only numbers
utilsController.isStringANumber = function(string) {
    return /^\d+$/.test(string);
}
// --> true/false

module.exports = utilsController;