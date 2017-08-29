var mongoose = require('mongoose');

var mLeatherOrder = mongoose.model('LeatherOrder', {
    supplier: {type: mongoose.Schema.ObjectId, ref: 'Supplier'},
    purchaseOrder: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrder'},
    invoiceNo: String,
    qty: Number,
    dateOrder: Date,
    dateTarget: Date,
    dateDelivery: Date,
    shippingAddress: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'}
});

var mLeatherOrderDetail = mongoose.model('LeatherOrderDetail', {
    leatherOrder: {type: mongoose.Schema.ObjectId, ref: 'LeatherOrder'},
    purchaseOrderStyle: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrderStyle'},
    styleLeather: {type: mongoose.Schema.ObjectId, ref: 'StyleLeather'},
    styleLeatherColor: {type: mongoose.Schema.ObjectId, ref: 'StyleLeatherColor'},
    qty: Number
});

var mLeatherOrderReceive = mongoose.model('LeatherOrderReceive', {
    leatherOrderDetail: {type: mongoose.Schema.ObjectId, ref: 'LeatherOrderDetail'},
    receivedBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    deliveredBy: {type: mongoose.Schema.ObjectId, ref: 'SupplierOfficePerson'},
    dateReceive: Date,
    qty: Number,
    isFullOrder: Boolean
});

module.exports = {
    LeatherOrder: mLeatherOrder,
    LeatherOrderDetail: mLeatherOrderDetail,
    LeatherOrderReceive: mLeatherOrderReceive
};


