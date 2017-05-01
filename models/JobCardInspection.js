var mongoose = require('mongoose');

module.exports = mongoose.model('JobCardInspection', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    qcDoneBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String,
    isOK: Boolean
});
