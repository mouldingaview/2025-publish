console.log('main-work');

/////////////////////////////////////////////////////////
/// Header
/////////////////////////////////////////////////////////
const header = document.querySelector('.new-header');
const headerInner = header.querySelector('.new-header-inner');

let scrollY = 0;

// scroll Event
scrollbar.addListener((data) => {
	scrollY = data.offset.y;//smoothscrollbar 문법

	if (scrollY > 100) {
		header.classList.add('header-fixed');
	} else {
		header.classList.remove('header-fixed');
	}
});

/////////////////////////////////////////////////////////
/// section01 Intro & Slogan
/////////////////////////////////////////////////////////

const secIntro = document.querySelector('.section-intro');
const introTexts = secIntro.querySelectorAll('.txt-intro');
const intro01 = introTexts[0];
const intro02 = introTexts[1];
const secSlogan = document.querySelector('.section-slogan');
const sloganTexts = secSlogan.querySelectorAll('.txt-slogan')
const slogan01 = sloganTexts[0];
const slogan02 = sloganTexts[1];

// ① 텍스트 슬라이스
window.addEventListener('DOMContentLoaded', function () {
	// 인트로, 슬로건 텍스트
	[intro01, intro02, slogan01, slogan02].forEach(line => {
		sliceText(line);
	});
});

// ② 텍스트 애니메이션
setTimeout(mainIntro, 50);

// 인트로 애니메이션
function mainIntro() {
	const introBg = document.querySelector('.section-intro .intro-bg')
	const intro01Char = intro01.querySelectorAll('._char');
	const intro02Char = intro02.querySelectorAll('._char');
	const mainIntroTl = gsap.timeline({
		defaults: { ease: 'none' },
	});
	mainIntroTl
		// intro slogan 01
		.set(intro01, { autoAlpha: 1 })
		.from(intro01Char,{
				autoAlpha: 0,
				y: 10,
				ease: 'back(4)',
				stagger: {
					amount: .8,
				},
			}, 0)
		.to(intro01Char, {
				rotation: () => Math.floor(Math.random() * 41) - 20,
				// rotation: 10,
				y: -5,
				ease: 'back(4)',
				stagger: {
					amount: 0.3,
					from: 'start',
				},
			}, )
		.to(intro01Char, {
			autoAlpha: 0,
			y: 0,
			stagger: {
				amount: 0.3,
				from: 'random',
			},
		})
		// intro slogan 02
		.to(intro02, { autoAlpha: 1 }, '-=.5')//앞 애니가 끝나기 -.5 전에 실행
		.from(intro02Char, {
				autoAlpha: 0,
				y: 10,
				ease: 'back(4)',
				stagger: {
					amount: .6,
				},
			}, '<' )
		.to( intro02Char, {
				rotation: () => Math.floor(Math.random() * 41) - 20,
				y: -5,
				ease: 'back(4)',
				stagger: {
					amount: 0.3,
					from: 'start',
					ease: 'back(2)'},
			})
		.to(intro02Char, {
			autoAlpha: 0,
			y: 0,
			scale: 1.2,
			stagger: {
				amount: 0.2,
				from: 'random',
			},
		})
		.fromTo(introBg,
			{scale: 0}, 
			{duration:1, scale:(200), ease: 'expo.inOut'}, '<' )//'<' 타임라인 포지셔닝 옵션 - 앞에 있는 애랑 같이 진행해
		.to('#main-intro', {autoAlpha: 0}, '<')//'<' 타임라인 포지셔닝 옵션 - 앞에 있는 애랑 같이 진행해


		//gsap 문법
		mainIntroTl.eventCallback('onComplete', ()=> {
 			// 메인 슬로건 시작
			mainSlogan();
			// work thumbnail 등장
			setTimeout(workThumbnailShow, 100);
		});
}

// 슬로건 애니메이션
function mainSlogan() {
	const slogan01Char = slogan01.querySelectorAll('._char');
	const slogan02Char = slogan02.querySelectorAll('._char');
	const mainSloganTl = gsap.timeline({
		defaults: { ease: 'none' },
		repeat: -1,
	});
	mainSloganTl
		// slogan 01
		.to(slogan01, { duration:0.3, autoAlpha: 1 })
		.from(slogan01Char,{
				autoAlpha: 0,
				y: 10,
				ease: 'back(4)',
				stagger: {
					amount: 1,
					from: 'random',
					// ease: 'none'
				},
			}, 0)
		.to(slogan01Char, {
				rotation: () => Math.floor(Math.random() * 41) - 20,
				// rotation: 10,
				y: -5,
				yoyo: true,
				repeat: 1,
				ease: 'back(4)',
				stagger: {
					amount: 0.8,
					from: 'start',
				},
			}, '+=1')
		.to(slogan01Char, {
			autoAlpha: 0,
			y: 0,
			scale: 1.2,
			stagger: {
				amount: 0.5,
				from: 'random',
			},
		})
		// slogan 02
		.to(slogan02, { autoAlpha: 1 }, '-=.5')
		.from(slogan02Char, {
				autoAlpha: 0,
				y: 10,
				// rotation: 10,
				ease: 'back(4)',
				stagger: {
					amount: 1,
					from: 'random',
				},
			}, '<' )
		.to( slogan02Char, {
				rotation: 10,
				y: -5,
				yoyo: true,
				repeat: 1,
				ease: 'back(4)',
				stagger: {
					amount: 0.5,
					from: 'start',
					ease: 'back(2)',
				},
			}, '+=1')
		.to(slogan02Char, {
			autoAlpha: 0,
			y: 0,
			scale: 1.2,
			stagger: {
				amount: 0.3,
				from: 'random',
			},
		});
}

// 텍스트 슬라이스
function sliceText(elem) {
	if (!elem) return;

	const text = elem.dataset.slice || '';
	elem.innerHTML = [...text].map((char) => `<span class='_char'>${char === ' ' ? '&nbsp;' : char}</span>`).join('');
}

// work 썸네일 등장
const workPrevItem = document.querySelectorAll('.work-thumbnail .item');

gsap.set(workPrevItem, {autoAlpha: 0});

function workThumbnailShow() {
	const tl = gsap.timeline();
	tl.fromTo(workPrevItem, {
		autoAlpha: 0,
		y: 300,
	}, {
		autoAlpha: 1,
		y: 0,
		stagger: .1
	})

	return tl;
}


/////////////////////////////////////////////////////////
/// section 02 Work 
/////////////////////////////////////////////////////////

const secWork = document.querySelector('.section-work');
const secWorkCont = secWork.querySelector('.section-work-inner');
const workListWrap = secWork.querySelector('.work-list');
const workList = workListWrap.querySelector('ul');
const workItem = workList.querySelectorAll('li');
const itemNum = workItem.length;

let secWorkHeight = secWork.offsetHeight;
let secWorkContHeight = secWorkCont.offsetHeight;
let listWidth = workList.scrollWidth;
let listHeight = workList.offsetHeight;
let itemWidth = workItem[1].offsetWidth;
let itemHeight = workItem[1].offsetHeight;
let itemSpace = ((listWidth - itemWidth * itemNum) / (itemNum - 1));
let sideItemWidth = (window.innerWidth - 160 - itemSpace * 2 - itemWidth) / 2; // 160 좌우 padding

let itemMoveX = 0;
let itemCount = 0;

const moveYPerItem = 500;

secWork.style.paddingBottom = `${moveYPerItem * (itemNum - 3 )}px`;

let startY, endY;
let isMoving = false;

// setWorkItemsSize(); 
setTimeout(setWorkItemsSize, 100);

function setWorkItemsSize(){

	secWorkHeight = secWork.offsetHeight;
	secWorkContHeight = secWorkCont.offsetHeight;
  	listWidth = workList.scrollWidth;
	listHeight = workList.offsetHeight;
  	itemWidth = workItem[1].offsetWidth;
	itemHeight = workItem[1].offsetHeight;
  	itemSpace = ((listWidth - itemWidth * itemNum) / (itemNum - 1));
	startY = secWork.offsetTop - (window.innerHeight - secWorkContHeight);
	endY = startY + (moveYPerItem * (itemNum - 3));
	sideItemWidth = Math.round((window.innerWidth - 160 - itemSpace * 2 - itemWidth) / 2);

  	workList.style.left = `-${ itemWidth - sideItemWidth }px`;
}

// smooth scrollbar Event
scrollbar.addListener(() => {
	workSectionScroll();
	workListMove();
});

window.addEventListener('resize', ()=>{
	setTimeout(()=>{
		setWorkItemsSize();
		workListMove();
		prevItemsCreateST(); // work 썸네일 진입
	}, 500)
});

// 스크롤
function workSectionScroll(){
	startY = secWork.offsetTop - (window.innerHeight - secWorkContHeight);
	endY = startY + (moveYPerItem * (itemNum - 3));

	// secWork Show/Hide
	if (scrollY >= startY && scrollY < (endY + window.innerHeight) ) {
		secWork.classList.add('_active');
	} else {
		secWork.classList.remove('_active');
	}

	// secWork fixed
	if (scrollY >= startY && scrollY < endY ) {
		workListFix();
	}

}

// section-work fixed ★ (smooth scrollbar 이슈 )
function workListFix(){
	secWorkCont.style.transform = `translateY(${scrollY - startY}px)`;
}

// 리스트 이동
function workListMove(){

	if(scrollY < startY || scrollY > endY ) return;

	const moveCount = Math.round((scrollY - startY)/moveYPerItem);

	if (moveCount === itemCount) return;

	isMoving = true;
	itemCount = moveCount;

	const workTween = gsap.timeline({
		onStart: workScrollStart,
		onComplete: workScrollEnd
	});
	workTween.to(workList, {
		duration: .6, x: () => -(itemWidth + itemSpace) * itemCount, ease: 'power3.inOut' 
	})
}

function workScrollStart(){
	isMoving = true;
	scrollbar.setMomentum(0, 0); // 스크롤 잠시 멈춤

	workItem.forEach(item => item.classList.remove('active'));
	workItem[itemCount+1].classList.add('active');
}

function workScrollEnd(){
	isMoving = false;
}

// Work List 진입 (Work prev.)
const prevWork = document.querySelector('.work-prev');
const prevItems = prevWork.querySelectorAll('.work-thumbnail ul li');

let prevItemsST;

function prevItemsEnterToList() {
	const tl = gsap.timeline();

	tl.fromTo(prevItems, {
		y: () => window.innerHeight - 90 - 40,
		height: 90,
		width: 137,
	}, {
		y: () => window.innerHeight * 1.5 - itemHeight / 2,
		height: () => itemHeight,
		width: (i) => (i % 2) ? itemWidth : sideItemWidth,
		marginLeft: (i) => (i % 2) ? itemSpace : 0,
		marginRight: (i) => (i % 2) ? itemSpace : 0,
		stagger: 0.03
	})
	.set(prevItems, { autoAlpha: 0 });

	return tl;
}

prevItemsCreateST();

function prevItemsCreateST() {

	if (prevItemsST) prevItemsST.kill();

	prevItemsST = ScrollTrigger.create({
		trigger: '.work-prev',
		start: 'top top',
		end: () => `+=${window.innerHeight}`,
		scrub: true,
		animation: prevItemsEnterToList(),
		ease: 'none',
	});
}


/////////////////////////////////////////////////////////
// section 03 Business
/////////////////////////////////////////////////////////
const secBusiness = document.querySelector('.section-business');
const busiSections = secBusiness.querySelectorAll('.sec');
const busiTextSection = busiSections[0];
const busiListSection = busiSections[1];
// 비지니스 텍스트 영역
const busiTextWrap = secBusiness.querySelector('.business-cont .text-wrap');
const busiTextMain = busiTextWrap.querySelector('.txt-main');
const busiTextMainLines = busiTextMain.querySelectorAll('._line');
const busiTextSub = busiTextWrap.querySelector('.txt-sub');
const busiTextSubLines = busiTextSub.querySelectorAll('div');
// 비지니스 리스트 영역
const busiListWrap = secBusiness.querySelector('.business-cont .list-wrap');
const busiList = busiListWrap.querySelector('ul');
const busiListItems = busiList.querySelectorAll('li');

// itemsTop Array 생성 후 timeline, scrollTrigger 생성
let arrItmsTop = [];
setItmsTop();

function setItmsTop(){
	arrItmsTop = [];
	busiListItems.forEach(item =>{
		arrItmsTop.push(item.offsetTop);
	});
}

const busiTimeline = gsap.timeline();
busiTimeline.set(busiTextSection, {autoAlpha:1})
	.fromTo(busiList,
		{y:()=> window.innerHeight }, 
		{y: (_, tg) => -(tg.offsetHeight - window.innerHeight),
			duration: 6,
			ease: 'none',
			onUpdate: busiListItemActive,
		}, 2);

// 비지니스 텍스트 
const busiMainTxt = gsap.timeline();
busiMainTxt
.from(busiTextMainLines, {autoAlpha: 0, y: 50, ease: 'back(3)', stagger: {amount: .6, ease: 'none'}})
.from(busiTextSubLines, {autoAlpha: 0, y: 50, stagger: 0.2, ease: 'back(3)'})
.to([busiTextMainLines, busiTextSubLines], {autoAlpha:0, stagger:{amount: .75}}, '+=1')

// 전체 고정 & 직무리스트
ScrollTrigger.create({
	trigger: secBusiness,
	start: 'top top',
	end: ()=> `+=${(window.innerHeight * 0.5) * 3}`,
	animation: busiTimeline,
	pin: true,
	scrub: true,
})

// 메인텍스트
ScrollTrigger.create({
	trigger: secBusiness,
	start: 'top 50%',
	end: ()=> `+=${(window.innerHeight * 0.5) * 1.5}`,
	animation: busiMainTxt,
	scrub: true
})

// active 체크
function busiListItemActive(){
	let index = 0;
	let listTop = Math.round(busiList.getBoundingClientRect().top);
	// const listHeight = busiList.offsetHeight;
	const itemHeight = busiListItems[0].offsetHeight;
	const listPos = -(listTop - window.innerHeight/2);

	if( listPos < -itemHeight ) {
		busiListItems.forEach(li => li.classList.remove('_active'));
	} else {
		arrItmsTop.forEach((itm, idx) => {
			if(listPos > itm ){
				index = idx;
			}
		})
		activeItem(index);
	}

	function activeItem(index) {
		busiListItems.forEach(li => li.classList.contains('_active') && li.classList.remove('_active'));
		busiListItems[index].classList.add('_active');
	}
}

// 리사이징
window.addEventListener('resize', ()=>{
	setItmsTop();
});


/////////////////////////////////////////////////////////
/// section04 Magazine
/////////////////////////////////////////////////////////

const secMagazine = document.querySelector('.section-magazine');
const magList = secMagazine.querySelector('.item-list');
const articles = magList.querySelectorAll('.article');
const articleContLine = magList.querySelectorAll('.cont-area ul li');

const articleEnter = gsap.timeline();

// 매거진 아이템 등장
articleEnter.from(articles, {
	autoAlpha: 0,
	yPercent: 15,
	stagger: {
		each: 0.2,
	},
});

ScrollTrigger.create({
	trigger: '.section-magazine',
	start: 'top 80%',
	animation: articleEnter,
	toggleActions: 'restart none restart none',
	toggleClass: { targets: articles, className: '_active' },
});


/////////////////////////////////////////////////////////
/// Floating Section Link
/////////////////////////////////////////////////////////

const mainSections = document.querySelectorAll('.section-main');
const floatSecLinks = document.querySelector('.main-floating-section-link');
const floatSecLink = document.querySelectorAll('.main-floating-link');

mainSections.forEach((section) => {
	if (!section.dataset.link) return;

	const tgLink = `link-${section.dataset.link}`;
	const tgBtn = floatSecLinks.querySelector(`.${tgLink}`);

	ScrollTrigger.create({
		trigger: section,
		start: 'top 80%',
		end: 'bottom 90%',
		toggleActions: 'restart reverse restart reverse',
		// 버튼 등장
		animation: gsap.timeline().to(tgBtn, { duration: 0.3, autoAlpha: 1 }).from(tgBtn, { duration: 0.4, y: 100, ease: 'back.out(4)', immediateRender: false }, 0),
	});
});


/////////////////////////////////////////////////////////
/// Main Elems Fixed 
/////////////////////////////////////////////////////////

// Main Section Link 
const fixedElem = document.querySelector('.fixed-wrap');
scrollbar.addListener( status => {
  const offset = status.offset;
	fixedElem.style.transform = `translateY(${offset.y}px)`
	
})
