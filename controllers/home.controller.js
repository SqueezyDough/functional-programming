const homeController = {};

homeController.renderGraph = function(req, res) {
    res.render("home");
}

module.exports = homeController;