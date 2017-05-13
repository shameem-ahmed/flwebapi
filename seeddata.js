var mongoose = require('mongoose');

module.exports.seedData = function() {

    //SEED DATA
    var mLov = mongoose.model("Lov");
    var mPerson = mongoose.model("Person");
    var mUser = mongoose.model("User");

    mLov.find(function(err, data){
        if (data.length === 0) {
            console.log("Seed LOV and Person data: started...")
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

            //user type
            dLov = new mLov({ title:"Admin", type:4, flag:0 }).save(function(err, data) {

                var dUser1 = new mUser({ name:"admin", pwd:"P@ssw0rd", lovUserType:data._id, person: null, dateExpiry:"31-Dec-2050", isActive:true, flag:0 }).save();

            });

            dLov = new mLov({ title:"Supervisor", type:4, flag:0 }).save();
            dLov = new mLov({ title:"Manager", type:4, flag:0 }).save();
            dLov = new mLov({ title:"User", type:4, flag:0 }).save();

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
            dLov = new mLov({ title:"License", type:10, flag:0 }).save(function(err, data) {

                var dPerson1 = new mPerson({ name:"Shameem Ahmed A", email:"shameem.net1@gmail.com", phone:"9176330322", facebook:"shameem666",
                                             skype:"shameem.net", twitter:"~shameem", lovGovtNo:data._id, govtNo:"1234567890", photo:"shameem1.jpg",
                                             dateBirth:"25-Dec-1975", dateAnniversary:"22-Dec-2005", maritalStatus:1, gender:0, isActive:true, flag:0 }).save(function(err, data) {

                    var personId = data._id;

                    var mLoc = mongoose.model("GeoLoc");
                    var mAddress = mongoose.model("Address");
                    var mPersonAddress = mongoose.model("PersonAddress");

                    mLoc.find(function(err, data) {
                            if (data.length === 0) {
                                console.log("Seed GeoLoc and Address data: started...")
                                //locations with geo data
                                //type = 0-country, 1-state, 2-city, 3-area
                                var dLoc1 = new mLoc({ parent:null, title:"India", type:0, geoData:'', flag:0 }).save(function(err, data) {
                                    var dLoc11 = new mLoc({ parent:data._id, title:"Tamilnadu", type:1, geoData:'', flag:0 }).save(function(err, data) {
                                        var dLoc111 = new mLoc({ parent:data._id, title:"Chennai", type:2, geoData:'', flag:0 }).save(function(err, data) {
                                            var dLoc1111 = new mLoc({ parent:data._id, title:"Pattalam", type:3, geoData:'', flag:0 }).save(function(err, data) {
                                                var dAdd1 = new mAddress({ address1:"#13, Khazi Saheb Street", address2:"Demellows Road", geoLoc:data._id, isActive:true, flag:0 }).save(function(err, data) {
                                                    var dPersonAdd1 = new mPersonAddress({ person: personId, address: data._id, isPrimary: true, isActive: true }).save();
                                                });
                                            });
                                            var dLoc1112 = new mLoc({ parent:data._id, title:"Egmore", type:3, geoData:'', flag:0 }).save();
                                        });
                                        var dLoc112 = new mLoc({ parent:data._id, title:"Madurai", type:2, geoData:'', flag:0 }).save(function(err, data) {
                                                var dLoc1121 = new mLoc({ parent:data._id, title:"Karunanidha Nagar", type:3, geoData:'', flag:0 }).save();
                                        });
                                    });
                                    var dLoc12 = new mLoc({ parent:data._id, title:"Karnataka", type:1, geoData:'', flag:0 }).save(function(err, data) {
                                        var dLoc121 = new mLoc({ parent:data._id, title:"Banglore", type:2, geoData:'', flag:0 }).save(function(err, data) {
                                            var dLoc1211 = new mLoc({ parent:data._id, title:"Sivaji Nagar", type:3, geoData:'', flag:0 }).save();
                                            var dLoc1212 = new mLoc({ parent:data._id, title:"Ashok Estate", type:3, geoData:'', flag:0 }).save();
                                        });
                                        var dLoc122 = new mLoc({ parent:data._id, title:"Mysore", type:2, geoData:'', flag:0 }).save(function(err, data) {
                                            var dLoc1221 = new mLoc({ parent:data._id, title:"KK Nagar", type:3, geoData:'', flag:0 }).save();
                                        });
                                    });
                                });
                                console.log("Seed GeoLoc & Address data: completed...")
                            }
                    });
                });

            });
            dLov = new mLov({ title:"Aadhar Card", type:10, flag:0 }).save(function(err, data) {

                var dPerson2 = new mPerson({ name:"Mahesh Kumar", email:"shameem.net1@gmail.com", phone:"9176330322", facebook:"shameem666",
                                             skype:"shameem.net", twitter:"~shameem", lovGovtNo:data._id, govtNo:"1234567890", photo:"shameem1.jpg",
                                             dateBirth:"25-Dec-1975", dateAnniversary:"22-Dec-2005", maritalStatus:1, gender:0, isActive:true, flag:0 }).save();

            });
            dLov = new mLov({ title:"Passport", type:10, flag:0 }).save(function(err, data) {

                var dPerson3 = new mPerson({ name:"Saravanan", email:"shameem.net1@gmail.com", phone:"9176330322", facebook:"shameem666",
                                             skype:"shameem.net", twitter:"~shameem", lovGovtNo:data._id, govtNo:"1234567890", photo:"shameem1.jpg",
                                             dateBirth:"25-Dec-1975", dateAnniversary:"22-Dec-2005", maritalStatus:1, gender:0, isActive:true, flag:0 }).save();

            });
            dLov = new mLov({ title:"PAN", type:10, flag:0 }).save(function(err, data) {

                var dPerson4 = new mPerson({ name:"Kapil", email:"shameem.net1@gmail.com", phone:"9176330322", facebook:"shameem666",
                                             skype:"shameem.net", twitter:"~shameem", lovGovtNo:data._id, govtNo:"1234567890", photo:"shameem1.jpg",
                                             dateBirth:"25-Dec-1975", dateAnniversary:"22-Dec-2005", maritalStatus:1, gender:0, isActive:true, flag:0 }).save();

            });

            console.log("Seed LOV and Person data: completed...")
        }
    });
}
