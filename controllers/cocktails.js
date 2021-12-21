const Cocktail = require("../models/cocktail");


module.exports = {
    index,
    show,
    new: newCocktail,
    create,
    delete: deleteCocktail,
};

function newCocktail(req, res) {
    res.render('cocktails/new', {
        title: 'Create Cocktail'
    });
}

function index(req, res) {
    Cocktail.find({}, function (err, cocktails) {
        res.render('cocktails/catalog', {
            title: 'My List',
            cocktails
        });
    });
}

function show(req, res) {
    Cocktail.findById(req.params.id, function (err, cocktail) {
        res.render('cocktails/show', {
            title: 'Cocktail Details',
            cocktail
        });
    });
}

function create(req, res) {
    console.log(req.body);
    const cocktail = new Cocktail(req.body);
    cocktail.save(function (err) {
        if (err) {
            console.log(err);
            return res.redirect('/cocktails/new');
        }
        res.redirect('/cocktails');
    });
}

function deleteCocktail(req, res) {
    Cocktail.deleteOne({ _id:req.params.id }, function(err, cocktail){
        res.redirect('/lists');
    });
}