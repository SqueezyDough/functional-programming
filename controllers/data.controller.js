const fetch = require("node-fetch");
const utils = require("./utils.controller");

const dataController = {};

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

    SELECT  ?title
            ?mainCategory
            ?countryLabel
            ?lat
            ?long
            ?type

    WHERE {
      VALUES ?type {${typesString}}

      ?cho edm:isRelatedTo ?cat .
      ?cho dc:type ?type .
      ?cho dct:spatial ?place .

      ?place skos:exactMatch/wgs84:lat ?lat .
      ?place skos:exactMatch/wgs84:long ?long .
      ?place skos:exactMatch/gn:parentCountry ?country .

      ?cho dc:title ?title .
      ?cat skos:prefLabel ?mainCategory .
      ?country gn:name ?countryLabel .
    }
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