//function ==> 함수

//console.log((2 * 10 / 2 % 3).toString())

//파라미터
function calculate(n){
    console.log((n * 10 / 2 % 3).toString());
}
calculate(4);//괄호안 값 ==> 파라미터

//함수에서 입력받는 값에대한 정의 ==> parameter
//실제 입력하는 값 ==> argument

function multiply(x, y){
    console.log(x * y)
}

multiply(2, 4)



function multiply(x, y = 10){//y ==> 기본값
    console.log(x * y)
}

multiply(2)

//return 반환받기
function multiply(x, y){
    return x * y;
}

const return1 = multiply(2, 4);
console.log(return1)

//arrow 함수
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const mulityply4 = (x) => x * 2;
console.log(mulityply4(4));

console.log('-------------')
const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7))

function multiply6(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply6(2)(5)(7))
console.log('-------------')


//화살표 함수는 arguments 객체 없음
const multiplyThree = function(x, y, z){
    console.log(arguments);//순서대로 반환받을 수 있음
    return x * y * z;
}
console.log(multiplyThree(3, 4, 5));
console.log('-------------')

//arguments ==> 배열(Array)이 아니라 유사 배열(Array-like Object) : length 프로퍼티를 가지지만, map, forEach 같은 배열 메서드는 없음, 배열처럼 인덱스로 접근 가능

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a * b, 1)
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10))

//즉시실행함수
;(function(x, y){
    console.log(x * y)
})(4, 5) 

;((x, y) => {
    console.log(x * y)
})(4, 5) 

console.log(typeof multiplyAll);
console.log(multiplyAll instanceof Object)