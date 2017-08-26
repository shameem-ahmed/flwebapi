var PO = require('../models/purchaseOrder').PurchaseOrder;
var POStyle = require('../models/purchaseOrder').PurchaseOrderStyle;
var POStyleSize = require('../models/purchaseOrder').PurchaseOrderStyleSize;
var POInternal = require('../models/purchaseOrder').PurchaseOrderInternalDetails;
var POMaterial = require('../models/purchaseOrder').purchaseOrderMaterial;

module.exports = {

    add: function (req, res) {
        console.log('po.add');

        var po = new PO(req.body);

        po.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }

            res.status(200).send({
                purchaseOrder: data
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

    getAll: function (req, res) {
        console.log('po.getAll');

        PO.find(function (err, data) {
            res.send(data);
        });
    },

    getOne: function (req, res) {
        console.log('po.getOne');

        var id = req.params.id;

        PO.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'PO not found' });

            res.send(data);

        });
    },

    getAllStyle: function (req, res) {
        console.log('po.getAllStyle');

        var id = req.params.id;

        POStyle.find({ purchaseOrder: id }, function (err, data) {
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

        POStyleSize.find({ purchaseOrderStyle: id }, function (err, data) {
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

        POInternal.find({ purchaseOrder: id }, function (err, data) {
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

        POMaterial.find({ purchaseOrder: id }, function (err, data) {
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
