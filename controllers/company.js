var Company = require('../models/company').Company;
var CompanyOffice = require('../models/company').CompanyOffice;
var CompanyOfficePeople = require('../models/company').CompanyOfficePeople;
var Person=require('../models/user').Person;

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

        Company.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Company not found' });

            data.name = req.body.name;
            data.code = req.body.code;

            data.save(function(err, data){
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

    delete: function(req, res) {
        console.log('company.delete');

        var id = req.params.id;

        Company.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

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

        CompanyOffice.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'CompanyOffice not found' });

            data.title = req.body.title;
            data.email = req.body.email;

            data.save(function(err, data){
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

    deleteOffice: function(req, res) {
        console.log('company.deleteOffice');

        var id = req.params.id;

        CompanyOffice.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

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

        CompanyOfficePeople.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'CompanyOfficePeople not found' });

            data.name = req.body.name;

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

    deletePerson: function(req, res) {
        console.log('company.deletePerson');

        var id = req.params.id;

        CompanyOfficePeople.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

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

        Company.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Company not found' });

            res.send(data);

        });
    },

    getAllOffice: function (req, res) {
        console.log('company.getAllOffice');

        var compId = req.params.compId;

        CompanyOffice.find({ company: compId }, function (err, data) {
            res.send(data);
        })
    },

    getAllPerson: function (req, res) {
        console.log('company.getAllPerson');

        var offId = req.params.offId;

        CompanyOfficePeople.find({ companyOffice: offId }, function (err, data) {
            res.send(data);
        })
    }
}
