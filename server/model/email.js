/**
 * Created by LMJ on 2015-01-22.
 */
exports.GetRecordSet = function (strSql, callback) {
    var connection = new sql.Connection(settings.dbConfig, function(err) {
        if(err){
            return false;
        }else{
            var req = new sql.Request(connection);
            req.query(strSql, function (err, recordset) {
                callback(recordset);
            });
        }
    });
};