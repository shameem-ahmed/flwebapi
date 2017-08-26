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
<<<<<<< HEAD
        console.log('customer.addOffice');
=======
        console.log('Customer.addOffice');
>>>>>>> flwebapi/master

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
<<<<<<< HEAD
        console.log('customer.updateOffice');

        CustomerOffice.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'CustomerOffice not found' });
=======
        console.log('Customer.updateOffice');

        CustomerOffice.findById(req.body.id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'CustomerOffice not found'
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
        console.log('customer.deleteOffice');

        var id = req.params.id;

        CustomerOffice.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'CustomerOffice deleted successfully.'
=======
    deleteOffice: function (req, res) {
        console.log('supplier.deleteOffice');

        var id = req.params.id;

        CustomerOffice.findByIdAndRemove(id, function (err) {
            if (err)
                return res.status(500).send({
                    message: err.message
                });

            res.status(200).send({
                message: 'SupplierOffice deleted successfully.'
>>>>>>> flwebapi/master
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

<<<<<<< HEAD
        CustomerOfficePeople.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'CustomerOfficePeople not found' });

            data.name = req.body.name;

            data.save(function(err, data){
=======
        CustomerOfficePeople.findById(req.body.id, function (err, data) {
            if (!data)
                return res.status(401).send({
                    message: 'CustomerOfficePeople not found'
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
        console.log('customer.deletePerson');

        var id = req.params.id;

<<<<<<< HEAD
        CustomerOfficePeople.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });
=======
        CustomerOfficePeople.findByIdAndRemove(id, function (err) {
            if (err)
                return res.status(500).send({
                    message: err.message
                });
>>>>>>> flwebapi/master

            res.status(200).send({
                message: 'CustomerOfficePeople deleted successfully.'
            });
        });
    },
<<<<<<< HEAD

=======
>>>>>>> flwebapi/master
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
<<<<<<< HEAD
        console.log('customer.getAllOffice');

        var compId = req.params.compId;

        CustomerOffice.find({ customer: compId }, function (err, data) {
            res.send(data);
        })
    },

    getAllPerson: function (req, res) {
        console.log('customer.getAllPerson');

        var offId = req.params.offId;

        CustomerOfficePeople.find({ customerOffice: offId }, function (err, data) {
            res.send(data);
        })
=======
        console.log('Customer.getAllOffice');

        var cusId = req.params.cusId;

        CustomerOffice.find({
            company: cusId
        }, function (err, data) {
            res.send(data);
        });
    },

    getAllPerson: function (req, res) {
        console.log('Customer.getAllPerson');

        var offId = req.params.offId;

        //        SupplierOfficePeople.find({ supplierOffice: offId }, function (err, data) {
        //            res.send(data);
        //        });

        CustomerOfficePeople.find({
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

        //        User.find().populate({ path: 'person', model: 'Person' }).populate({ path: 'address', model: 'Address' }).exec(function (err, data) {
        //
        //            if (!data)
        //                return res.status(401).send({ message: 'Users not found' });
        //
        //            res.send(data);
        //        });
>>>>>>> flwebapi/master
    }
}
