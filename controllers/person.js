var Person = require('../models/user').Person;
var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {

    add: function (req, res) {
        console.log('person.add');

        var person = new Person(req.body);

        person.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                person: data
            });
        });
    },

    update: function (req, res) {
        console.log('person.update');

        Person.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Person not found' });

            data.name = req.body.name;
            data.email = req.body.email;
            data.phone = req.body.phone;
            data.facebook = req.body.facebook;
            data.skype = req.body.skype;
            data.twitter = req.body.twitter;
            data.lovGovtNo = req.body.lovGovtNo;
            data.govtNo = req.body.govtNo;
            data.photo = req.body.photo;
            data.dateBirth = req.body.dateBirth;
            data.dateAnniversary= req.body.dateAnniversary;
            data.maritalStatus = req.body.maritalStatus;
            data.gender = req.body.gender;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    person: data
                });
            });
        });
    },

    delete: function(req, res) {
        console.log('person.delete');

        var id = req.params.id;

        Person.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Person deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('person.getAll');

        Person.find(function (err, data) {
            res.send(data);
        })
    },

    getOne: function (req, res) {
        console.log('person.getOne');

        var id = req.params.id;

        Person.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Person not found' });

            res.send(data);

        });
    }
}
