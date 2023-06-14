//정적파일 만들기

//모듈을 추출한다
var http = require('http');
var express = require("express");
//웹서버를 생성,서버 애플리케이션 객체를 생성
var app = express();
//요청이 왔을때 실행할 함수
app.use(express.static('public')) //시작폴더지정  정적파일
app.use(app.router);//라우트

var items = [
    { name: "우유", price: 2000 },
    { name: "커피", price: 2000 },
    { name: "홍차", price: 2000 }
];

//라우터처리
app.all("/food", function (request, response) {
    var out = "";
    items.forEach((item) => {//items(복수)로 돌리는데 item(단수)으로 개별적으로 접근
        out += "<ul>"
        out += "<li>" + item.name + "</li>"
        out += "<li>" + item.price + "</li>"
        out += "</ul>"
    });
    response.send(out);
});

//json형태
app.all("/foodjson", function (request, response) {
    response.send(items)
    response.type("application/json")
})

//xml형태
app.all("/foodxml", function (request, response) {
    var out = "";
    out += '<?xml version="1.0" encoding="utf-8" ?>';
    out += "<products>";
    items.forEach((item) => {
        out += "<product>"
        out += "<name>" + item.name + "</name>"
        out += "<price>" + item.price + "</price>"
        out += "</product>"

    });
    out += "</products>"
    response.type("text/xml");
    response.send(out);
});



app.get("/aaa", (req, res) => {
    //상태코드
    res.status(404);
    //응답헤더
    res.set("AAA", "BBB");
    res.set({
        'name': "welcome",
        'age': '20'
    });
    res.send("내 마음대로 입력해보자.")
});




//서버를 실행한다.
http.createServer(app).listen(52273, function () {
    console.log("server Running at http://127.0.0.1:52273")
})
