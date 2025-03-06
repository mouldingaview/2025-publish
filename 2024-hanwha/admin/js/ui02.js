document.addEventListener('DOMContentLoaded', function() {
    alarmToggle();//알림
    popClose();//팝업
    //tooltip();테이블 툴팁
    calAreaActive();//예약상담현황 일,주,월
    tblFixScroll()//상담예약 스크롤 ui    
    balloon()// 상담이력 상담메모 hover
    memoHandler('add');
    memoHandler('modify');    
    //tabToggle();//탭        
    tabAction();
    tabAction02();
});

//알림
function alarmToggle() {
    const alarmCont = document.getElementById('alarm-cont');
    const alarmBtn = document.getElementById('alarm-btn');
    
    if (alarmCont && alarmBtn) {
        const toggleAlarmBox = () => {
            alarmCont.classList.toggle('visible');
        }
        alarmBtn.addEventListener('click', toggleAlarmBox);
    }
}

//팝업 close
function popClose(){
    const popCloseBtns = document.querySelectorAll('.btn-pop-close');
    popCloseBtns.forEach((popCloseBtn) => {
        popCloseBtn.addEventListener('click', (event) => {
            const parentE = event.currentTarget.parentElement.parentElement.parentElement;
            parentE.style.display = 'none';
        })
    })
}

//툴팁 hover
/*function tooltip() {
    const tooltipWraps = document.querySelectorAll('.tooltip-wrap');
    tooltipWraps.forEach((tooltipWrap) => {
        tooltipWrap.addEventListener('mouseenter', (event) => {
            event.currentTarget.classList.add('active');
        });
        tooltipWrap.addEventListener('mouseleave', (event) => {
            event.currentTarget.classList.remove('active');
        });
    });
}*/

//예약상담현황 일,주,월
function calAreaActive() {
    const calendarWraps = document.querySelectorAll('.btn-calendar-wrap');

    calendarWraps.forEach((calendarWrap) => {
        const cbodyDiv = (calendarWraps.length > 1) 
            ? calendarWrap.closest('.c-cont')
            : calendarWrap.closest('.c-body');
        
        const calendarBtns = calendarWrap.querySelectorAll('button');
        const cbodyAreas = cbodyDiv.querySelectorAll('.area');
        
        calendarBtns.forEach((calendarBtn, index) => {
            calendarBtn.addEventListener('click', () => {
                cbodyAreas.forEach((area) => {
                    area.classList.remove('active');
                });
                calendarBtns.forEach((btn) => {
                    btn.classList.remove('active');
                });
                
                cbodyAreas[index].classList.add('active');
                calendarBtn.classList.add('active');
                tblFixScroll();
            });
        });
    });
}

//상담예약 tbl-fix thead 간격
function tblFixScroll(){
    if (document.querySelector('.con-calendar')) {
        const tblFixs = document.querySelectorAll('.tbl-fix')
        const contentsH = document.querySelector('.contents').offsetHeight;
        const contentsInnerH = contentsH - 80;
        const cHeaderH = document.querySelector('.c-header')?.offsetHeight || 0;
        const tblTopH = document.querySelector('.c-body .tbl-top')?.offsetHeight || 0;
        const searchH = document.querySelector('.wrap-search')?.offsetHeight || 0;
        const reserveTop = document.querySelector('.reserve-top')?.offsetHeight || searchH;//예약상담설정
        const btnWrap = document.querySelector('.btn-wrap')?.offsetHeight || 0;//예약상담설정 - 주
        const sumH = cHeaderH + tblTopH + (reserveTop ? reserveTop : searchH) + btnWrap

        //console.log(`contentsInnerH : ${contentsInnerH}`)
        //console.log(`searchH : ${searchH}`)
        //console.log(`cHeaderH : ${cHeaderH}`)
        //console.log(`tblTopH : ${tblTopH}`)
        //console.log(`sum : ${sumH}`)

        tblFixs.forEach((tblFix) =>{          
            const tblFixTheadH = tblFix.querySelector('thead').offsetHeight;
            const tblFixTbody = tblFix.querySelector('tbody')
            const tblFixTbodyH = tblFixTbody.offsetHeight;
            const tbodyMaxH = contentsInnerH - sumH - tblFixTheadH;

            //console.log(`tbodyMaxH : ${tbodyMaxH}`)
            //console.log(`tblFixTbodyH : ${tblFixTbodyH}`)

            if(tbodyMaxH < tblFixTbodyH){
                tblFixTbody.style.height = tbodyMaxH + 'px'
                tblFix.classList.add('pd2');
                //console.log(1)
                //console.log(`tbodyMaxH : ${tbodyMaxH}`)
                //console.log(`tblFixTbodyH : ${tblFixTbodyH}`)
            } else {
                //tblFixTbody.style.height = '${tbodyMaxH}'
                //tblFix.classList.remove('pd2');
                //console.log(2)
                //console.log(`tbodyMaxH : ${tbodyMaxH}`)
                //console.log(`tblFixTbodyH : ${tblFixTbodyH}`)
            }
        })
    }
}

// 상담이력 상담메모 hover
function balloon() {
    const balloonWraps = document.querySelectorAll('.balloon-wrap');
    balloonWraps.forEach((balloonWrap) => {
        if (balloonWrap){
            balloonWrap.addEventListener('mouseenter', (event) => {
                event.currentTarget.classList.add('active');
            });
            balloonWrap.addEventListener('mouseleave', (event) => {
                event.currentTarget.classList.remove('active');
            });
        }
    })
}

//상담이력 상세 - 상담 메모
function memoHandler(mode) {
    const memoBtn = document.getElementById(mode === 'add' ? 'input-add' : 'input-modify');
    const memoSaveBtn = document.getElementById('btn-modify-save');
    const memoLis = document.querySelectorAll('.memo-wrap ul li');

    if(memoBtn){
            memoBtn.addEventListener('click', (m) => {
            const targetSection = m.currentTarget.closest('.balloon-wrap');
            const previousSibling = targetSection ? targetSection.previousElementSibling : null;

            if (mode === 'add') {
                if (previousSibling) {
                    previousSibling.style.display = 'flex';
                    previousSibling.querySelector('input').focus();
                }

                memoLis.forEach((memoLi) => {
                    memoLi.querySelector('.value').style.display = 'block';
                    memoLi.querySelector('.input-wrap').style.display = 'none';
                });

                if (memoSaveBtn) {
                    memoSaveBtn.style.display = 'none';
                }

            } else if (mode === 'modify') {
                if (previousSibling) {
                    previousSibling.style.display = 'none';
                }

                memoLis.forEach((memoLi) => {
                    memoLi.querySelector('.value').style.display = 'none';
                    memoLi.querySelector('.input-wrap').style.display = 'flex';
                });

                if (memoSaveBtn) {
                    memoSaveBtn.style.display = 'block';
                }
            }
        });
    }
}

//설문결과 탭

// function setupTabs(tabWrap) {
//     const buttons = tabWrap.querySelectorAll('.tab-btn button');
//     const tabInners = tabWrap.querySelectorAll('.tab-inner');

//     // 각 버튼에 클릭 이벤트 리스너 추가
//     buttons.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             // 모든 tab-inner에서 active 클래스 제거
//             tabInners.forEach(inner => inner.classList.remove('active'));
//             // 모든 버튼에서 active 클래스 제거
//             buttons.forEach(btn => btn.classList.remove('active'));

//             // 클릭한 버튼의 인덱스에 해당하는 tab-inner에 active 클래스 추가
//             tabInners[index].classList.add('active');
//             button.classList.add('active');
//         });
//     });

//     // 페이지 로드 시 첫 번째 버튼과 첫 번째 tab-inner에 active 클래스 추가
//     if (buttons.length > 0 && tabInners.length > 0) {
//         buttons[0].classList.add('active');
//         tabInners[0].classList.add('active');
//     }
// }

// 모든 tab-wrap 요소에 대해 setupTabs 함수 호출
// function tabToggle(){
//     const tabWraps = document.querySelectorAll('.tab-wrap');
//     tabWraps.forEach(tabWrap => {
//         setupTabs(tabWrap); // 외부 탭 셋업

//         // 내부 tab-wrap을 찾아서 setupTabs 재귀 호출
//         const innerTabWraps = tabWrap.querySelectorAll('.tab-wrap');
//         innerTabWraps.forEach(innerTabWrap => {
//             setupTabs(innerTabWrap); // 내부 탭 셋업
//         });
//     });
// }


function tabAction() {
    const tabWrap = document.querySelector('.tab-wrap');

    if (tabWrap) {
        document.querySelector('.tab-btn button').classList.add('active');
        document.querySelector('.tab-cont .tab-inner').classList.add('active');
        const buttons = document.querySelectorAll('.tab-btn button');
        const tabInners = document.querySelectorAll('.tab-cont .tab-inner');
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                tabInners.forEach(tabInner => tabInner.classList.remove('active'));
                
                button.classList.add('active');
                if (tabInners[index]) {
                    tabInners[index].classList.add('active');
                }
            });
        });
    }
}
function tabAction02() {
    const tabWrap = document.querySelector('.tab-wrap02');
    if (tabWrap) {
        document.querySelector('.tab-btn02 button').classList.add('active');
        document.querySelector('.tab-cont02 .tab-inner02').classList.add('active');
        const buttons = document.querySelectorAll('.tab-btn02 button');
        const tabInners = document.querySelectorAll('.tab-cont02 .tab-inner02');
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                tabInners.forEach(tabInner => tabInner.classList.remove('active'));
                
                button.classList.add('active');
                if (tabInners[index]) {
                    tabInners[index].classList.add('active');
                }
            });
        });
    }
}