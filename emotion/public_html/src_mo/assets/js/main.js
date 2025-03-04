console.log('main-work');
gsap.registerPlugin(ScrollTrigger);

/////////////////////////////////////////////////////////
/// section01 Intro & Slogan
/////////////////////////////////////////////////////////

const secIntro = document.querySelector('.section-intro');
const introTexts = secIntro.querySelectorAll('.slice-text');
const intro01 = secIntro.querySelector('.txt-intro01');
const intro02 = secIntro.querySelector('.txt-intro02');

const secSlogan = document.querySelector('.section-slogan');
const sloganTexts = secSlogan.querySelectorAll('.slice-text');
const slogan01 = secSlogan.querySelector('.txt-slogan01');
const slogan02 = secSlogan.querySelector('.txt-slogan02');

// ① 텍스트 슬라이스
window.addEventListener('DOMContentLoaded', function () {
	// 인트로 텍스트
	introTexts.forEach(line => {
		sliceText(line);
	});
	sloganTexts.forEach(line => {
		sliceText(line);
	});

	window.scrollTo(0, 0);
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
		.to(intro02, { autoAlpha: 1 }, '-=.5')
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
			{duration:1, scale:(200), ease: 'expo.inOut'}, '<' )
		.to('#main-intro', {autoAlpha: 0}, '<')


		mainIntroTl.eventCallback('onComplete', ()=> {
			// 메인 슬로건 시작
			mainSlogan(); //@@
			window.scrollTo(0, 0);
			document.querySelector('.main-html').style.overflow = 'initial';
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
const busiTimeUnit = 1000 * .5;

// 1차 itemsTop Array 생성 후 timeline, scrollTrigger 생성
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
		{y: window.innerHeight}, 
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
	end: () => `+=${(window.innerHeight * 0.5) * 3}`,
	animation: busiTimeline,
	pin: true,
	scrub: true,
})

// 메인텍스트
ScrollTrigger.create({
	trigger: secBusiness,
	start: 'top 50%',
	end: () => `+=${(window.innerHeight * 0.5) * 1.5}`,
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
	// busiListItemActive();
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
/// Common
/////////////////////////////////////////////////////////
const header = document.querySelector('.new-header');
const headerInner = header.querySelector('.new-header-inner');

let scrollY = 0;

window.addEventListener('scroll', ()=>{
	scrollY = window.scrollY;

})

/* Go To Top */
const topButton = document.querySelector('.btn-scrollTop');
topButton.addEventListener('click',() => {
  window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
})

/* Footer */
const footer = document.querySelector('.new-footer');
const footerCopy = footer.querySelector('.footer-animation .footer-copy');
const footerCopyText = footerCopy.querySelectorAll('._char');

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


/* 퀵메뉴 */ 
const floatingMenu = document.querySelector('.floating-menu');
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

/* 30주년 */
const anniv30th = document.querySelector('.floating-anniversary');
const anniv30thLayer = anniv30th.querySelector('.anniv-layer');
const anniv30thLayerBg = anniv30th.querySelector('.anniv-layer .bg');
const btnOpen30th = anniv30th.querySelector('#anniv-open');
const btnClose30th = anniv30th.querySelector('#anniv-close');

const anniv30Tl = gsap.timeline({paused: true});
anniv30Tl.from(anniv30thLayerBg, {xPercent: 100, ease: 'power3.inOut',});

btnOpen30th.addEventListener('click', ()=>{
	anniv30th.classList.add('_opened');
	floatingMenu.style.zIndex = 103;
	anniv30Tl.play();
});
btnClose30th.addEventListener('click', ()=>{
	anniv30Tl.reverse();
	setTimeout(()=>{
		anniv30th.classList.remove('_opened');
		floatingMenu.style.zIndex = '';
	}, 300);
});

// Header AllMenu 테스트를 위한 임시 스크립트
const btnOpenAllmneu = document.querySelector('#open-allmenu');
const btnCloseAllmneu = document.querySelector('#close-allmenu');
const allMenu = document.querySelector('.allmenu-wrap');

btnOpenAllmneu.addEventListener('click', ()=>{
	allMenu.classList.add('_opened')
});

btnCloseAllmneu.addEventListener('click', ()=>{
	allMenu.classList.remove('_opened')
});