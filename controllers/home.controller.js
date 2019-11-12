const homeController = {};

homeController.renderGraph = function(req, res) {
    res.render("home", {
        title : "home"
    });
}

module.exports = homeController;