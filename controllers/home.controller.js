const homeController = {};

homeController.index = function(req, res)  {
    res.render("home", {
        title : "home",
    });
}

module.exports = homeController;