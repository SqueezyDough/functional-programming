export { splitString, cleanArray }

// splits an array using 1 or more separators
function splitString (string, ...separators) {
    let regEx = new RegExp(separators.join("|"))
    return string.split(regEx)
}

// replaces chars from string
// takes an array that requires cleaning as the first argument
// takes a second array of array(s) that contains an array with a target string and a new string
function cleanArray (array, filterOptions) {
    return array.map (item => {
        item = item.toLowerCase();

        filterOptions.forEach(filter => {
            const targetString = filter[0];
            const newString = filter[1];

            item = item.replace(targetString, newString)
        })

        // capatalize the first character
        item = item.charAt(0).toUpperCase() + item.slice(1);

        return item;
    })
}