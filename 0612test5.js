//내장모듈
//os모듈
// hostname(), totalmem(), freemem(), cpus()
//networkInterfaces()

var os=require("os")
console.log(os.hostname());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.networkInterfaces());
console.log(os.cpus());
//Mac address -> 랜카드 주소 (물리적인주소)
//IP -> 논리적인주소


//path모듈
// join()
// dirname() 디렉토리 이름 
//basename() 확장자를 제외한 이름
//extname() 확장자를 반환

var path=require("path");
var directory=["users","이순신","강감찬"];
var doc=directory.join(path.sep);
console.log(doc);
console.log(path.sep); //   /(슬래시를 의미한다)

var dir=path.join("user/abc","node.exe");
console.log(dir);

var filename="c:\\program\\notepad.exe";
var dirName=path.dirname(filename);
console.log("디렉토리 : "+dirName);
var basename=path.basename(filename);
console.log("확장자포함 : "+basename);
var extname=path.extname(filename);
console.log("확장자 : "+extname);


