document.addEventListener('DOMContentLoaded', function() {
    popClose();//팝업
    //tooltip();툴팁
    toggleScreenSaver();//사이드 메뉴 screen on/off
    calAreaActive();//상담예약 현황 일,주,월
    //tblFixPd();
    tblFixScroll();//상담예약 tbl-fix thead 간격
});

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


//사이드 메뉴 screen on/off
function toggleScreenSaver() {
    const screenSaverOff = document.getElementById('screen-saver-off');
    const screenSaverOn = document.getElementById('screen-saver-on');
    const switchElement = screenSaverOn.parentElement;

    screenSaverOff.addEventListener('change', function() {
        if (screenSaverOff.checked) {
            switchElement.classList.add('off');
        }
    });

    screenSaverOn.addEventListener('change', function() {
        if (screenSaverOn.checked) {
            switchElement.classList.remove('off');
        }
    });
}

//상담예약 현황 일,주,월
function calAreaActive(){    
    const cbodyAreas = document.querySelectorAll('.c-body .area');
    const calendarBtns = document.querySelectorAll('.btn-calendar-wrap button');

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
        })
    })    
}

//상담예약 tbl-fix thead 간격
function tblFixScroll(){
    if (document.querySelector('.con-calendar')) {
        const tblFixs = document.querySelectorAll('.tbl-fix')
        const contentsH = document.querySelector('.contents').offsetHeight;
        const contentsInnerH = contentsH - 80;
        const searchH = document.querySelector('.wrap-search').offsetHeight;
        const cHeaderH = document.querySelector('.c-header').offsetHeight;
        const tblTopH = document.querySelector('.c-body .tbl-top').offsetHeight;
        const margins = 40;
        const sumH = searchH + cHeaderH + tblTopH + margins;
        
        /*console.log(`contentsInnerH : ${contentsInnerH}`)
        console.log(`searchH : ${searchH}`)
        console.log(`cHeaderH : ${cHeaderH}`)
        console.log(`tblTopH : ${tblTopH}`)
        console.log(`sum : ${sumH}`)*/

        tblFixs.forEach((tblFix) =>{          
            const tblFixTheadH = tblFix.querySelector('thead').offsetHeight;
            const tblFixTbody = tblFix.querySelector('tbody')
            const tblFixTbodyH = tblFixTbody.offsetHeight;
            const tbodyMaxH = contentsInnerH - sumH - tblFixTheadH;

            /*console.log(`tbodyMaxH : ${tbodyMaxH}`)
            console.log(`tblFixTbodyH : ${tblFixTbodyH}`)*/

            if(tbodyMaxH < tblFixTbodyH){
                tblFixTbody.style.height = tbodyMaxH + 'px'
                tblFix.classList.add('pd2');
            }
        })
    }
}

