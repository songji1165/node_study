//(1) http 모듈 선언
var http = require("http");

//(2) http서버 객체 생성
var server = http.createServer();

var port = 8000;

//(3) 웹 서버 시작 : 8000포트에서 대기
server.listen(port, function () {
  console.log("웹서버 시작 : %d", port);
});
/*
var host = '172.30.1.35';
server.listen(port, host, '50000',function(){
    console.log("웹서버가 시작되었음 : %s, %d", host, port);
})
*/

//(4) 클라이언트 연결 이벤트
server.on("connection", function (socket) {
  var addr = socket.address();
  console.log("클라이언트가 접속함 : %s, %d", addr.address, addr.port);
});

//(5) 클라이언트 요청 이벤트
server.on("request", function (req, res) {
  console.log("클라이언트 요청이 들어옴.");
  // console.log(req);

  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>응답 페이지</title>");
  res.write("</head>");
  res.write("<body><h1>node.js 응답페이지입니다.</h1></body");
  res.write("</html>");
  res.end();
});

//(6) 서버 종료 이벤트
server.on("close", function () {
  console.log("서버 종료");
});
