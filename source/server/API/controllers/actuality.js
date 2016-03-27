/**
 * Created by sylflo on 3/27/16.
 */
var Users = require('../models/users');


exports.getActuality = function (req, res) {

    //Need to find the recipe associated to the user follow
    console.log("current user = ", req.user);
    // Users.find({});

    return (res.status(200).json({message: 'Getting actualiity'}));
    //Need to find the recpie like by the group the user followed

};