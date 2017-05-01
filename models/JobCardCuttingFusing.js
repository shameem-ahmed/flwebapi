var mongoose = require('mongoose');

module.exports = mongoose.model('JobCardCuttingFusing', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    matcher: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    cutter: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    fuser: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String
});
