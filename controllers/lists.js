const List = require('../models/list');

module.exports = {
    index,
    create,
};

function index(req, res) {
    List.find({}, function (err, lists) {
        res.render('lists/index', {
            lists
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