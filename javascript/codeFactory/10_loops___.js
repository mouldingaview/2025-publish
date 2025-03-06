/*
loops
1) for
2) while
*/
//for(변수; 조건; 행동)
/*for (let i = 0; i < 10; i++){
    console.log(i)
}

for(let i = 10; i > 0; i--){
    console.log(i)
}*/

//* 를 이용해서 6*6 사각형만들기
let square = '';
let side = 6;

for(let i = 0; i < side; i++){
    for(let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}
console.log(square)

/*
for .. in : 인덱스 가져옴
 */
const yj = {
    name : 'ㅇㅇㅈ',
    year: 2003,
}

//object 는 key 값을 받음
for(let key in yj){
    console.log(key);
}

console.log('-----------')

//array 에서는 인덱스 값 받음
const iveMArray = ['o', 'ㄹ']
for (let key in iveMArray){
    //console.log(key);
    console.log(`${key} : ${iveMArray[key]}`)
}

console.log('-----------')
/*
for ..of : 값 가져옴
*/
for(let value of iveMArray){
    console.log(value)
}

/* while */
let number = 0;
while(number < 10){
    number ++;
}
console.log(number);

/* break */

/* continue ==> skip */