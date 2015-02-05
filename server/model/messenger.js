/**
 * Created by LMJ on 2015-02-05.
 */
var mongodb = require("mongodb").MongoClient;
exports.GetUserList = function (callback) {
    mongodb.connect(settings.dbConnect, function (err, db) {
        if (err) throw err;

        var collection = db.collection("users");

        collection.find().toArray(function (err, results) {
            callback(results);
            db.close();
        });
    });
}
