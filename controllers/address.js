var Address = require('../models/user').Address;

module.exports = {

    add: function (req, res) {
        console.log('address.add');

        var address = new Address(req.body);

        address.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                address: data
            });
        });
    },

    update: function (req, res) {
        console.log('address.update');

        Address.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Address not found' });

            data.address1 = req.body.address1;
            data.address2 = req.body.address2;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    address: data
                });
            });
        });
    },

    delete: function(req, res) {
        console.log('address.delete');

        var id = req.params.id;

        Address.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Address deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('address.getAll');

        Address.find(function (err, data) {
            res.send(data);
        })
    },

    getOne: function (req, res) {
        console.log('address.getOne');

        var id = req.params.id;

        Address.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Address not found' });

            res.send(data);

        });
    }
}
