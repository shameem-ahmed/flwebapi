var Supplier = require('../models/supplier').Supplier;
var SupplierOffice = require('../models/supplier').SupplierOffice;
var SupplierOfficePeople = require('../models/supplier').SupplierOfficePeople;
var Person=require('../models/user').Person;

module.exports = {

    add: function (req, res) {
        console.log('supplier.add');

        var supplier = new Supplier(req.body);

        supplier.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                supplier: data
            });
        });
    },

    update: function (req, res) {
        console.log('supplier.update');

        Supplier.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Supplier not found' });

            data.name = req.body.name;
            data.code = req.body.code;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    supplier: data
                });
            });
        });
    },

    delete: function(req, res) {
        console.log('supplier.delete');

        var id = req.params.id;

        Supplier.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Supplier deleted successfully.'
            });
        });
    },

    addOffice: function (req, res) {
        console.log('supplier.addOffice');

        var office = new SupplierOffice(req.body);

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
        console.log('supplier.updateOffice');

        SupplierOffice.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'SupplierOffice not found' });

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
        console.log('supplier.deleteOffice');

        var id = req.params.id;

        SupplierOffice.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'SupplierOffice deleted successfully.'
            });
        });
    },

    addPerson: function (req, res) {
        console.log('supplier.addPerson');

        var person = new SupplierOfficePeople(req.body);

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
        console.log('supplier.updatePerson');

        SupplierOfficePeople.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'SupplierOfficePeople not found' });

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
        console.log('supplier.deletePerson');

        var id = req.params.id;

        SupplierOfficePeople.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'SupplierOfficePeople deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('supplier.getAll');

        Supplier.find(function (err, data) {
            res.send(data);
        });
    },

    getOne: function (req, res) {
        console.log('supplier.getOne');

        var id = req.params.id;

        Supplier.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Supplier not found' });

            res.send(data);

        });
    },

    getAllOffice: function (req, res) {
        console.log('supplier.getAllOffice');

        var suppId = req.params.suppId;

        SupplierOffice.find({ supplier: suppId }, function (err, data) {
            res.send(data);
        });
    },

    getAllPerson: function (req, res) {
        console.log('supplier.getAllPerson');

        var offId = req.params.offId;

//        SupplierOfficePeople.find({ supplierOffice: offId }, function (err, data) {
//            res.send(data);
//        });

        SupplierOfficePeople.find({ supplierOffice: offId }).populate({ path: 'person', model: 'Person' }).exec(function(err, data) {

            res.send(data);

        });

//        User.find().populate({ path: 'person', model: 'Person' }).populate({ path: 'address', model: 'Address' }).exec(function (err, data) {
//
//            if (!data)
//                return res.status(401).send({ message: 'Users not found' });
//
//            res.send(data);
//        });
    }
}
