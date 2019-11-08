export { splitString, cleanArray }

// splits a string using 1 or more separators
function splitString (string, ...separators) {
    let regEx = new RegExp(separators.join("|"))
    return string.split(regEx)
}

// replaces chars from string
// takes an array that requires cleaning as the first argument
// takes a second array of array(s) that contains an array with a target string and a new string
function cleanArray (array, filterOptions, library) {
    return array.map (item => {
        item = item.toLowerCase();

        // check if item is in library
        if (library) {
            item = filterString(item, library, false);
        }

        // filter other crap
        item = filterString(item, filterOptions, true);

        // capatalize the first character
        item = capitaliseFirstCharacter(item)

        return item;
    })
}

function filterString(string, filters, strict) {
    filters.forEach ( filter => {
        let oldString, newString = "";

        if (!strict && arrayIncludes(string, filter)) {
            oldString = string;
            newString = filter[filter.length - 1]
        } else {
            oldString = filter[0];
            newString = filter[1];
        }

        string = string.replace(oldString, newString);
    })

    return string;
}

function arrayIncludes (string, array){
    return array.some( testString => string.includes(testString))
};

function capitaliseFirstCharacter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function countDuplicates (array) {
//     let obj = {};

//     array.forEach ( item => typeof obj[item] === 'number' ? obj[item]++ : obj[item] = 1)

//     let results = Object.keys(obj)
//                         .map( item => item + (obj[item] === 1 ? '' : ' ' + obj[item]))
//                         .join('\n');

//     return results
// }