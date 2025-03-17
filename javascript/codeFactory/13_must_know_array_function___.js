//Array functions
let iveM = [
    '안',
    '가',
    '레이',
    '장',
    '리즈',
    '이서'
]

console.log(iveM)

//push array 맨 끝에 추가
//iveM.push('마브레이블');
console.log(iveM.push('마브레이블'))
console.log(iveM)
console.log('------------')

//pop 마지막 element 삭제 + 삭제값 반환
console.log(iveM.pop());
console.log(iveM);
console.log('------------')

//shift 첫번째 값 삭제 + 삭제값 반환
console.log(iveM.shift());
console.log(iveM);
console.log('------------')

//unshift 첫번째에 값 추가 + array 길이 반환
console.log(iveM.unshift('안유진'));
console.log(iveM);

console.log('------------')

//splice 삭제할 시작 index, 삭제할 갯수 ==> 삭제값 반환
console.log(iveM.splice(2, 2))

console.log('-------')

iveM = [
    '안',
    '가',
    '레이',
    '장',
    '리즈',
    '이서'
]

console.log(iveM)

console.log('-------')
//concat ==> 원래 array 변경하지 않음 vs push
console.log(iveM.concat('마브레이블'))
console.log(iveM)

//slice 삭제할 시작 index, 삭제할 이하 index ==> 삭제값 반환
console.log(iveM.slice(0, 3))//0,1,2 자르고 반환

console.log('-------')

//spread operator ...펼쳐서 값을 넣어라
let iveM2 = [
    ...iveM,
]
console.log(iveM2)

let iveM3 = [
    iveM
]
console.log(iveM3)

console.log('----')
let iveM4 = iveM;
console.log(iveM4 === iveM)


console.log([
    ...iveM,
] === iveM)


//join ==> array 를 join으로 엮을때
console.log(iveM.join())
console.log(typeof iveM.join())

console.log(iveM.join(', '))

const dash = '------'
console.log(dash);

//sort 오름차순, reverse 내림차순
iveM.sort();
console.log(iveM)
console.log(iveM.reverse())

let numbers = [
    1,
    5,
    8,
    9,
    2,
]
console.log(numbers);


//3:10:11

//sort
numbers.sort((a, b) => a > b ? -1 : 1)
console.log(numbers)

//map 모든값 순회

//filter true 일때 반환, false일때 keep

//find 해당하는 첫번째 값만 반환

//findIndex

//reduce

