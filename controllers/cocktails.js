const cocktail = require("../models/cocktail");
const Cocktail = require("../models/cocktail");

module.exports = {
    index,
    show,
    new: newCocktail,
    create,
    delete: deleteCocktail,
    edit: editCocktail,
    update,
};

function update(req, res, next) {
    Cocktail.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
        req.body,
        {new: true}, function(err, cocktail) {
            if (err || !cocktail) return res.redirect('/lists');
            res.redirect(`/cocktails/${cocktail._id}`);
        }
    );
}

function editCocktail(req, res) {
    Cocktail.findById(req.params.id, function (err, cocktail){
        res.render('cocktails/edit', {
            cocktail
        });
    });
}

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
    req.body.user = req.user._id;
    const cocktail = new Cocktail(req.body);
    if (!cocktail.user.equals(req.user._id)) return res.redirect(`/cocktails/${cocktail._id}`);
    cocktail.save(function (err) {
        if (err) {
            console.log(err);
            return res.redirect('/cocktails/new');
        }
        res.redirect('/lists');
    });
}

function deleteCocktail(req, res) {
    cocktail.findById({_id: req.params.id}, function(err, cocktail) {
        if (!cocktail.user.equals(req.user._id)) return res.redirect(`/cocktails/${cocktail._id}`);
        cocktail.remove();
        res.redirect('/lists');
    });
}