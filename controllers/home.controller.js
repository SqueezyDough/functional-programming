const dataController = require("./data.controller");

const homeController = {};

homeController.renderGraph = function(req, res) {
    const types = ["kleding", "sieraden"];

    dataController.fetchTypes(types).then( (data) => {
        let items = data.map (item => {
            const obj = {
                type : item.type.value,
                country : item.countryLabel.value,
                lat : item.lat.value,
                long : item.long.value
            }

            return obj;
        })

        console.log(items)

        res.render("home", {
            title : "home",
            data: items
        });
    });
}

module.exports = homeController;