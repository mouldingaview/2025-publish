// setting smooth scrollbar 

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('#container');
const Scrollbar = window.Scrollbar;
const scrollbar = Scrollbar.init(container, {
  damping: 0.05,
  alwaysShowTracks: false,
});

ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value;
    }
    return scrollbar.scrollTop;
  },
});

scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({scroller: container});


// 커서 이미지
const cursor = document.querySelector('#cursor');
let cursorX = 0;
let cursorY = 0;

// 커서 이벤트
window.addEventListener('mousemove', function(e){
  cursorX = e.clientX - cursor.offsetWidth / 2 ;
  cursorY = e.clientY - cursor.offsetHeight / 2 ;
  cursorMove();
});

function cursorMove() {
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
}

const gnbMenus = document.querySelectorAll('.new-header .nav a'); // header gnb
const workItems = document.querySelectorAll('.work-list a.item-work'); // work item
const magazineItems = document.querySelectorAll('.magazine-wrap .article'); // magazine 
const cursorLinks = document.querySelectorAll('._cursor-link'); // 링크 커서 (퀵메뉴)

function addCursorImage(selector, cursorClass) {
  selector.forEach((item) => {
    item.addEventListener('mouseenter', () => cursor.classList.add(cursorClass));
    item.addEventListener('mouseleave', () => cursor.classList.remove(cursorClass));
  });
}

addCursorImage(gnbMenus, 'cursor-style02');
addCursorImage(workItems, 'cursor-style03');
addCursorImage(magazineItems, 'cursor-hide');
addCursorImage(cursorLinks, 'cursor-link'); // cursor-link ? cursor-hide ?

/////////////////////////////////////////////////////////
/// Footer
/////////////////////////////////////////////////////////

// Go To Top
const topButton = document.querySelector('.btn-scrollTop');
topButton.addEventListener('click',() => {
  scrollbar.scrollTo(0, 0 , 600);
});

// footer animation
const footer = document.querySelector('.new-footer');
const footerCopy = footer.querySelector('.footer-animation .footer-copy');
const footerCopyText = footerCopy.querySelectorAll('._char');

let ftCenter = 0;
let ftCharX = 0;
const copySpeed = 0.1;

document.addEventListener('mousemove', ()=> {
  // cursorX 전역 변수 (커서 이벤트와 공통 적용)
  footerCopyMove();
})

// Footer 텍스트 애니메이션
function footerCopyMove(){
  footerCopyText.forEach((item, index) => {
    ftCenter = cursorX - window.innerWidth / 2;
    ftCharX += (ftCenter - ftCharX) * copySpeed;
    item.style.transform = `translateX(${ftCharX / 25}px) rotateY(${ftCenter * 0.07}deg)`;
  })
}

const footerCopyTl = gsap.timeline();
footerCopyTl.fromTo(footerCopyText, 
	{scaleY: 0},
	{duration: .3, scaleY: 1, ease: 'back(1)', stagger: {amount: .5, ease: 'power3.inOut'}}
)

ScrollTrigger.create({
	trigger: footer,
	start: 'top 40%',
	animation: footerCopyTl,
	toggleActions: 'restart none restart none'
});



/////////////////////////////////////////////////////////
/// floating menu (퀵메뉴, 30주년)
/////////////////////////////////////////////////////////
// 퀵메뉴 
const quickmenu = document.querySelector('.floating-quickmenu');
const quickmenuLayer = quickmenu.querySelector('.quickmenu-layer');
// const quickmenuLayerBg = quickmenu.querySelector('.quickmenu-layer .bg');
const btnOpenQuick = quickmenu.querySelector('#quickmenu-open');
const btnCloseQuick = quickmenu.querySelector('#quickmenu-close');

btnOpenQuick.addEventListener('click', ()=>{
	quickmenu.classList.add('_opened');
});

btnCloseQuick.addEventListener('click', ()=>{
	quickmenu.classList.remove('_opened');
});

// 30주년
const anniv30th = document.querySelector('.floating-anniversary');
const anniv30thLayer = anniv30th.querySelector('.anniv-layer');
const anniv30thLayerBg = anniv30th.querySelector('.anniv-layer .bg');
const btnOpen30th = anniv30th.querySelector('#anniv-open');
const btnClose30th = anniv30th.querySelector('#anniv-close');

const anniv30Tl = gsap.timeline({paused: true});
anniv30Tl.from(anniv30thLayerBg, {xPercent: 100, ease: 'power3.inOut',});

btnOpen30th.addEventListener('click', ()=>{
	anniv30th.classList.add('_opened');
	anniv30Tl.play();
});
btnClose30th.addEventListener('click', ()=>{
	anniv30Tl.reverse();
	setTimeout(()=>{
		anniv30th.classList.remove('_opened');
	}, 300);
});

