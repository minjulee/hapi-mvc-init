/**
 * Created by LMJ on 2015-02-02.
 */
var model = reqlib("/server/model/messenger.js");
module.exports = {
    index: {
        handler : function(request, reply){
            model.GetUserList(function (results) {
                reply.view("messenger/index", {title : "메신저", data : results});
            });
        },
        id : "messenger_index"
    }
}