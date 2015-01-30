/**
 * Created by LMJ on 2015-01-22.
 */
var model = reqlib("/server/model/email.js");
module.exports = {
    email_inbox: {
        handler : function(request, reply){
            reply.view("email/email-inbox", {
               title : "Email-Inbox"
            });
        },
        id : "email_inbox"
    },
    send : {
        handler : function(request, reply){
            model.GetRecordSet("SELECT * FROM GW_EMAIL", function (recordset) {
                reply.view("email/index", {title : process.env.NODE_ENV, data : recordset});
            });
        },
        id : "send"
    },
    missing : {
        handler : function(request, reply){
            reply.view("404", {
                title : "Total Bummer 404 Page"
            }).code(404);
        },
        id : "404"
    }
}