var mongoose = require('mongoose');

module.exports = mongoose.model('JobCardStore', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    tailor: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    qcLineDonyBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String,
    isOK: Boolean
});
