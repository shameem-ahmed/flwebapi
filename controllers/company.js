var Company = require('../models/company').Company;
var CompanyOffice = require('../models/company').CompanyOffice;
var CompanyOfficePeople = require('../models/company').CompanyOfficePeople;
<<<<<<< HEAD
var Person=require('../models/user').Person;
=======
var Person = require('../models/user').Person;
>>>>>>> flwebapi/master

module.exports = {

    add: function (req, res) {
        console.log('company.add');

        var company = new Company(req.body);

        company.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                company: data
            });
        });
    },

    update: function (req, res) {
        console.log('company.update');

        Company.findById(req.body.id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'Company not found'
                });

            data.name = req.body.name;
            data.code = req.body.code;

            data.save(function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    company: data
                });
            });
        });
    },

    delete: function (req, res) {
        console.log('company.delete');

        var id = req.params.id;

        Company.findByIdAndRemove(id, function (err) {
            if (err)
                return res.status(500).send({
                    message: err.message
                });

            res.status(200).send({
                message: 'Company deleted successfully.'
            });
        });
    },

    addOffice: function (req, res) {
        console.log('company.addOffice');

        var office = new CompanyOffice(req.body);

        office.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                office: data
            });
        });
    },

    updateOffice: function (req, res) {
        console.log('company.updateOffice');

<<<<<<< HEAD
        CompanyOffice.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'CompanyOffice not found' });
=======
        CompanyOffice.findById(req.body.id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'CompanyOffice not found'
                });
>>>>>>> flwebapi/master

            data.title = req.body.title;
            data.email = req.body.email;

<<<<<<< HEAD
            data.save(function(err, data){
=======
            data.save(function (err, data) {
>>>>>>> flwebapi/master
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    office: data
                });
            });
        });
    },

<<<<<<< HEAD
    deleteOffice: function(req, res) {
=======
    deleteOffice: function (req, res) {
>>>>>>> flwebapi/master
        console.log('company.deleteOffice');

        var id = req.params.id;

<<<<<<< HEAD
        CompanyOffice.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });
=======
        CompanyOffice.findByIdAndRemove(id, function (err) {
            if (err)
                return res.status(500).send({
                    message: err.message
                });
>>>>>>> flwebapi/master

            res.status(200).send({
                message: 'CompanyOffice deleted successfully.'
            });
        });
    },

    addPerson: function (req, res) {
        console.log('company.addPerson');

        var person = new CompanyOfficePeople(req.body);

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

    updatePerson: function (req, res) {
        console.log('company.updatePerson');

<<<<<<< HEAD
        CompanyOfficePeople.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'CompanyOfficePeople not found' });

            data.name = req.body.name;

            data.save(function(err, data){
=======
        CompanyOfficePeople.findById(req.body.id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'CompanyOfficePeople not found'
                });

            data.name = req.body.name;

            data.save(function (err, data) {
>>>>>>> flwebapi/master
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

<<<<<<< HEAD
    deletePerson: function(req, res) {
=======
    deletePerson: function (req, res) {
>>>>>>> flwebapi/master
        console.log('company.deletePerson');

        var id = req.params.id;

<<<<<<< HEAD
        CompanyOfficePeople.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });
=======
        CompanyOfficePeople.findByIdAndRemove(id, function (err) {
            if (err)
                return res.status(500).send({
                    message: err.message
                });
>>>>>>> flwebapi/master

            res.status(200).send({
                message: 'CompanyOfficePeople deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('company.getAll');

        Company.find(function (err, data) {
            res.send(data);
        });
    },

    getOne: function (req, res) {
        console.log('company.getOne');

        var id = req.params.id;

        Company.findById(id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'Company not found'
                });

            res.send(data);

        });
    },

    getAllOffice: function (req, res) {
        console.log('company.getAllOffice');

        var compId = req.params.compId;

<<<<<<< HEAD
        CompanyOffice.find({ company: compId }, function (err, data) {
=======
        CompanyOffice.find({
            company: compId
        }, function (err, data) {
>>>>>>> flwebapi/master
            res.send(data);
        })
    },

    getAllPerson: function (req, res) {
        console.log('company.getAllPerson');

        var offId = req.params.offId;
<<<<<<< HEAD

        CompanyOfficePeople.find({ companyOffice: offId }, function (err, data) {
            res.send(data);
        })
=======
      console.log("Mahesh");

        CompanyOfficePeople.find({
            companyOffice: offId
        }).populate({
            path: 'person',
            model: 'Person'
        }).populate({
            path: 'LovDesignation',
            model: 'Lov'
        }).exec(function (err, data) {
            console.log(data);
            res.send(data);

        });


>>>>>>> flwebapi/master
    }
}
