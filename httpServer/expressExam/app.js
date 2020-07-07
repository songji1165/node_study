// const { required } = require("nconf");

//Express 기본 모듈 사용하기
//  - express는 http모듈 기반으로 동작하기 때문에 , http&express 모듈 모두 준비해야 한다.
var express = require("express"),
  http = require("http");

//(1) express 서버 객체 생성
var app = express();

//(2) 웹 서버의 환경을 설정하는 메소드 set()
// - 기본포트를 app객체에 속성으로 설정
// - port속성 값을 setting 함. => get속성을 통해 해당 속성 값을 꺼낼 수 있음.
app.set("port", process.env.PORT || 4000);

//(3) 미들웨어(로그) 등록 : 모든 클라이언트 요청을 로그로 남김
// - 미들웨어 : 클라이언트 요청을 전달받아. 필요한 기능을 수행할 수 있음.
app.use(function (req, res, next) {
  console.log("첫 번째 미들웨어 요청 처리");

  /* 하나의 미들웨어만 사용하는 경우
  res.writeHead("200", { "Content-Type": "text/html;charset=utf-8" });
  res.end("<h1>Express 서버에 응답한 결과</h1>");
  */

  req.user = "Mike";
  // res.redirect('http://google.co.kr');

  next(); //다음 미들웨어로 이동
});

app.use("/", function (req, res, next) {
  console.log("두 번째 미들웨어 요청 처리");

  var userAgent = req.header("User-Agent");
  var paramName = req.query.name; //GET 방식

  //var bodyName = req.body.name => POST 방식인 경우

  res.writeHead("200", { "Content-Type": "text/html;charset=utf-8" });
  res.write("<h3> userAgent : " + userAgent + "</h3>");
  res.write("<h2> paramName : " + paramName + "</h2>");
  res.end("<h1>Express 서버에 응답한 결과: " + req.user + "</h1>");
});

//(3) Express 시작!
//  - http.createServer [웹 서버객체 생성] : 웹서버객체에 app 파라미터 전달후,  - listen : 서버 실행!
http.createServer(app).listen(app.get("port"), function () {
  console.log("익스프레스 시작합니다.", app.get("port"));
});
