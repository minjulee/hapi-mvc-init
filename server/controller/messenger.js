/**
 * Created by LMJ on 2015-02-02.
 */
module.exports = {
    index: {
        handler : function(request, reply){
            reply.view("messenger/index", {
                title : "index"
            });
        },
        id : "messenger_index"
    }
}