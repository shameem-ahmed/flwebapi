var jwt = require('jwt-simple');
var moment = require('moment');

var User = require('../models/user').User;
var UserAccess = require('../models/user').UserAccess;

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
        console.log('user.login');
        console.log(req.body);

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
        User.find().populate({ path: 'person', model: 'Person' }).exec(function (err, data) {

            if (!data)
                return res.status(401).send({ message: 'Users not found' });

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
    },

    getLogin: function (req, res) {
        console.log('user.getLogin');
        var id = req.user;

        console.log(id);

        User.findById(id).populate({ path: 'person', model: 'Person' }).exec(function(err, data) {

            if (!data)
                return res.status(401).send({ message: 'User not found' });

            res.send(data);

        });
    },

    getAccess: function (req, res) {
        console.log('user.getAccess');
        var id = req.user;

        console.log(id);

        var aAccess = [];

        User.findById(id, function(err, user) {

            if (!user)
                return res.status(401).send({ message: 'User not found' });

            if (user.isAdmin) {

                aAccess.push({ pageCode: "DASH", pageTitle: "Dashboard", pageIcon: "fa fa-desktop", pageFile: "index.html", pageIndex: 1, access: "111111111" });
                aAccess.push({ pageCode: "POOR", pageTitle: "Purchase Orders", pageIcon: "fa fa-file-text-o", pageFile: "prd-po.html", pageIndex: 2, access: "111111111" });
                aAccess.push({ pageCode: "BUYR", pageTitle: "Buyer", pageIcon: "fa fa-user", pageFile: "prd-cust.html", pageIndex: 3, access: "111111111" });
                aAccess.push({ pageCode: "MSDS", pageTitle: "MDS", pageIcon: "fa fa-th-large", pageFile: "prd-mds.html", pageIndex: 4, access: "111111111" });
                aAccess.push({ pageCode: "JBCD", pageTitle: "Job Card", pageIcon: "fa fa-check-square-o", pageFile: "jc-jc.html", pageIndex: 5, access: "111111111" });
                aAccess.push({ pageCode: "STYL", pageTitle: "Style", pageIcon: "fa fa-heart", pageFile: "sty-style.html", pageIndex: 6, access: "111111111" });
                aAccess.push({ pageCode: "LTOR", pageTitle: "Leather Order", pageIcon: "fa fa-file-text-o", pageFile: "lth-lo.html", pageIndex: 7, access: "111111111" });
                aAccess.push({ pageCode: "COMP", pageTitle: "Company", pageIcon: "fa fa-building", pageFile: "com-com.html", pageIndex: 8, access: "111111111" });
                aAccess.push({ pageCode: "SUPP", pageTitle: "Supplier", pageIcon: "fa fa-user", pageFile: "lth-supp.html", pageIndex: 9, access: "111111111" });
                aAccess.push({ pageCode: "LOVL", pageTitle: "LOV", pageIcon: "fa fa-caret-square-o-down", pageFile: "com-lov.html", pageIndex: 10, access: "111111111" });
                aAccess.push({ pageCode: "USER", pageTitle: "Users", pageIcon: "fa fa-user", pageFile: "com-user.html", pageIndex: 11, access: "111111111" });

                res.send(aAccess);

            }
            else {
                UserAccess.find({ user: id }, function(err, data) {
                    if (!data)
                        return res.status(401).send({ message: 'UserAccess not found' });

                        data = data.map(function(item) {

                            var pageTitle = '';
                            var pageIcon = '';
                            var pageFile = '';
                            var pageIndex = 0;

                            if (item.pageCode == "DASH") {
                                pageTitle = "Dashboard";
                                pageIcon = "fa fa-desktop";
                                pageFile = "index.html";
                                pageIndex = 1;

                            }
                            else if (item.pageCode == "STYL") {
                                pageTitle = "Style";
                                pageIcon = "fa fa-heart";
                                pageFile = "sty-style.html";
                                pageIndex = 6;


                            }
                            else if (item.pageCode == "USER") {
                                pageTitle = "Users";
                                pageIcon = "fa fa-user";
                                pageFile = "com-user.html";
                                pageIndex = 11;


                            }
                            else if (item.pageCode == "POOR") {
                                pageTitle = "Purchase Orders";
                                pageIcon = "fa fa-file-text-o";
                                pageFile = "prd-po.html";
                                pageIndex = 2;

                            }
                            else if (item.pageCode == "LTOR") {
                                pageTitle = "Leather Order";
                                pageIcon = "fa fa-file-text-o";
                                pageFile = "lth-lo.html";
                                pageIndex = 7;

                            }
                            else if (item.pageCode == "MSDS") {
                                pageTitle = "MDS";
                                pageIcon = "fa fa-th-large";
                                pageFile = "prd-mds.html";
                                pageIndex = 4;

                            }
                            else if (item.pageCode == "COMP") {
                                pageTitle = "Company";
                                pageIcon = "fa fa-building";
                                pageFile = "com-com.html";
                                pageIndex = 9;

                            }
                            else if (item.pageCode == "JBCD") {
                                pageTitle = "Job Card";
                                pageIcon = "fa fa-check-square-o";
                                pageFile = "jc-jc.html";
                                pageIndex = 5;

                            }
                            else if (item.pageCode == "LOVL") {
                                pageTitle = "LOV";
                                pageIcon = "fa fa-caret-square-o-down";
                                pageFile = "com-lov.html";
                                pageIndex = 10;

                            }
                            else if (item.pageCode == "BUYR") {
                                pageTitle = "Buyer";
                                pageIcon = "fa fa-user";
                                pageFile = "prd-cust.html";
                                pageIndex = 3;

                            }
                            else if (item.pageCode == "SUPP") {
                                pageTitle = "Supplier";
                                pageIcon = "fa fa-user";
                                pageFile = "lth-supp.html";
                                pageIndex = 9;

                            }

                            var iAccess = { pageCode: item.pageCode, pageTitle: pageTitle, pageIcon: pageIcon, pageFile: pageFile, pageIndex: pageIndex, access: item.accessCode };

                            aAccess.push(iAccess);

                            return item;
                        });
                    res.send(aAccess);
                });
            }
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
