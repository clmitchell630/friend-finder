
function routes(route){
    switch (route) {
        case "/survey":
            return app.get("/survey", (req, res) => {
                res.sendFile(path.join(__dirname, "../public/survey.html"));
            });
        default:
            return app.get("/", (req, res) => {
                res.sendFile(path.join(__dirname, "../public/home.html"));
            });
    }
}

module.exports = routes(route);
