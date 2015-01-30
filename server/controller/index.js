/**
 * Created by user on 2015-01-30.
 */
module.exports = {
    index: {
        handler : function(request, reply){
            reply.view("index", {
                title : "그릅웨어 메인페이지"
            });
        },
        id : "index"
    }
}