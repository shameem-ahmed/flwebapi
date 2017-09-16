var PO          = require('../models/purchaseOrder').PurchaseOrder;
var POStyle     = require('../models/purchaseOrder').PurchaseOrderStyle;
var POStyleSize = require('../models/purchaseOrder').PurchaseOrderStyleSize;
var POInternal  = require('../models/purchaseOrder').PurchaseOrderInternalDetails;
var POMaterial  = require('../models/purchaseOrder').PurchaseOrderMaterial;

var Address  = require('../models/user').Address;


module.exports = {

    add: function (req, res) {
        console.log('po.add');

        //save address
        var address2 = {
            address1: req.body.shipAddress1,
            address2: req.body.shipAddress2,
            isActive: true,
            flag: 0
        }

        var address = new Address(address2);

        address.save(function(err, data){

            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            //save main po
            var po2 = {
                customer: req.body.customer,
                invoiceNo: req.body.invoiceNo,
                qty: req.body.qty,
                dateOrder: req.body.dateOrder,
                dateTarget: req.body.dateTarget,
                dateDelivery: req.body.dateDelivery,
                LovStatus: 0,
                LovType: req.body.orderType,
                shippingAddress: data._id
            };

            var po = new PO(po2);

            po.save(function (err, data2) {
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                //save po styles
                req.body.styles.forEach(function(item, index) {
                    var style2 = {
                        purchaseOrder: data2._id,
                        style: item.style,
                        qty: item.qty
                    };
                    var style = new POStyle(style2);

                    style.save(function(err, data3){
                        if (err) {
                            res.status(500).send({
                                message: err.message
                            });
                        }

                        //save po style sizes
                        item.sizes.forEach(function(item, index){
                            var size2 = {
                                purchaseOrderStyle: data3._id,
                                styleSize: item.size,
                                qty: item.qty
                            };
                            var size = new POStyleSize(size2);
                            size.save();
                        });
                    });
                });

                //save po internal details
                req.body.internals.forEach(function(item, index){
                    var intDet2 = {
                        purchaseOrder: data2._id,
                        LovDetailType: item.internal,
                        notes: item.notes,
                        priority: item.priority
                    };

                    var intDet = new POInternal(intDet2);
                    intDet.save();
                });

                //save po materials
                req.body.materials.forEach(function(item, index){
                    var mat2 = {
                        purchaseOrder: data2._id,
                        styleMaterial: item.material,
                        qty: item.qty,
                        notes: item.notes
                    };

                    var mat = new POMaterial(mat2);
                    mat.save();
                });

                res.status(200).send({
                    purchaseOrder: data
                });
            });
        });
    },

    update: function (req, res) {
        console.log('po.update');

        PO.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'PO not found' });

            data.customer = req.body.customer;
            data.invoiceNo = req.body.invoiceNo;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    po: data
                });
            });
        });
    },

    delete: function(req, res) {
        console.log('po.delete');

        var id = req.params.id;

        PO.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'PO deleted successfully.'
            });
        });
    },

    addStyle: function (req, res) {
        console.log('po.addStyle');

        var poStyle = new POStyle(req.body);

        poStyle.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                style: data
            });
        });
    },

    updateStyle: function (req, res) {
        console.log('po.updateStyle');

        POStyle.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'POStyle not found' });

            data.style = req.body.style;
            data.qty = req.body.qty;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    style: data
                });
            });
        });
    },

    deleteStyle: function(req, res) {
        console.log('po.deleteStyle');

        var id = req.params.id;

        POStyle.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'POStyle deleted successfully.'
            });
        });
    },

    addSize: function (req, res) {
        console.log('po.addPerson');

        var size = new POStyleSize(req.body);

        size.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                size: data
            });
        });
    },

    updateSize: function (req, res) {
        console.log('po.updateSize');

        POStyleSize.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'POStyleSize not found' });

            data.name = req.body.name;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    size: data
                });
            });
        });
    },

    deleteSize: function(req, res) {
        console.log('po.deleteSize');

        var id = req.params.id;

        POStyleSize.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'POStyleSize deleted successfully.'
            });
        });
    },

    addInternal: function (req, res) {
        console.log('po.addInternal');

        var internal = new POInternal(req.body);

        internal.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                internal: data
            });
        });
    },

    updateInternal: function (req, res) {
        console.log('po.updateInternal');

        POInternal.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'POInternal not found' });

            data.notes = req.body.notes;
            data.priority = req.body.priority;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    internal: data
                });
            });
        });
    },

    deleteInternal: function(req, res) {
        console.log('po.deleteInternal');

        var id = req.params.id;

        POInternal.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'POInternal deleted successfully.'
            });
        });
    },

    addMaterial: function (req, res) {
        console.log('po.addMaterial');

        var material = new POMaterial(req.body);

        material.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                material: data
            });
        });
    },

    updateMaterial: function (req, res) {
        console.log('po.updateMaterial');

        POMaterial.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'POMaterial not found' });

            data.qty = req.body.qty;
            data.notes = req.body.notes;

            data.save(function(err, data){
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }

                res.status(200).send({
                    material: data
                });
            });
        });
    },

    deleteMaterial: function(req, res) {
        console.log('po.deleteMaterial');

        var id = req.params.id;

        POMaterial.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'POMaterial deleted successfully.'
            });
        });
    },

    uploadPO(req, res) {

        if (!req.files) {
            console.log('po.uploadPO: No files were uploaded.');
            return res.status(400).send("No files were uploaded.");
        }

        var fileName = req.params.id + ".pdf";

        let pdf1 = req.files.pdf1;

        pdf1.mv("C:/FUELLS/Files/PO/" + filename, function(err){
            if (err) {
                console.log('po.uploadPO: Err saving file.');
                return res.status(500).send(err);
            }
        });
    },

    getAll: function (req, res) {
        console.log('po.getAll');

        PO.find().populate({ path: 'customer', model: 'Customer' })
            .populate({ path: 'LovType', model: 'Lov' })
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'POs not found' });

            res.send(data);
        });
    },

    getOne: function (req, res) {
        console.log('po.getOne');

        var id = req.params.id;

        PO.find({_id: id}).populate({ path: 'customer', model: 'Customer' })
            .populate({ path: 'LovType', model: 'Lov' })
            .populate({ path: 'shippingAddress', model: 'Address' })
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'PO not found' });

            res.send(data);
        });
    },

    getAllStyle: function (req, res) {
        console.log('po.getAllStyle');

        var id = req.params.id;

        POStyle.find({ purchaseOrder: id }).populate({ path: 'style', model: 'Style' })
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'PO Styles not found' });

            res.send(data);
        });


    },

    getOneStyle: function (req, res) {
        console.log('po.getOneStyle');

        var id = req.params.id;

        POStyle.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'POStyle not found' });

            res.send(data);

        });
    },

    getAllSize: function (req, res) {
        console.log('po.getAllSize');

        var id = req.params.id;

      /*  POStyleSize.find({ purchaseOrderStyle: id }, function (err, data) {
            res.send(data);
        });*/

        POStyleSize.find({ purchaseOrderStyle: id }).populate({ path: 'styleSize', model: 'Size' })
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'PO Style Sizes not found' });

            res.send(data);
        });

    },

    getOneSize: function (req, res) {
        console.log('po.getOneSize');

        var id = req.params.id;

        POStyleSize.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'POStyleSize not found' });

            res.send(data);

        });
    },

    getAllInternal: function (req, res) {
        console.log('po.getAllInternal');

        var id = req.params.id;

       /* POInternal.find({ purchaseOrder: id }, function (err, data) {
            res.send(data);
        });*/

        POInternal.find({ purchaseOrder: id }).populate({ path: 'LovDetailType', model: 'Lov' })
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'PO Internals not found' });

            res.send(data);
        });

    },

    getOneInternal: function (req, res) {
        console.log('po.getOneInternal');

        var id = req.params.id;

        POInternal.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'POInternal not found' });

            res.send(data);

        });
    },

    getAllMaterial: function (req, res) {
        console.log('po.getAllMaterial');

        var id = req.params.id;

      /*  POMaterial.find({ purchaseOrder: id }, function (err, data) {
            res.send(data);
        });*/

        POMaterial.find({ purchaseOrder: id }).populate({ path: 'styleMaterial', model: 'Material' })
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'PO Materials not found' });

            res.send(data);
        });

    },

    getOneMaterial: function (req, res) {
        console.log('po.getOneMaterial');

        var id = req.params.id;

        POMaterial.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'POMaterial not found' });

            res.send(data);

        });
    }

}
