var mongoose = require('mongoose');

module.exports.seedData = function() {

    //SEED DATA
    var mLov = mongoose.model("Lov");
    var mUser = mongoose.model("User");
    var mUserAccess = mongoose.model("UserAccess");
    var mPerson = mongoose.model("Person");

    mUser.find(function(err, data) {
        if (data.length === 0) {
            console.log("Seed User & UserAccess data: started...")

            var dUser1 = new mUser({ name:"admin", pwd:"P@ssw0rd", person: null, dateExpiry:"31-Dec-2050", isActive:true, flag:0, isAdmin:true }).save();

            var dUser2 = new mUser({ name:"manager", pwd:"P@ssw0rd", person: null, dateExpiry:"31-Dec-2050", isActive:true, flag:0, isAdmin:false }).save(function(err, data) {

                var dUserAccess = new mUserAccess({ user:data._id, pageCode: 'DASH', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'POOR', accessCode: '000000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'BUYR', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'MSDS', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'JBCD', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'STYL', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'LTOR', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'SUPP', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'COMP', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'LOVL', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'USER', accessCode: '111111111' }).save();

            });

            var dUser3 = new mUser({ name:"user", pwd:"P@ssw0rd", person: null, dateExpiry:"31-Dec-2050", isActive:true, flag:0, isAdmin:false }).save(function(err, data) {

                var dUserAccess = new mUserAccess({ user:data._id, pageCode: 'DASH', accessCode: '111111111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'POOR', accessCode: '000000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'BUYR', accessCode: '111110111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'MSDS', accessCode: '111110111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'JBCD', accessCode: '111110111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'STYL', accessCode: '111110111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'LTOR', accessCode: '111110111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'SUPP', accessCode: '111110111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'COMP', accessCode: '111110111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'LOVL', accessCode: '111110111' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'USER', accessCode: '111110111' }).save();

            });

            var dUser4 = new mUser({ name:"readuser", pwd:"P@ssw0rd", person: null, dateExpiry:"31-Dec-2050", isActive:true, flag:0, isAdmin:false }).save(function(err, data) {

                var dUserAccess = new mUserAccess({ user:data._id, pageCode: 'DASH', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'POOR', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'BUYR', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'MSDS', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'JBCD', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'STYL', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'LTOR', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'SUPP', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'COMP', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'LOVL', accessCode: '111000000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'USER', accessCode: '111000000' }).save();

            });

            var dUser5 = new mUser({ name:"adduser", pwd:"P@ssw0rd", person: null, dateExpiry:"31-Dec-2050", isActive:true, flag:0, isAdmin:false }).save(function(err, data) {

                var dUserAccess = new mUserAccess({ user:data._id, pageCode: 'DASH', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'POOR', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'BUYR', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'MSDS', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'JBCD', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'STYL', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'LTOR', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'SUPP', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'COMP', accessCode: '111100000' }).save();
                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'LOVL', accessCode: '111100000' }).save();

                dUserAccess = new mUserAccess({ user:data._id, pageCode: 'USER', accessCode: '111100000' }).save(function(err, data){
                    console.log("Seed User & UserAccess data: completed...");
                });

            });
        }
    });

    mLov.find(function(err, data){
        if (data.length === 0) {
            console.log("Seed LOV data: started...")
            //desig or role
            //type = 0-Desig, 1-Dept, 2-OfficeType, 3-GovtCode, 4-UserType, 5-OrderType, 6-OrderStatus, 7-POInternalDetailType, 8-JCStatus, 9-ContactType, 10-PersonGovtNo
            var dLov = new mLov({ title:"Matcher", type:0, flag:0 }).save();

            dLov = new mLov({ title:"Fuser", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Cutter", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Store", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Line QC", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Tailor", type:0, flag:0 }).save();
            dLov = new mLov({ title:"QC", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Packaging", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Supervisor", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Manager", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Buyer", type:0, flag:0 }).save();
            dLov = new mLov({ title:"Admin", type:0, flag:0 }).save();

            //dept
            dLov = new mLov({ title:"Admin", type:1, flag:0 }).save();
            dLov = new mLov({ title:"Cutting & Fusing", type:1, flag:0 }).save();
            dLov = new mLov({ title:"Lining Cutting", type:1, flag:0 }).save();
            dLov = new mLov({ title:"Store", type:1, flag:0 }).save();
            dLov = new mLov({ title:"Tailoring", type:1, flag:0 }).save();
            dLov = new mLov({ title:"Inspection", type:1, flag:0 }).save();
            dLov = new mLov({ title:"Packing", type:1, flag:0 }).save();

            //office type
            dLov = new mLov({ title:"Factory", type:2, flag:0 }).save();
            dLov = new mLov({ title:"Main Office", type:2, flag:0 }).save();
            dLov = new mLov({ title:"Branch Office", type:2, flag:0 }).save();

            //govt code
            dLov = new mLov({ title:"CST", type:3, flag:0 }).save();
            dLov = new mLov({ title:"GST", type:3, flag:0 }).save();
            dLov = new mLov({ title:"VAT", type:3, flag:0 }).save();
            dLov = new mLov({ title:"TIN", type:3, flag:0 }).save();
            dLov = new mLov({ title:"BIN", type:3, flag:0 }).save();
            dLov = new mLov({ title:"PAN", type:3, flag:0 }).save();

            //order type
            dLov = new mLov({ title:"Prototype", type:5, flag:0 }).save();
            dLov = new mLov({ title:"Sales man sample", type:5, flag:0 }).save();
            dLov = new mLov({ title:"Top production sample", type:5, flag:0 }).save();
            dLov = new mLov({ title:"Production order", type:5, flag:0 }).save();

            //order status
            dLov = new mLov({ title:"New", type:6, flag:0 }).save();
            dLov = new mLov({ title:"Production", type:6, flag:0 }).save();
            dLov = new mLov({ title:"Hold", type:6, flag:0 }).save();
            dLov = new mLov({ title:"Cancel", type:6, flag:0 }).save();
            dLov = new mLov({ title:"Complete", type:6, flag:0 }).save();
            dLov = new mLov({ title:"Dispute", type:6, flag:0 }).save();

            //order status
            dLov = new mLov({ title:"Body lining", type:7, flag:0 }).save();
            dLov = new mLov({ title:"Sleeve lining cutting", type:7, flag:0 }).save();

            //job card status
            dLov = new mLov({ title:"OK", type:8, flag:0 }).save();
            dLov = new mLov({ title:"Reject", type:8, flag:0 }).save();
            dLov = new mLov({ title:"Alter", type:8, flag:0 }).save();

            //contract type
            dLov = new mLov({ title:"Employee", type:9, flag:0 }).save();
            dLov = new mLov({ title:"Contract", type:9, flag:0 }).save();
            dLov = new mLov({ title:"Freelance", type:9, flag:0 }).save();

            //person govt code
            dLov = new mLov({ title:"License", type:10, flag:0 }).save();
            dLov = new mLov({ title:"Aadhar Card", type:10, flag:0 }).save();
            dLov = new mLov({ title:"Passport", type:10, flag:0 }).save();
            dLov = new mLov({ title:"PAN", type:10, flag:0 }).save(function(err, data) {

                console.log("Seed Person data: started...")

                var dPerson = new mPerson({ name: "Shameem Ahmed A", email: "shameem.net1@gmail.com", phone: "9176330322", facebook: "shameem666", skype: "shameem.net",
                                           twitter: "~shameem", lovGovtNo: data._id, govtNo: "1234567890", photo: "shameem.jpg", dateBirth: "25-Dec-1975",
                                           dateAnniversary: "22-Dec-2005", maritalStatus: 1, gender: 0, isActive: true, flag: 0 }).save();

                dPerson = new mPerson({ name: "Mahesh Kumar", email: "mahesh.kumar@gmail.com", phone: "9176330322", facebook: "shameem666", skype: "shameem.net",
                                           twitter: "~shameem", lovGovtNo: data._id, govtNo: "1234567890", photo: "shameem.jpg", dateBirth: "25-Dec-1975",
                                           dateAnniversary: "22-Dec-2005", maritalStatus: 1, gender: 0, isActive: true, flag: 0 }).save();

                dPerson = new mPerson({ name: "Saravanan", email: "saravanan.ag@gmail.com", phone: "9176330322", facebook: "shameem666", skype: "shameem.net",
                                           twitter: "~shameem", lovGovtNo: data._id, govtNo: "1234567890", photo: "shameem.jpg", dateBirth: "25-Dec-1975",
                                           dateAnniversary: "22-Dec-2005", maritalStatus: 1, gender: 0, isActive: true, flag: 0 }).save(function(err, data) {

                    console.log("Seed Person data: completed...")

                });

                console.log("Seed LOV data: completed...")
            });
        }
    });

    var mLoc = mongoose.model("GeoLoc");

    mLoc.find(function(err, data) {
        if (data.length === 0) {
            console.log("Seed GeoLoc data: started...")
            //locations with geo data
            //type = 0-country, 1-state, 2-city, 3-area
            var dLoc1 = new mLoc({ parent:null, title:"India", type:0, geoData:'', flag:0 }).save(function(err, data) {
                var dLoc11 = new mLoc({ parent:data._id, title:"Tamilnadu", type:1, geoData:'', flag:0 }).save(function(err, data) {
                    var dLoc111 = new mLoc({ parent:data._id, title:"Chennai", type:2, geoData:'', flag:0 }).save(function(err, data) {
                        var dLoc1111 = new mLoc({ parent:data._id, title:"T Nagar", type:3, geoData:'', flag:0 }).save(function(err, data) {
                            console.log("Seed GeoLoc data: completed...")
                        });
                    });
                });
            });
        }
    });
}
