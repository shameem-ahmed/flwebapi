var PO          = require('../models/purchaseOrder').PurchaseOrder;
var POStyle     = require('../models/purchaseOrder').PurchaseOrderStyle;
var POStyleSize = require('../models/purchaseOrder').PurchaseOrderStyleSize;
var JC          = require('../models/jobCard').JobCard;

module.exports = {

    generate: function (req, res) {
        console.log('jc.generate');

        var id = req.params.id;

        PO.find({_id: id}).exec(function(err, poData){

            if (!poData)
                return res.status(401).send({ message: 'PO not found' });

            var jcNo = 1;

            POStyle.find({ purchaseOrder: poData[0]._id }).exec(function(err, poStyleData){

                if (!poStyleData)
                    return res.status(401).send({ message: 'PO Styles not found' });

                poStyleData.forEach(function(poStyle, index) {

                    POStyleSize.find({ purchaseOrderStyle: poStyle._id }).exec(function(err, poSizeData){

                        if (!poSizeData)
                            return res.status(401).send({ message: 'PO Style Sizes not found' });

                        poSizeData.forEach(function(poSize, index) {

                            var i = 0;

                            for(i = 0; i < poSize.qty; i++) {

                                //save jc
                                var jc2 = {
                                    jobCardNo: poData[0].invoiceNo + '.' + jcNo,
                                    purchaseOrder: poData[0]._id,
                                    purchaseOrderStyle: poStyle._id,
                                    purchaseOrderSize: poSize._id,
                                    status: 0,
                                    dateStart: null,
                                    dateEnd: null,
                                    cuttingDone: false,
                                    cuttingDate: null,
                                    cuttingMatcher: null,
                                    cuttingCutter: null,
                                    cuttingFuser: null,
                                    cuttingRemarks: "",
                                    liningDone: false,
                                    liningDate: null,
                                    liningCutter: null,
                                    liningRemarks: "",
                                    storeDone: false,
                                    storeDate: null,
                                    storeIssuedBy: null,
                                    storeReceivedBy: null,
                                    storeRemarks: "",
                                    tailoringDone: false,
                                    tailoringDate: null,
                                    tailoringTailor: null,
                                    tailoringLineQc: null,
                                    tailoringStatus: "",
                                    tailoringRemarks: "",
                                    inspectionDone: false,
                                    inspectionDate: null,
                                    inspectionQcBy: null,
                                    inspectionStatus: "",
                                    inspectionRemarks: "",
                                    packingDone: false,
                                    packingDate: null,
                                    packingBy: null,
                                    packingStatus: "",
                                    packingRemarks: ""
                                };

                                var jc = new JC(jc2);

                                jc.save();

                                jcNo++;
                            }
                        });
                    });
                });
            });

            JC.find({purchaseOrder: id})
                .populate({ path: 'purchaseOrderStyle', populate: { path: 'style' }})
                .populate({ path: 'purchaseOrderSize', populate: { path: 'styleSize' }})
                .exec(function(err, data){

                if (!data)
                    return res.status(401).send({ message: 'JCs not found' });

                res.send(data);
            });

        });
    },

    getAll: function (req, res) {
        console.log('jc.getAll');

        var id = req.params.id;

        JC.find({purchaseOrder: id})
            .populate({ path: 'purchaseOrderStyle', populate: { path: 'style' }})
            .populate({ path: 'purchaseOrderSize', populate: { path: 'styleSize' }})
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'JCs not found' });

            res.send(data);
        });
    },

    getOne: function (req, res) {
        console.log('jc.getOne');

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

    getAllPOStyle: function (req, res) {
        console.log('jc.getAllPOStyle');

        var id = req.params.id;

        JC.find({purchaseOrderStyle: id})
            .populate({ path: 'purchaseOrderStyle', populate: { path: 'style' }})
            .populate({ path: 'purchaseOrderSize', populate: { path: 'styleSize' }})
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'JCs not found' });

            res.send(data);
        });
    },

    getAllPOSize: function (req, res) {
        console.log('jc.getAllPOSize');

        var id = req.params.id;

        JC.find({purchaseOrderSize: id})
            .populate({ path: 'purchaseOrderStyle', populate: { path: 'style' }})
            .populate({ path: 'purchaseOrderSize', populate: { path: 'styleSize' }})
            .exec(function(err, data){

            if (!data)
                return res.status(401).send({ message: 'JCs not found' });

            res.send(data);
        });
    },
}
