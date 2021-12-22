const List = require('../models/list');
const Cocktail = require('../models/cocktail');

module.exports = {
    index,
    create,
    addToList,
    removeFromList,
};

function addToList(req, res) {
    List.findById(req.params.id, function (err, list) {
        list.cocktails.push(req.body.cocktailId);
        list.save(function(err) {
            if (err) {
                console.log(err);
                return res.redirect('/lists');
            }
            res.redirect('/lists');
        });
    });
}


function index(req, res) {
    List.find({user: req.user._id}).populate('cocktails').exec(function (err, lists) {
        Cocktail.find({}, function(err, cocktails) {
            res.render('lists/index', {
                lists, cocktails
            });
        });
    });
}

function create(req, res) {
    req.body.user = req.user._id;
    const list = new List(req.body);
    list.save(function (err) {
        if (err) {
            console.log(err);
            return res.redirect('/lists');
        }
        res.redirect('/lists');
    });
}

function removeFromList(req, res) {
    List.findById(req.params.id).populate('cocktails').exec(function (err, list){
        list.cocktails.pull(req.params.cid);
        list.save(function (err){
            if (err) {
                console.log(err);
                return res.redirect('/lists');
            }
            res.redirect('/lists');
        });
    });
}