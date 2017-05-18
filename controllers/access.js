var Access = require('../models/user').UserAccess;
var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {

    add: function (req, res) {
        console.log('access.add');

        var access = new Access(req.body);

        access.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                access: data
            });
        });
    },

    update: function (req, res) {
        console.log('access.update');

        Access.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Access not found' });

            //data.pageCode = req.body.pageCode;
            data.accessCode = req.body.accessCode;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    access: data
                });
            });
        });
    },

    updateMulti: function (req, res) {
        console.log('access.updateMultiple');

        console.log("accessCode:");
        console.log(req.body.accessCode);

        if (req.body.accessCode.length > 0) {

            req.body.accessCode.forEach(function(item){

                Access.findById(item.id, function(err, data) {
                    if (!data)
                        return res.status(401).send({ message: 'Access not found' });

                    //data.pageCode = req.body.pageCode;
                    data.accessCode = item.accessCode;

                    data.save(function(err, data){
                        if (err) {
                            res.status(500).send({
                                message: err.message
                            });
                        }
                    });
                });
            });

            res.status(200).send({
                message: 'Access updated successfully.'
            });
        }
    },

    delete: function(req, res) {
        console.log('access.delete');

        var id = req.params.id;

        Access.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Access deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('access.getAll');

        Access.find(function (err, data) {
            res.send(data);
        })
    },

    getAccess: function (req, res) {
        console.log('access.getAccess');
        var userId = req.params.id;

        Access.find({ user: userId }, function (err, data) {
            if (!data)
                return res.status(401).send({ message: 'UserAccess not found' });

            var aAccess = [];

            data = data.map(function(item) {

                var iAccess = {
                    id: item._id,
                    user: item.user,
                    pageCode: item.pageCode,
                    pageTitle: item.pageCode,
                    pageIndex: 0,
                    isView: false,
                    isPrint: false,
                    isFilter: false,
                    isAdd: false,
                    isEdit: false,
                    isDelete: false,
                    isCompare: false,
                    isReset: false,
                    isSubmit: false
                };

                if (item.pageCode == "DASH") {
                    iAccess.pageTitle = "Dashboard";
                    iAccess.pageIndex = 1;
                }
                else if (item.pageCode == "POOR") {
                    iAccess.pageTitle = "Purchase Order";
                    iAccess.pageIndex = 2;
                }
                else if (item.pageCode == "BUYR") {
                    iAccess.pageTitle = "Buyer";
                    iAccess.pageIndex = 3;
                }
                else if (item.pageCode == "MSDS") {
                    iAccess.pageTitle = "MDS";
                    iAccess.pageIndex = 4;
                }
                else if (item.pageCode == "JBCD") {
                    iAccess.pageTitle = "Job Card";
                    iAccess.pageIndex = 5;
                }
                else if (item.pageCode == "STYL") {
                    iAccess.pageTitle = "Style";
                    iAccess.pageIndex = 6;
                }
                else if (item.pageCode == "LTOR") {
                    iAccess.pageTitle = "Leather Order";
                    iAccess.pageIndex = 7;
                }
                else if (item.pageCode == "COMP") {
                    iAccess.pageTitle = "Company";
                    iAccess.pageIndex = 8;
                }
                else if (item.pageCode == "SUPP") {
                    iAccess.pageTitle = "Supplier";
                    iAccess.pageIndex = 9;
                }
                else if (item.pageCode == "LOVL") {
                    iAccess.pageTitle = "LOV";
                    iAccess.pageIndex = 10;
                }
                else if (item.pageCode == "USER") {
                    iAccess.pageTitle = "User";
                    iAccess.pageIndex = 11;
                }

                var aAccessCode = item.accessCode.split("");

                if (aAccessCode.length >= 9) {
                    iAccess.isView = (aAccessCode[0] == "1");
                    iAccess.isPrint = (aAccessCode[1] == "1");
                    iAccess.isFilter = (aAccessCode[2] == "1");
                    iAccess.isAdd = (aAccessCode[3] == "1");
                    iAccess.isEdit = (aAccessCode[4] == "1");
                    iAccess.isDelete = (aAccessCode[5] == "1");
                    iAccess.isCompare = (aAccessCode[6] == "1");
                    iAccess.isReset = (aAccessCode[7] == "1");
                    iAccess.isSubmit = (aAccessCode[8] == "1");
                }

                aAccess.push(iAccess);

                return item;
            });
            res.send(aAccess);
        })
    },

    getOne: function (req, res) {
        console.log('access.getOne');

        var id = req.params.id;

        Access.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Access not found' });

            res.send(data);

        });
    }
}
