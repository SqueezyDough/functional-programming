const fetch = require("node-fetch");
const utils = require("./utils.controller")

const dataController = {};

// fetch the data for the diagram
dataController.fetchData = function(req, res) {
    //maskers: termmaster13435
    //foto's: termmaster1397
    //kleding: termmaster13527

    let uri = "termmaster13527"

    getDataSet(uri).then( (data) => {
        let items = data.map (item => {
            // edited function from https://beta.vizhub.com/Razpudding/2e039bf6e39a421180741285a8f735a3?edit=files&file=index.js

            let obj = {}
            Object.entries(item)
                .forEach(([key, propValue]) => {
                    if (utils.isStringANumber(propValue.value)) {
                        obj.Amount = propValue.value
                    } else {
                        obj.Name = propValue.value
                    }
            });

            return obj;

            // end edit
        })

        res.write(JSON.stringify(items) );
        res.end();
    })
}

// definne query and get data
function getDataSet (uri) {
    const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-34/sparql";

    const theSaurusUrl = `<https://hdl.handle.net/20.500.11840/${uri}>`;

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
      ${theSaurusUrl} skos:narrower* ?type .
      ?cho edm:object ?type .

      ?cho dct:spatial ?place . # obj place
      ?place skos:exactMatch/gn:parentCountry ?country .
      ?country gn:name ?countryLabel .

    } GROUP BY ?country ?countryLabel
    ORDER BY DESC(?choCount)
    `

    return runQuery(url, query);
}

// run the query
function runQuery(url, query) {
    return fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
    .then(res => res.json())
    .then(json => {
        return json.results.bindings;
    });
}

module.exports = dataController;