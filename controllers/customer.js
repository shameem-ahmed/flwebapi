var Customer = require('../models/customer').Customer;
var CustomerOffice = require('../models/customer').CustomerOffice;
var CustomerOfficePeople = require('../models/customer').CustomerOfficePeople;
var Person = require('../models/user').Person;

module.exports = {

    add: function (req, res) {
        console.log('customer.add');

        var customer = new Customer(req.body);

        customer.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                customer: data
            });
        });
    },

    update: function (req, res) {
        console.log('customer.update');

        Customer.findById(req.body.id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'Customer not found'
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
                    customer: data
                });
            });
        });
    },

    delete: function (req, res) {
        console.log('customer.delete');

        var id = req.params.id;

        Customer.findByIdAndRemove(id, function (err) {
            if (err)
                return res.status(500).send({
                    message: err.message
                });

            res.status(200).send({
                message: 'Customer deleted successfully.'
            });
        });
    },

    addOffice: function (req, res) {
        console.log('Customer.addOffice');

        var office = new CustomerOffice(req.body);

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
        console.log('Customer.updateOffice');

        CustomerOffice.findById(req.body.id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'CustomerOffice not found'
                });

            data.title = req.body.title;
            data.email = req.body.email;

            data.save(function (err, data) {
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
        console.log('customer.deleteOffice');

        var id = req.params.id;

        CustomerOffice.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'CustomerOffice deleted successfully.'

            });
        });
    },

    addPerson: function (req, res) {
        console.log('customer.addPerson');

        var person = new CustomerOfficePeople(req.body);

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
        console.log('customer.updatePerson');

        CustomerOfficePeople.findById(req.body.id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'CustomerOfficePeople not found'
                });

            data.name = req.body.name;

            data.save(function (err, data) {
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

    deletePerson: function (req, res) {
        console.log('customer.deletePerson');

        var id = req.params.id;

        CustomerOfficePeople.findByIdAndRemove(id, function (err) {
            if (err)
                return res.status(500).send({
                    message: err.message
                });
            res.status(200).send({
                message: 'CustomerOfficePeople deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('customer.getAll');

        Customer.find(function (err, data) {
            res.send(data);
        });
    },

    getOne: function (req, res) {
        console.log('customer.getOne');

        var id = req.params.id;

        Customer.findById(id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'Customer not found'
                });

            res.send(data);

        });
    },

    getAllOffice: function (req, res) {
        console.log('Customer.getAllOffice');

        var cusId = req.params.cusId;

        CustomerOffice.find({
            customer: cusId
        }, function (err, data) {
            res.send(data);
        });
    },

    getAllPerson: function (req, res) {
        console.log('Customer.getAllPerson');

        var offId = req.params.offId;

        CustomerOfficePeople.find({
            customerOffice: offId
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
    }
}
