/**
 * Created by sylflo on 3/27/16.
 */
//var Users = require('../models/users');
var Recipes  = require('../models/recipes');

//Penser a classe du plus recent au plus ancien
exports.getActuality = function (req, res) {

    console.log("current user = ", req.user);
    var recipe_list = [];


    for (var i = 0; i < req.user.follow.length; i++) {
        //console.log("user that follows me ", req.user.follow[i].id_person);

        Recipes.find({author_id: req.user.follow[i].id_person}).sort('-date_posted').exec(function(err, recipe){
            if (err) {
                return (res.status(200).json({message: 'error when getting recipes user following'}));
            }

            else {
                recipe_list.push(recipe);
                console.log("REcipe list = ", recipe_list);
                return  res.status(200).json({message: 'Getting actualiity', recipe_list: recipe_list});
            }
        });

    }





    //return (res.status(200).json({message: 'Getting actualiity'}));
    //Need to find the recpie like by the group the user followed

};