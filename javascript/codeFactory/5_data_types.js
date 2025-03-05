//number 타입

const age = 32;
const temp = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temp);
console.log(typeof pi);
console.log('----------')

const infi = Infinity;
const ninfi = -Infinity;
console.log(typeof infi);
console.log(typeof ninfi);

console.log('----------')

//string
const codeFactory = '코드팩토리';
console.log(typeof codeFactory)

/**Template literal
 * newline =<\n
 * tab -> \t
 * 백슬러시를 스트링으로 -> 두번입력 
 */

const iveYuJin = '아이브\n안유진'
const tab = "mav\tlabel"
const backSlash = "mav\\label"
const backTick = `mav
label`

console.log(iveYuJin)
console.log(tab)
console.log(backSlash)
console.log(backTick)

const groupName = '아이브';
console.log(`${groupName} 안유진`)

/*
Boolean 타입
*/
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

console.log('----')
/* 
undefined
*/
let noInit;
console.log(noInit)
console.log(typeof noInit)

console.log('----')
/*
null 타입
*/
let init = null;
console.log(init)
console.log(typeof init)

console.log('----')
/*
symbol 타입
유일무이한 값을 생성할때
*/
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const symbol1 = Symbol('1');//값이 같아도 유일무이한 값이됨
const symbol2 = Symbol('1');//값이 같아도 유일무이한 값이됨
console.log(symbol1 === symbol2)

console.log('----')
/*
Object 타입

Map key:value 쌍으로 이루어짐
*/
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
}

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);
console.log(typeof dictionary);

console.log('----')
/*
Array 타입
*/
const iveMembesArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
];
console.log(iveMembesArray[3])
iveMembesArray[3] = 'mavlabel'
console.log(iveMembesArray[3])
console.log(typeof iveMembesArray)