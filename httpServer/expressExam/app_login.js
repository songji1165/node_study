//Express기본 모듈 불러오기
var express = require('express'),
    http = require('http'),
    path = require('path');

//Express 미들웨어 불러오기
var bodyParser = require('body-parser'),
    static = require('serve-static');

//Express 객체 생성
var app = express();

//기본 속성 설정
app.set('port',process.env.PORT || 4000);

//미들웨어: body-parser를 사용해 application/x-www-form-urlencede파싱
app.use(bodyParser.urlencoded({extended: false}));
//미들웨어: body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());
//미들웨어: 특정 폴더의 파일을 특정 패스로 접근할 수 있도록 함
app.use(static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    console.log("첫번쨰 미들웨어 요청 처리함.");

    var paramId = req.body.id || req.query.id;
    var paramPwd = req.body.pwd || req.query.pwd;

    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param Id : '+ paramId+'</p></div>');
    res.write('<div><p>Param Pwd : '+ paramPwd+'</p></div>');
    res.end();
});

//express 서버 실행
http.createServer(app).listen(app.get("port"), function () {
    console.log("익스프레스 시작합니다.", app.get("port"));
  });
  