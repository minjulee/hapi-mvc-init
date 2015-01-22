global.reqlib = require("app-root-path").require;
global.settings = reqlib("/server/config/setting");
global.sql = require("mssql");

var Hapi = require("hapi"),
    config = reqlib("/server/config/setting");

// 서버 객체 생성
var server = new Hapi.Server();
// 설정된 호스트와 포트로 서버 연결
server.connection({
    host: config.host,
    port: config.port
});

// 뷰 엔진 설정
server.views({
    engines: {
        html: require("swig")
    },
    path: "./server/view"
});

// Export the server to be required elsewhere.
module.exports = server;

reqlib("/server/config/plugin");

// Add the server routes
server.route(reqlib("/server/config/route"));

// Start the server
server.start(function(){
    // 서버 실행 시 콘솔창에 로그 표시
    console.log("Server started at : " + server.info.uri);
});