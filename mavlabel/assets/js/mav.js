const secIntro = document.querySelector('.section-intro');
const introTexts = secIntro.querySelectorAll('.txt-intro');
const intro01 = introTexts[0];
const intro02 = introTexts[1];
const secSlogan = document.querySelector('.section-slogan');
const sloganTexts = secSlogan.querySelectorAll('.txt-slogan')
const slogan01 = sloganTexts[0];
const slogan02 = sloganTexts[1];

//yet
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