//var models = require('../models/user');
//var Lov = models.Lov;

var Lov = require('../models/user').Lov;

var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {

    add: function (req, res) {
        console.log('Lov.add');
        console.log(req.body);

        var lov = new Lov(req.body);

        lov.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                user: data
            });
        })
    },

    delete: function(req, res) {
        console.log('Lov.delete');
        console.log(req.body);

        Lov.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'LOV not found' });

            //delete lov
            data.remove();

            res.status(200).send({
                message: 'Lov deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('Lov.getAll');

        Lov.find(function (err, data) {
            res.send(data);
        })
    },

    getOne: function (req, res) {
        console.log('Lov.getOne');

        var id = req.params.id;

        Lov.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Lov not found' });

            res.send(data);

        });
    }
}
