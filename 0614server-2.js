//정적파일 만들기

//모듈을 추출한다
var http = require('http');
var express = require("express");
//웹서버를 생성,서버 애플리케이션 객체를 생성
var app = express();
//요청이 왔을때 실행할 함수
app.use(express.static('public')) //시작폴더지정  정적파일


app.use(app.router);
//라우트처리
app.all("/a",function(req,res){
    res.send("<h1>Page A....</h1>")
});
app.all("/b",function(req,res){
    res.send("<h1>Page b....</h1>")
});
app.all("/c",function(req,res){
    res.send("<h1>Page c....</h1>")
});

app.use(function (req, res) {  
    res.send("<h1>잘못들어오신것같네요.</h1>") //지정된것말고 다른곳으로 들어가면 에러처리용
});


//서버를 실행한다.
http.createServer(app).listen(52273, function () {
    console.log("server Running at http://127.0.0.1:52273")
})
