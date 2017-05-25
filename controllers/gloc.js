var Gloc = require('../models/user').GeoLoc;

module.exports = {

    getCountries: function (req, res) {
        console.log('Gloc.getCountries');

        Gloc.find({ type: 0 }, function (err, data) {
            res.send(data);
        })
    },

    getStates: function (req, res) {
        console.log('Gloc.getStates');

        var country = req.params.parent;

        Gloc.find({ parent: country }, function (err, data) {
            res.send(data);
        })
    },

    getCities: function (req, res) {
        console.log('Gloc.getCities');

        var state = req.params.parent;

        Gloc.find({ parent: state }, function (err, data) {
            res.send(data);
        })
    },

    getAreas: function (req, res) {
        console.log('Gloc.getAreas');

        var city = req.params.parent;

        Gloc.find({ parent: city }, function (err, data) {
            res.send(data);
        })
    }
}
