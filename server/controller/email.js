/**
 * Created by LMJ on 2015-01-22.
 */
var model = reqlib("/server/model/email.js");
module.exports = {
    index: {
        handler : function(request, reply){
            reply.view("email/index", {
               title : "이메일 시작페이지"
            });
        },
        id : "index"
    },
    send : {
        handler : function(request, reply){
            model.GetRecordSet("select * from ni_user_bbs", function (recordset) {
                reply.view("email/index", {title : "타이틀 입니다.", data : recordset});
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