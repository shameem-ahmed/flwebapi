var Style = require('../models/style').Style;
var Material = require('../models/style').Material;
var Leather = require('../models/style').Leather;
var Color = require('../models/style').Color;
var Size = require('../models/style').Size;

module.exports = {

    add: function (req, res) {
        console.log('style.add');

        var style = new Style(req.body);

        style.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }
            //console.log(data);

            res.status(200).send({
                style: data
            });
        });
    },

    update: function (req, res) {
        console.log('style.update');

        Style.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Style not found' });

            data.title = req.body.title;

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

    delete: function(req, res) {
        console.log('style.delete');

        var id = req.params.id;

        Style.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Style deleted successfully.'
            });
        });
    },

    addSize: function (req, res) {
        console.log('style.addSize');

        var size = new Size(req.body);

        size.save(function (err, data) {
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

    updateSize: function (req, res) {
        console.log('style.updateSize');

        Size.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Size not found' });

            data.title = req.body.title;

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

    deleteSize: function(req, res) {
        console.log('style.deleteSize');

        var id = req.params.id;

        Color.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Size deleted successfully.'
            });
        });
    },

    addColor: function (req, res) {
        console.log('style.addColor');

        var color = new Color(req.body);

        color.save(function (err, data) {
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

    updateColor: function (req, res) {
        console.log('style.updateColor');

        Color.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Color not found' });

            data.title = req.body.title;

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

    deleteColor: function(req, res) {
        console.log('style.deleteColor');

        var id = req.params.id;

        Color.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Color deleted successfully.'
            });
        });
    },

    addLeather: function (req, res) {
        console.log('style.addLeather');

        var leather = new Leather(req.body);

        leather.save(function (err, data) {
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

    updateLeather: function (req, res) {
        console.log('style.updateLeather');

        Leather.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Leather not found' });

            data.title = req.body.title;

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

    deleteLeather: function(req, res) {
        console.log('style.deleteLeather');

        var id = req.params.id;

        Leather.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Leather deleted successfully.'
            });
        });
    },

    addMaterial: function (req, res) {
        console.log('style.addMaterial');

        var material = new Material(req.body);

        material.save(function (err, data) {
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

    updateMaterial: function (req, res) {
        console.log('style.updateMaterial');

        Material.findById(req.body.id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Material not found' });

            data.title = req.body.title;

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

    deleteMaterial: function(req, res) {
        console.log('style.deleteMaterial');

        var id = req.params.id;

        Material.findByIdAndRemove(id, function(err) {
            if (err)
                return res.status(500).send({ message: err.message });

            res.status(200).send({
                message: 'Material deleted successfully.'
            });
        });
    },

    getAll: function (req, res) {
        console.log('style.getAll');

        Style.find(function (err, data) {
            Style.populate(data, { path: 'materials', model: 'Material' }, function(err, data) {
                Style.populate(data, { path: 'leathers', model: 'Leather' }, function(err, data) {
                    Style.populate(data, { path: 'colors', model: 'Color' }, function(err, data) {
                        Style.populate(data, { path: 'sizes', model: 'Size' }, function(err, data) {

                            res.send(data);

                        });
                    });
                });
            });
        });
        //db.styles.aggregate([{$lookup: { from: "stylematerials", localField: "_id", foreignField: "style", as: "materials"}}])
    },

    getOne: function (req, res) {
        console.log('style.getOne');

        var id = req.params.id;

        Style.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Style not found' });

            res.send(data);

        });
    },

   getAllMaterial: function (req, res) {
        console.log('style.getAllMaterial');

        Material.find(function (err, data) {
            res.send(data);
        });
    },

    getOneMaterial: function (req, res) {
        console.log('style.getOneMaterial');

        var id = req.params.id;

        Material.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Material not found' });

            res.send(data);

        });
    },

    getAllLeather: function (req, res) {
        console.log('style.getAllLeather');

        Leather.find(function (err, data) {
            res.send(data);
        });
    },

    getOneLeather: function (req, res) {
        console.log('style.getOneLeather');

        var id = req.params.id;

        Leather.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Leather not found' });

            res.send(data);

        });
    },

    getAllColor: function (req, res) {
        console.log('style.getAllColor');

        Color.find(function (err, data) {
            res.send(data);
        });
    },

    getOneColor: function (req, res) {
        console.log('style.getOneColor');

        var id = req.params.id;

        Color.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Color not found' });

            res.send(data);

        });
    },

    getAllSize: function (req, res) {
        console.log('style.getAllSize');

        Size.find(function (err, data) {
            res.send(data);
        });
    },

    getOneSize: function (req, res) {
        console.log('style.getOneSize');

        var id = req.params.id;

        Size.findById(id, function(err, data) {
            if (!data)
                return res.status(401).send({ message: 'Size not found' });

            res.send(data);

        });
    }
}
