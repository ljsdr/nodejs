//자바스크립트
//콜백함수를 파라미터로 전달하기
//콜백함수: 함수를 파라미터로 전달했을때 특정시점에 그 함수를 실행시켜주는 경우

// function add(a, b, callback) {
//     var result = a + b;
//     callback(result);
// }

// add(20, 10, function (result) {
//     console.log("파라미터(매개변수)로 콜백함수호출됨");
//     console.log("결과 : ", result);
// });

// //함수를 반환하고 반환된 함수를 실행하기
// function mul(a,b,callback){
//     var result=a*b;
//     callback(result);
//     var history=function(){
//         return a+'*'+b+'='+result;
//     };
//     return history;
// }

// var mul_his=mul(8,9,function(result){
//     console.log("콜백함수 호출됨");
//     console.log("결과 : %d"+ result);
// })
// mul_his();
// console.log("함수실행결과(return)  history가 출력됨"+mul_his());

//반한된 함수에서 함수내부의 변수접근
//클로져 closer 종결자

function minus(a, b, callback) {
    var result = a + b;
    callback(result);
    var count = 0;
    var history = function () {
        count++;
        return count + ":" + a + "-" + b + "=" + result;
    }
    return history;
}

var minus_history = minus(10, 5, function (result) {
    console.log("호출됨");
    console.log(result);
});
console.log(minus_history());
console.log(minus_history());
console.log(minus_history());

var minus_history2 = minus(10, 5, function (result) {
    console.log("호출됨");
    console.log(result);
});
console.log(minus_history2());
console.log(minus_history2());
console.log(minus_history2());


//프로토타입만들고 객체생성하기
//함수명에 대문자로 시작하면 생성자함수
function Person(name, age) {
    this.name = name        //this.name은 생성자 뒤에 name은 함수매개변수 이름은 아무거나
    this.age = age;
}
Person.prototype.walk = function (speed) {
    //console.log(speed+"km 속도로 걸어간다");
    return speed + "km 속도로 걸어간다."
}

var person1 = new Person("이순신", 40);
//person1.walk(20);
console.log(`${person1.name}이 ${person1.walk(30)}`);

//bind 사용하기
var calc = {};
calc.hitCount = 0;
calc.add = function (a, b, callback) {
    var result = a + b;
    callback(result);
    this.hitCount++;
    console.log(this)
    console.log("add함수 호춛됨...");
}

var calculate = function (method, a, b) {
    console.log("calculate 호출됨");
    if (method == "add") {
        calc.add(a, b, onAdd.bind(calc));
    }
}
function onAdd(result) {  //onAdd를 받는것
    console.log("onAdd =>" + this); //onadd에 this
    console.log("onAdd결과 :" + result , this.hitCount);
}
calculate('add',10,20);
































