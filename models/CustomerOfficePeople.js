var mongoose = require('mongoose');

module.exports = mongoose.model('CustomerOfficePeople', {
    companyOffice: {type: mongoose.Schema.ObjectId, ref: 'CustomerOffice'},
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    isPrimary: Boolean,
    isManager: Boolean,
    lovDesignation: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    lovDepartment: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    isActive: Boolean
});
