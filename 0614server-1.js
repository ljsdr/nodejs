//모듈을 추출한다
var http = require('http');
var express = require("express");
//웹서버를 생성,서버 애플리케이션 객체를 생성
var app = express();
//요청이 왔을때 실행할 함수
app.use(function (req, res, next) {  //callback
    console.log("클라이언트 요청이 왔습니다.")
    // res.writeHead(200, { "content-Type": "text/html;charset=utf-8" });
    // res.write("<!DOCTPYE html");
    // res.write("<html>");
    // res.write("<head>");
    // res.write("<title>응답페이지</title>");
    // res.write("</head>");
    // res.write("</body>");
    // res.write("<h1>안녕하세요 서버로부터 응답이 왔습니다.</h1>");
    // res.write("</body>");
    req.text = "이순신";    //서버로 보낸것
    req.age = 30;          //서버로 보낸것
    next();            
    res.end();
});
app.use(function (req, res) {
    res.send("<h2>" + req.text + ":" + req.age + "</h2>"); //서버로 보낸걸 받음
    res.send("<h2>" + req.text + ":" + req.age + "</h2>"); //출력x 위에것 한번만된다.
});

//서버를 실행한다.
http.createServer(app).listen(52273, function () {
    console.log("server Running at http://127.0.0.1:52273")
})
