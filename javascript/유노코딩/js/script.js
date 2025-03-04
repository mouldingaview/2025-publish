//함수 선언식 - 처음 만들때 부터 이름을 붙여줌 - 함수호출 위아래 가능
/*function name(){
}*/
//함수 표현식 - 익명함수에 이름을 붙여줌 - 함수호출이 function 다음에
/*const name2 = function(){
}*/

//함수 내부 선언된 변수는 함수밖에서 쓸수 없다  -  지역변수


const spans = document.querySelectorAll('span')
const contents = document.querySelectorAll('.content')
const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thirdTop = contents[2].offsetTop

spans[0].onclick = function(){
    window.scroll({top:firstTop, behavior:'smooth'})
}

spans[1].onclick = function(){
    window.scroll({top:secondTop, behavior:'auto'})
}

spans[2].onclick = function(){
    window.scroll({top:thirdTop, behavior:'smooth'})
}