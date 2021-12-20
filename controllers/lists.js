const List = require('../models/list');
const Cocktail = require('../models/cocktail');

module.exports = {
    index,
    create,
    addToList,
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
    List.find({}).populate('cocktails').exec(function (err, lists) {
        Cocktail.find({}, function(err, cocktails) {
            res.render('lists/index', {
                lists, cocktails
            });
        });
    });
}

function create(req, res) {
    const list = new List(req.body);
    list.save(function (err) {
        if (err) {
            console.log(err);
            return res.redirect('/lists');
        }
        res.redirect('/lists');
    });
}