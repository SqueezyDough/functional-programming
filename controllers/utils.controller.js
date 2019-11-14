const utilsController = {};

utilsController.capitaliseFirstCharacter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// checks if string contains only numbers
utilsController.isStringANumber = function(string) {
    return /^\d+$/.test(string);
}


module.exports = utilsController;