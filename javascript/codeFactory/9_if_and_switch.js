/*
if and switch
*/
let number = 5;
if(number % 2 === 0){

} else {
    console.log('바보야')
}

const englishDay = 'monday';
let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wendesday':
        koreanDay = '수요일';
        break;
    default :
        koreanDay = '주말';
        break;
}
console.log(koreanDay)