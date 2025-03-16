/*
Operators : 연산자
*/

/*
산술연산자
+
-
/
*
%
*/

console.log(10+10)
console.log(10%2)

console.log('------------')

console.log(10*(10+10));

let number = 1;
// number++;
// console.log(number)
console.log('------------')

let result = 1;
console.log(result);
result = number ++;
console.log(result, number)

console.log('----------')
sample = '안유진';
console.log(+sample);

sample = '99';
console.log(-sample)
console.log(typeof -sample)

console.log('----------')
/*
할당연산자(assignment operator)
*/
number = 100;
console.log(number);
number += 10;
console.log(number);
number %= 10;
console.log(number)

console.log('----------')
/* 
비교연산자 값의 비교, 값과 타입의비교
*/
console.log(5 == 5)
console.log(5 == '5')
console.log(0 == '')
console.log(true == 1)
console.log(false == 0)
console.log(5 === '5')//값, type 비교 
// 
// 
console.log('----------')
console.log(5 != 5)
console.log(5 != '5')
console.log(0 != '')
console.log(true != 1)
console.log(false != 0)
console.log(5 !== '5')//값, type 비교 

console.log('----------')
/* 
대소 비교연산자
*/
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);

/* 
삼항조건연산자(ternary operator)
*/
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0 보다 작다")//조건 ? true일때 : false일때

/*
논리연산자 
1) & => && 
2) or => ||
*/
console.log(true && true)
console.log(true || false)

console.log('----------')
/*
단축평가 (short circuit evaluation)
&& 좌측이 true이면 우측값 반환
&& 좌측이 false 이면 좌측값 반황
|| 좌측이 true 이면  좌측값 반환
|| 좌측이 false 이면 우측값 반환
*/
console.log(true && '아이브')
console.log(false && '아이브')

console.log(true || '아이브')
console.log(false || '아이브')

console.log(true && true && '아이브');
console.log(true && false && '아이브');

/* 
지수연산자 ==> 제곱
 */
console.log(2 ** 2)

console.log('----------')
/* 
null 연산자 */
let name;
console.log(name);
name = name ?? '마브레이블'//??는 null 또는 undefined인 경우에만 오른쪽 값을 사용
console.log(name)

name = name ?? 'BBNB'
console.log(name)

let name2;
name2 ??= '마브레이블' //같은 표현 ==> name2 = name2 ?? '마브레이블'
console.log(name2) 