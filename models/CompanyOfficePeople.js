var mongoose = require('mongoose');

module.exports = mongoose.model('CompanyOfficePeople', {
    companyOffice: {type: mongoose.Schema.ObjectId, ref: 'CompanyOffice'},
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    isPrimary: Boolean,
    isManager: Boolean,
    isAdmin: Boolean,
    lovDesignation: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    lovDepartment: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    lovContactType: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    employeeId: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'},
    employeeId: String,
    isPermanent: Boolean,
    isHourly: Boolean,
    dateStart: Date,
    dateEnd: Date,
    rateHourly: Number,
    rateDaily: Number,
    rateWeekly: Number,
    rateMonthly: Number,
    isActive: Boolean
});
