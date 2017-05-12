var User = require('../models/user').User;
var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {

    register: function (req, res) {
        User.findOne({
            name: req.body.name
        }, function (err, existingUser) {

            if (existingUser)
                return res.status(409).send({
                    message: 'Use name is already registered'
                });

            var user = new User(req.body);

            user.save(function (err, result) {
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    token: createToken(result)
                });
            })
        });
    },

    login: function (req, res) {
        User.findOne({
            name: req.body.name
        }, function (err, user) {
            if (!user)
                return res.status(401).send({
                    message: 'Name or password invalid'
                });

            if (req.body.pwd == user.pwd) {

                console.log(req.body, user.pwd);

                res.send({
                    token: createToken(user)
                });
            } else {
                return res.status(401).send({
                    message: 'Invalid name or password'
                });
            }
        });
    },

    delete: function(req, res) {
        User.findOne({
            id: req.body.id
        }, function(err, user) {
            if (!user)
                return res.status(401).send({ message: 'User not found' });

            //delete user
            User.remove();

            res.status(200).send({
                message: 'User deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('user.getAll');
        User.find(function (err, data) {
            res.send(data);
        })
    },

    getOne: function (req, res) {
        console.log('user.getOne');
        var id = req.params.id;

        User.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'User not found' });

            res.send(data);

        });
    }
}

function createToken(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };

    return jwt.encode(payload, 'secret');

}
