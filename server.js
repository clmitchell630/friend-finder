var express = require("express");
var path = require("path");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app, path);

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
