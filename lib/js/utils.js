export { splitString, cleanArray }

// splits an array using 1 or more separators
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

        if (library) {
            library.forEach( titles => {
                if (arrayIncludes(item, titles)) {
                    const preferredTitle = titles[titles.length - 1];

                    console.log(`[${item}] found in library, replace with preferred title [${preferredTitle}]`)
                    item = item.replace(item, preferredTitle)
                }
            })
        }

        filterOptions.forEach(filter => {
            const targetString = filter[0];
            const newString = filter[1];

            console.log(`[${targetString}] found in array, replace with [${newString}]`)
            item = item.replace(targetString, newString)
        })

        // capatalize the first character
        item = item.charAt(0).toUpperCase() + item.slice(1);

        return item;
    })
}

function arrayIncludes (string, array){
    return array.some( testString => string.includes(testString))
};

// function countDuplicates (array) {
//     let obj = {};

//     array.forEach ( item => typeof obj[item] === 'number' ? obj[item]++ : obj[item] = 1)

//     let results = Object.keys(obj)
//                         .map( item => item + (obj[item] === 1 ? '' : ' ' + obj[item]))
//                         .join('\n');

//     return results
// }