var Customer = require('../models/customer').Customer;

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

        Customer.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Customer not found' });

            data.name = req.body.name;
            data.code = req.body.code;

            data.save(function(err, data){
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

    delete: function(req, res) {
        console.log('customer.delete');

        var id = req.params.id;

        Customer.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Customer deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('customer.getAll');

        Customer.find(function (err, data) {
            res.send(data);
        })
    },

    getOne: function (req, res) {
        console.log('customer.getOne');

        var id = req.params.id;

        Customer.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Customer not found' });

            res.send(data);

        });
    }
}
