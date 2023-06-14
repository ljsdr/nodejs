//노드의 기본기능알아보기
//주소문자열과 요청파라미터
//이벤트다루기
//파일다루기
//로그파일남기기
//url 모듈
//parse()   주소문자열을 URL객체로
//format()   URL객체를 주소문자열로

// var url=require("url");
// var curURL=url.canParse("https://www.google.com/search?q=nodejs&ei=-reHZLd3yov5BoKQmbgE&ved=0ahUKEwi33Iq4_r7_AhXKRd4KHQJIBkcQ4dUDCA8&uact=5&oq=nodejs&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCAAQgAQQsQMQgwEyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsANKBAhBGABQ2QNY2QNglQVoAXABeACAAZUBiAGVAZIBAzAuMZgBAKABAcABAcgBCg&sclient=gws-wiz-serp")

// console.log(curURL);
// var curStr=url.format(curURL);
// console.log(curStr);



//querystring 모듈
//parse() 요청파라미터문자열을 파라미터객체로
//stringify()  파라미터객체를 문자열로

// var curURL=url.parse("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9E%90%EB%B0%94+%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8")

// var curStr=url.format(curURL);
// var querystring=require("querystring");
// var param=querystring.parse(curURL.query);
// console.log(param.query);
// console.log(querystring.stringify(param));

//이벤트보내고 받기
//비동기 방식으로 데이터를 한쪽에서 다른쪽으로전달한다.
//emit으로 보내고 다른쪽에서 리스너를 등록해서 on으로 받는다.

process.on("exit", function () {
    console.log("exit 이벤트 발생함");
});
setTimeout(function () {
    console.log("2초 뒤에 시스템 종료 시도함")
    process.exit();
}, 2000);


var Calc = require("./0613calc3");
var Calc=new Calc();
Calc.emit("stop");
console.log(Calc.title + "에 이벤트 전달함.");

console.log(Calc.add(5,5));









