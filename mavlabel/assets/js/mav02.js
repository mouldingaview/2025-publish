
gsap.registerPlugin(Draggable);

const dragBtn = document.querySelector('.drag-btn'); // 클래스 선택자로 변경
let threshold = 50; // 드래그 거리
let dragged = false; // 드래그 여부 체크

// 드래그 기능 적용
Draggable.create(dragBtn, {
  type: "y", // 세로 드래그 허용
  bounds: { minY: 0, maxY: threshold },
  onPress: function () {
    dragged = false; // 드래그 시작 시 초기화
  },
  onDrag: function () {
    dragged = true; // 드래그 발생하면 true
  },
  onRelease: function () {
    if (this.y >= threshold) {
      let link = dragBtn.getAttribute("href");
      let newTab = window.open(link, "_blank"); // 새 창에서 링크 열기

      if (!newTab) {
        alert("팝업이 차단되었습니다. 팝업 차단을 해제해주세요!");
      }

      gsap.to(dragBtn, { y: 0, duration: 0.2, ease: "bounce.out" });
    } else {
      gsap.to(dragBtn, { y: 0, duration: 0.2, ease: "elastic.out(1, 0.5)" });
    }
  }
});

// 클릭 시 새 창에서 열기
dragBtn.addEventListener("click", function (e) {
  if (!dragged) { // 클릭만 했을 경우
    e.preventDefault(); // 기본 링크 이동 막기
    let link = dragBtn.getAttribute("href");
    let newTab = window.open(link, "_blank"); // 새 창에서 링크 열기

    if (!newTab) {
      alert("팝업이 차단되었습니다. 팝업 차단을 해제해주세요!");
    }
  }
});


// 페이지 로드 후 실행
document.addEventListener("DOMContentLoaded", function(){
    sliceTextInit();
    mainIntro();

});

// ① 텍스트 슬라이스
function sliceTextInit() {
    const textElements = document.querySelectorAll('.txt-slice');
    if (textElements.length > 0) {
        textElements.forEach(sliceText);
    }
}

// ^텍스트 슬라이스
function sliceText(elem) {
	if (!elem) return;
	const text = elem.dataset.slice || '';
	elem.innerHTML = [...text].map((char) => `<span class='_char'>${char === ' ' ? '&nbsp;' : char}</span>`).join('');
}

// 인트로 애니메이션
function mainIntro() {
    //const introTexts = document.querySelectorAll('.txt-intro');
    const intro01 = document.querySelector('.txt-intro:first-child');
    const intro02 = document.querySelector('.txt-intro:nth-child(2)');
	const intro01Char = Array.from(intro01.querySelectorAll('._char'));
    const intro02Char = Array.from(intro02.querySelectorAll('._char'));    
    const heart = document.querySelector('.intro-heart');
    const heartImg = heart.querySelectorAll(':scope > img');   
    const heartScale = heart.querySelector('.heart-scale');
    const introWrap = document.querySelector('.intro-wrap');
    
    //인트로 텍스트 애니메이션
	const mainIntroTxtTl = gsap.timeline({
		defaults: { ease: 'none' },
	});

	mainIntroTxtTl
        // Intro slogan 01 애니메이션
        .set(intro01, { autoAlpha: 1 })
        .from(intro01Char, { 
            autoAlpha: 0, 
            y: 10, 
            ease: 'back(4)', 
            stagger: { amount: 0.8 } 
        })
        .to(intro01Char, { 
            rotation: () => Math.floor(Math.random() * 41) - 20, 
            y: -5, 
            ease: 'back(4)', 
            stagger: { amount: 0.3, from: 'start' } 
        })
        .to(intro01Char, { 
            autoAlpha: 0, 
            y: 0, 
            stagger: { amount: 0.3, from: 'random' } 
        })

        // Intro slogan 02 애니메이션
        .to(intro02, { autoAlpha: 1 }, '-=0.5') // 앞 애니메이션 끝나기 0.5초 전에 실행
        .from(intro02Char, { 
            autoAlpha: 0, 
            y: 10, 
            ease: 'back(4)', 
            stagger: { amount: 0.6 } 
        }, '<')
        .to(intro02Char, { 
            rotation: () => Math.floor(Math.random() * 41) - 20, 
            y: -5, 
            ease: 'back(4)', 
            stagger: { amount: 0.3, from: 'start', ease: 'back(2)' } 
        })
        .to(intro02Char, { 
            autoAlpha: 0, 
            y: 0, 
            scale: 1.2, 
            stagger: { amount: 0.2, from: 'random' } 
        });

		//gsap 문법
		// mainIntroTl.eventCallback('onComplete', ()=> {
 		// 	// 메인 슬로건 시작
		// 	mainSlogan();
		// 	// work thumbnail 등장
		// 	setTimeout(workThumbnailShow, 100);
		// });

        //하트 이미지 애니메이션
        const heartImgTl = gsap.timeline();
        heartImgTl.fromTo(heartImg, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" })
            .to(heart, { y: "-=60", duration: 0.8, ease: "power1.out" }) // 1초 후 y 이동
            .add(mainIntroTxtTl, "+=0.5")//애니메이션 중간에 실행해야할때
            .to(heartScale, {duration:1, scale:(200), ease: 'expo.inOut', delay:0.5})
            .to(introWrap, { autoAlpha:0 }, '<')//'<' 타임라인 포지셔닝 옵션 - 앞에 있는 애랑 같이 진행해 -- 나중에 빼기

}
