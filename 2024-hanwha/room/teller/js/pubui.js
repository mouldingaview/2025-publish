//퍼블용
//사이드메뉴 클릭시 확장
const asideBtns = document.querySelectorAll('.aside-wrap button');
const asideEx = document.querySelector('.aside-ex')
const btnCloseEx = document.querySelector('.btn-close-ex')
const exCont = document.querySelector('.aside-ex .ex-cont')

asideBtns.forEach((asideBtn, index) => {
    asideBtn.addEventListener('click', (ct) => {
        // 현재 클릭된 버튼의 부모 <li>
        const currentLi = ct.target.closest('li');
        
        // 모든 <li>에서 'on' 클래스를 제거
        asideBtns.forEach(b => {
            const li = b.closest('li');
            if (li && li !== currentLi) {
                li.classList.remove('on');
            }
        });

        // 현재 클릭된 <li>의 'on' 클래스를 토글
        if (currentLi && currentLi.classList.contains('on')) {
            currentLi.classList.remove('on');
            asideEx.classList.remove('show');
            exCont.innerHTML = ""; // 콘텐츠 제거
        } else {
            currentLi.classList.add('on');
            if (index < 3) {
                asideEx.classList.add('show');  
                // HTML 파일 로드
                const className = currentLi.className;
                const match = className.match(/menu(\d+)/); // 'menu' 뒤의 숫자를 추출합니다
                const number = match ? parseInt(match[1], 10) : null;
                if (number !== null && number < 4) {
                    fetch(`../html/00.ad-ex-cont0${number}.html`)
                        .then(response => {
                            if (!response.ok) {
                                //throw new Error('Network response was not ok.');
                            }
                            return response.text();
                        })
                        .then(html => {
                            exCont.innerHTML = html;
                            exCont.style.display = "flex"
                        })
                        .catch(error => {
                            //console.error('Fetch error:', error);
                        });
                }
            } else {
                if (asideEx.classList.contains('show')) {
                    asideEx.classList.remove('show');
                    exCont.innerHTML = ""; // 콘텐츠 제거
                } 
            }
        }  
    });
});

//퍼블용
//aside-ex 닫기버튼 눌렀을  때 
btnCloseEx.addEventListener('click', () => {
    asideEx.classList.remove('show');
    //document.querySelectorAll('.aside-wrap li').forEach(li => li.classList.remove('on'));
});

//퍼블용
const tabWraps = document.querySelectorAll('.tab-wrap')
tabWraps.forEach(tabWrap => {
    const tabs = tabWrap.querySelectorAll('.tab-style01 li');
    const tabCont = tabWrap.querySelector('.tab-cont');

    fetch('../html/00.ad-tab-cont01.html')
        .then(response => response.text())
        .then(html => {
            if (tabCont) {
                tabCont.innerHTML = html;                
                listBoxSelect();
            }
        });

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', () => {

            tabs.forEach(t => t.classList.remove('sele'));
            tab.classList.add('sele');

            const number = index + 1    
            fetch(`../html/00.ad-tab-cont0${number}.html`)
                .then(response => response.text())
                .then(html => {
                    tabCont.innerHTML = html;
                    listBoxSelect();            
                    select();
            });
        });
    });
})

//비디오 영역 설정 버튼 노출 - 퍼블용
const videoArea = document.querySelector('.video-area')
const btnDivs = videoArea.querySelectorAll('.btn-area > div')

const toggleOptionWrapShow = (show) => {
    btnDivs.forEach(t => {
        const optionWrap = t.querySelector('.option-wrap');
        if (optionWrap) {
            optionWrap.classList.toggle('show', show);
        }
    });
}

btnDivs.forEach(btnDiv => {
    btnDiv.addEventListener('mouseover', () => {
        // 모든 .option-wrap 요소에서 show 클래스를 제거
        toggleOptionWrapShow(false);
        
        const optionWrap = btnDiv.querySelector('.option-wrap');
        if (optionWrap) {
            const optionBtns = optionWrap.querySelectorAll('.option-wrap button')
            optionWrap.classList.add('show');

            optionBtns.forEach((optionBtn) => {
                optionBtn.addEventListener('click', (op) => {
                    const optionClass = op.target.className;
                    op.target.parentElement.parentElement.parentElement.querySelector('.icon-btn').className = optionClass;                        
                    optionWrap.classList.remove('show');                    
                })
            })
        }
    })     
    btnDiv.addEventListener('mouseout', () => {
        // 모든 .option-wrap 요소에서 show 클래스를 제거
        toggleOptionWrapShow(false);            
    })

    btnDiv.addEventListener('click', (e) => {
        const refreshBtn = e.target.classList.contains('refresh')
        if(refreshBtn){
            e.target.classList.add('active')
            setTimeout(() => {
                e.target.classList.remove('active')
            }, 2000)
        } 
    })
})

const controlBoxs = document.querySelectorAll('.control-box')
controlBoxs.forEach(controlBox => {
    const plusBtn = controlBox.querySelector('.icon-btn.plus')
    const certArea = controlBox.querySelector('.cert-area')
    if (plusBtn) {
        plusBtn.addEventListener('click', (e) => {
            e.target.classList.toggle('more');
            controlBox.querySelector('ol').classList.toggle('open')
        });
    }

    if (certArea){
        const certAreaLis = certArea.querySelectorAll('ol li')
        certAreaLis.forEach((certAreaLi) => {
            certAreaLi.addEventListener('mouseover', () => certAreaLi.classList.add('show'));
            certAreaLi.addEventListener('mouseout', () => certAreaLi.classList.remove('show'));
        })
    }
})


//계약목록, 계좌목록 박스 sele
function listBoxSelect() {
    const listBoxes = document.querySelectorAll('.list-style01'); // 여러 개의 .list-style01 선택
    listBoxes.forEach((listBox) => {
        const listItems = listBox.querySelectorAll('li'); // 각 listBox 내부의 li 선택
        listItems.forEach((item) => {
            item.addEventListener('click', (l) => {
                listItems.forEach((i) => i.classList.remove('sele')); // 모든 li에서 'sele' 클래스 제거
                l.currentTarget.classList.add('sele'); // 클릭한 요소에 'sele' 클래스 추가
            });
        });
    });
}


//$('.cert-area li').hover(function(){
//    $(this).toggleClass('show');
//});

//grid-item .control-box .

// const plusBtn = e.target.classList.contains('plus')
// if(plusBtn){
//     e.target.classList.toggle('more')
//     e.target.parentElement.nextElementSibling.querySelector('ol').classList.toggle('open')
// }



    // $('.icon-btn.plus').click(function(){
    //     $(this).toggleClass('more');
    //     $(this).parent().next('.cert-area').find('ol').toggleClass('open');
    // });



//개발 사용가능//////////////////////////////////////////////////////////////////////////////////////
//채팅창 ad
function initializeChatToggle() {
    const chatContainer = document.getElementById('chat-container');
    const toggleChatBox = () => {
        chatContainer.classList.toggle('visible');
    }
    document.getElementById('chat-toggle-button').addEventListener('click', toggleChatBox);
    document.getElementById('btn-chat-close').addEventListener('click', toggleChatBox);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeChatToggle();
    listBoxSelect();
});

    function select(){
        //selectbox css
        $('select').each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;

            $this.addClass('select-hidden'); 
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
                if ($this.children('option').eq(i).is(':selected')){
                $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
                }
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function(e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggle();
            });

            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
            $list.find('li.is-selected').removeClass('is-selected');
            $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
                $list.hide();
                //console.log($this.val());
            });

            $(document).click(function() {
                $styledSelect.removeClass('active');
                $list.hide();
            });
        });
    }
