var friends = require("../data/friends.js");

function routeAPI() {
    app.get("/api/friends", (req, res) => {
        return res.json(friends.data);
    });
}

function addFriend() {
    app.post("/api/friends", (req, res) => {

        var newFriend = req.body;

        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        var bff = friends.data;

        bff.push(newFriend);

        res.json(newFriend);

    });
}

module.exports = {
    routeAPI,
    addFriend
}