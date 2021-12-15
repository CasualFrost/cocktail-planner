const Cocktail = require("../models/cocktail");
// const Performer = require("../models/performer");

module.exports = {
  index,
  show,
  new: newCocktail,
  create,
};

function newCocktail(req, res) {
    res.render('cocktails/new');
}

function index(req, res) {
    // Cocktail.find({}, function (err, cocktails) {
        res.render('cocktails/index');
    // });
}

function show(req, res) {
    Cocktail.findById(req.params.id, function (err, cocktail) {
        res.render('cocktails/show', { title: 'Cocktail Details', cocktail });
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