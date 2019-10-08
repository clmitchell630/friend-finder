var friends = require("../data/friends.js");


module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });



    app.post("/api/friends", (req, res) => {

        var newFriend = req.body;

        // console.log(newFriend);

        var minDif;
        var myFriend;
        
        for (var f in friends) {
            // f = friends[k]\
            var difference = 0;
        
            for (var i = 0; i < friends[f].scores.length; i++) {
                difference += Math.abs(friends[f].scores[i] - newFriend.scores[i]);
            }
        
            if(minDif === undefined || difference < minDif) {
                minDif = difference;
                myFriend = friends[f];
            }
            
        }

        friends.push(newFriend);
        res.send(myFriend);
    });

}

