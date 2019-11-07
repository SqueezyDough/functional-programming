import * as utils from "./utils.js"

let surveyString = `
Harry Potter
De reunie Simone van der Vlught
geen
Game of thrones
Twilight
lees niet
Torak en Wolf

De vliegeraar

A wise men's fear
heb ik niet
Kookboek
To all the boys I have loved before
Data Visualisation 2
1000 schitterende zonnen
Donald Duck
Geen
Mazerunner

Muren van glas
Sneeuwval - Tess Gerritsen
/
Geen idee
Geen
Dagen van gras, Philip Huff
Nachtzwemmen
Jack Reacher
Deel 1-3 Harry Potter
Dracula - Bram Stoker
Ik lees niet
Elon Musk
GoT
Het Beest
Huidpijn van Saskia Noort
Data Visualisation: A Handbook for Data Driven Design
De Bijbel
memoirs of a geisha
wolf
Geen
-
Harry Potter
Lucifer, Connie Palmen
geen
-
Milk and Honey
Donald Duck
Lion King
i think therefore i play
The Hungergames
How to win friends & influence people
Harry Potter Reeks
The hunger games
harry potter
Harry Potter
De Afperser
Harry potter
Geen
Geen
Hungergames
Andy kirk data visualisatie
Vrouwen die charlie haten
Refactoring UI
It
Harry Potter
The invisible man


The hobbit
Harry potter

-
De mooiste vis van de zee
A Clockwork Orange
Lord of the Rings
Brief Answers to the Big Questions
-
Game of Thrones
Heb ik niet
Laten we het er maar niet over hebben
The last wish
Origin
`

const filterOptions = [
    ["deel 1-3 ", ""],
    ["-", ""],
    ["/", ""],
    ["geen idee", ""],
    ["geen", ""],
    ["heb ik niet", ""],
    ["ik lees niet", ""],
    ["lees niet", ""],
    ["laten we het er maar niet over hebben", ""],
    [" reeks", ""],
    [" &", ","],
    [", ", " by "],

]

const library = [
    ["game of thrones", "got", "A game of Thrones"],
    ["hungergames", "hunger games",  "The hunger games"],
    ["data visualisation", "data visualisatie", "andy kirk", "Data visualisation"]
]

let surveyArray = utils.splitString(surveyString, "\n")
let cleanedArray = utils.cleanArray(surveyArray, filterOptions, library)

console.log(surveyArray)
console.log(cleanedArray)