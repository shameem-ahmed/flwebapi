var Company = require('../models/company').Company;

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

    getAll: function (req, res) {
        console.log('company.getAll');

        Company.find(function (err, data) {
            res.send(data);
        })
    },

    getOne: function (req, res) {
        console.log('company.getOne');

        var id = req.params.id;

        Company.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Company not found' });

            res.send(data);

        });
    }
}
