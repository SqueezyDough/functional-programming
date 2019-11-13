const fetch = require("node-fetch");
const utils = require("./utils.controller");

const dataController = {};

dataController.fetchData = function(req, res) {
    const queryTypes = ["kleding"];

    dataController.fetchTypes(queryTypes).then( (data) => {
        let items = data.map (item => {
            const obj = {
                country : item.countryLabel.value,
                amount : item.choCount.value,
            }
            return obj;
        })

        res.write(JSON.stringify(items) );
        res.end();
    })
}

dataController.fetchTypes = function(types) {
    const typesString = createTypeString(types);

    const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-34/sparql"

    const query = `
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
    PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
    PREFIX gn: <http://www.geonames.org/ontology#>

    SELECT ?countryLabel
           (COUNT(?cho) AS ?choCount)
    WHERE {
      <https://hdl.handle.net/20.500.11840/termmaster13527> skos:narrower* ?type .
      ?cho edm:object ?type .

      ?cho dct:spatial ?place . # obj place
      ?place skos:exactMatch/gn:parentCountry ?country .
      ?country gn:name ?countryLabel .

    } GROUP BY ?country ?countryLabel
    ORDER BY DESC(?choCount)
    `

    return runQuery(url, query)
}

function runQuery(url, query) {
    return fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
    .then(res => res.json())
    .then(json => {
        return json.results.bindings;
    })
}

function createTypeString(types) {
    let string = "";

    types.forEach( type => {
        type = type.toLowerCase();

        string = string
               + `'${type}'`
               + `'${utils.capitaliseFirstCharacter(type)}'`
    });

    return string;
}

module.exports = dataController;