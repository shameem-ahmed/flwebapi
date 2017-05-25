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

    //type = 0-Desig, 1-Dept, 2-OfficeType, 3-GovtCode, 4-UserType, 5-OrderType, 6-OrderStatus, 7-POInternalDetailType, 8-JCStatus, 9-ContactType, 10-PersonGovtNo
    getLov: function (req, res) {
        console.log('Lov.getLov');
        var type = req.params.type;

        Lov.find({ type: type }, function (err, data) {
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
