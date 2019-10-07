require("../data/friends.js");


module.exports = (app) => {
    
    app.get("/api/friends", (req, res) => {
        return res.json(friends.data);
    });



    app.post("/api/friends", (req, res) => {

        var newFriend = req.body;

        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        var bff = friends.data;

        bff.push(newFriend);

        res.json(newFriend);

    });

}

