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

    add: function (req, res) {
        console.log('user.add');

        var user = new User(req.body);

        user.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                user: data
            });
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

        User.find().populate({ path: 'person', model: 'Person' }).populate({ path: 'address', model: 'Address' }).exec(function (err, data) {

            if (!data)
                return res.status(401).send({ message: 'Users not found' });

            res.send(data);
        });
    },

    getOne: function (req, res) {
        console.log('user.getOne');
        var id = req.params.id;

        User.findById(id, function(err, data) {

            if (!data)
                return res.status(401).send({ message: 'User not found' });

            User.populate(data, { path: 'person', model: 'Person' }, function(err, data2) {

                if (!data2)
                    return res.status(401).send({ message: 'User-Person not found' });

                User.populate(data2, { path: 'person.address', model: 'Address' }, function(err, data3) {

                    if (!data3)
                        return res.status(401).send({ message: 'User-Person-Address not found' });

                    console.log(data3);

                    res.send(data3);

                });
            });
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

                aAccess.push({ pageCode: "DASH", pageId: "liPageDashboard", pageTitle: "Dashboard", pageIcon: "fa fa-desktop", pageFile: "/home", pageIndex: 1, access: "111111111" });
                aAccess.push({ pageCode: "POOR", pageId: "liPagePO", pageTitle: "Purchase Orders", pageIcon: "fa fa-file-text-o", pageFile: "/home/po", pageIndex: 2, access: "111111111" });
                aAccess.push({ pageCode: "CUST", pageId: "liPageCustomer", pageTitle: "Customer", pageIcon: "fa fa-user", pageFile: "/home/customer", pageIndex: 3, access: "111111111" });
                aAccess.push({ pageCode: "MSDS", pageId: "liPageMDS", pageTitle: "MDS", pageIcon: "fa fa-th-large", pageFile: "/home/mds", pageIndex: 4, access: "111111111" });
                aAccess.push({ pageCode: "JBCD", pageId: "liPageJC", pageTitle: "Job Card", pageIcon: "fa fa-check-square-o", pageFile: "/home/jc", pageIndex: 5, access: "111111111" });
                aAccess.push({ pageCode: "STYL", pageId: "liPageStyle", pageTitle: "Style", pageIcon: "fa fa-heart", pageFile: "/home/style", pageIndex: 6, access: "111111111" });
                aAccess.push({ pageCode: "LTOR", pageId: "liPageLO", pageTitle: "Leather Order", pageIcon: "fa fa-file-text-o", pageFile: "/home/lo", pageIndex: 7, access: "111111111" });
                aAccess.push({ pageCode: "COMP", pageId: "liPageCompany", pageTitle: "Company", pageIcon: "fa fa-building", pageFile: "/home/company", pageIndex: 8, access: "111111111" });
                aAccess.push({ pageCode: "SUPP", pageId: "liPageSupplier", pageTitle: "Supplier", pageIcon: "fa fa-user", pageFile: "/home/supplier", pageIndex: 9, access: "111111111" });
                aAccess.push({ pageCode: "LOVL", pageId: "liPageLOV", pageTitle: "LOV", pageIcon: "fa fa-caret-square-o-down", pageFile: "/home/lov", pageIndex: 10, access: "111111111" });
                aAccess.push({ pageCode: "USER", pageId: "liPageUser", pageTitle: "Users", pageIcon: "fa fa-user", pageFile: "/home/user", pageIndex: 11, access: "111111111" });

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
                                pageId = "liPageDashboard";
                                pageIcon = "fa fa-desktop";
                                pageFile = "/home";
                                pageIndex = 1;

                            }
                            else if (item.pageCode == "STYL") {
                                pageTitle = "Style";
                                pageId = "liPageStyle";
                                pageIcon = "fa fa-heart";
                                pageFile = "/home/style";
                                pageIndex = 6;


                            }
                            else if (item.pageCode == "USER") {
                                pageTitle = "Users";
                                pageId = "liPageUser";
                                pageIcon = "fa fa-user";
                                pageFile = "/home/user";
                                pageIndex = 11;


                            }
                            else if (item.pageCode == "POOR") {
                                pageTitle = "Purchase Orders";
                                pageId = "liPagePO";
                                pageIcon = "fa fa-file-text-o";
                                pageFile = "/home/po";
                                pageIndex = 2;

                            }
                            else if (item.pageCode == "LTOR") {
                                pageTitle = "Leather Order";
                                pageId = "liPageLO";
                                pageIcon = "fa fa-file-text-o";
                                pageFile = "/home/lo";
                                pageIndex = 7;

                            }
                            else if (item.pageCode == "MSDS") {
                                pageTitle = "MDS";
                                pageID = "liPageMDS";
                                pageIcon = "fa fa-th-large";
                                pageFile = "/home/mds";
                                pageIndex = 4;

                            }
                            else if (item.pageCode == "COMP") {
                                pageTitle = "Company";
                                pageId = "liPageCompany";
                                pageIcon = "fa fa-building";
                                pageFile = "/home/company";
                                pageIndex = 9;

                            }
                            else if (item.pageCode == "JBCD") {
                                pageTitle = "Job Card";
                                pageID = "liPageJC";
                                pageIcon = "fa fa-check-square-o";
                                pageFile = "/home/jc";
                                pageIndex = 5;

                            }
                            else if (item.pageCode == "LOVL") {
                                pageTitle = "LOV";
                                pageId = "liPageLOV";
                                pageIcon = "fa fa-caret-square-o-down";
                                pageFile = "/home/loc";
                                pageIndex = 10;

                            }
                            else if (item.pageCode == "CUST") {
                                pageTitle = "Buyer";
                                pageId = "liPageBuyer";
                                pageIcon = "fa fa-user";
                                pageFile = "/home/customer";
                                pageIndex = 3;

                            }
                            else if (item.pageCode == "SUPP") {
                                pageTitle = "Supplier";
                                pageId = "liPageSupplier";
                                pageIcon = "fa fa-user";
                                pageFile = "/home/supplier";
                                pageIndex = 9;

                            }

                            var iAccess = { pageCode: item.pageCode, pageId: item.pageId, pageTitle: pageTitle, pageIcon: pageIcon, pageFile: pageFile, pageIndex: pageIndex, access: item.accessCode };

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
