//object key: value
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
        return `${this.name} 춤춰` //return '안유진 춤춰'
    }
}

console.log(yuJin)
console.log(yuJin.name) //같은 표현
console.log(yuJin['name'])

const key = 'name';
console.log(yuJin[key]);//key 에 해당하는 value

console.log(yuJin.dance());

const nameKey = "name";
const nameValue = "안유진";
const groupKey = "group";
const groupValue = "아이브";

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance: function(){
        return `${this.name} 이 춤춰`
    }
}

console.log(yuJin2)
console.log(yuJin2.dance())

yuJin2['group'] = '마브레이블';
console.log(yuJin2);
yuJin2['englishName'] = 'An'
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2)

/*
객체특정 : const 선언한 경우 객체 자체 변경불가, 객체 안의 property, method 변경 가능
*/

//모든키값 가져오기
const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(Object.keys(wonYoung));
console.log(Object.values(wonYoung));

const nameis = "안유진";
const yuJin3 = {
    //nameis: nameis ==> key 와 value 가 같을 경우 단일 선언 가능
    nameis
}

console.log(yuJin3)