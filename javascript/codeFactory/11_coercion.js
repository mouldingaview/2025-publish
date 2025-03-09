console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

console.log(typeof 99);
console.log(typeof true);
console.log(typeof Infinity);


//숫자타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'))//정수변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99'))//실수변환
console.log(typeof 1)
console.log(typeof '1')
console.log(typeof (1+'1'));
console.log(typeof +'1');//단항 + 연산자는 피연산자를 숫자로 변환하는 역할

//Boolean 타입으로 변환 ==> 값이 존재하면 true
console.log('--------');
console.log(!'x');//string 에 값이 있기때문에 true --> ! 이기때문에 false
console.log(!!'x');
console.log(!!'');
console.log(!!0);//false
console.log(!!'0');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{})
console.log(!![])

//1) 아무글자도 없는 String 
console.log('--------');
console.log(!!"") //false
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
console.log(!!0);