var mongoose = require('mongoose');

module.exports = mongoose.model('JobCardLiningCutting', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    cutter: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String
});
