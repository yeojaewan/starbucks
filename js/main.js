const searchEl = document.querySelector('.search'); 
// 서치 엘리먼트를 전체 코드중에서 찾는다
const searchInputEl = searchEl.querySelector('input');
// 전체중에 서치 엘리먼트를 찾은 후에 그안에 있는 인풋요소를 찾는다

searchEl.addEventListener('click', function(){
        searchInputEl.focus();
});
// 서치 엘리먼트를 클릭했을때 그안에 있는 인풋요소를 포커스되게 한다.

searchInputEl.addEventListener('focus', function(){
        searchEl.classList.add('focused');
        searchInputEl.setAttribute('placeholder', '통합검색');
});
// 인풋요소가 포커스가 되면 서치 엘리먼트에 포커스트라는 클래스를 추가 
// 하게되고 추가적으로 플레이스홀더를 추가해 통합검색 텍스트를 추가한다

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});
// 인풋요소에 추가해두었던 포커스드를 제거하면서 
// 플레이스홀더에 들어갔던 텍스트를 제거한다.


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 배지라는 엘리먼트를 찾아라 html 문서안에서 헤더안에 베지스를 
window.addEventListener('scroll', _.throttle(function(){
        console.log(window.scrollY);  //윈도우에 스크롤Y 값을 알수 있다.
        if(window.scrollY > 500){
        // 배지 숨기기
        //  gsap.to(요소, 지속시간, {옵션});
        gsap.to(badgeEl, .4, {
                opacity: 0,
                display: 'none'
        });
        //버튼 보이기
                gsap.to(toTopEl, .2, {
                x: 0
        });
        }else{
        // 배지 보이기
        gsap.to(badgeEl, .4, {
                opacity: 1,
                display: 'block'
        });
        //버튼 숨기기
                gsap.to(toTopEl, .2, {
                x: 100  
        });
        }
}, 300));
// 윈도우는 우리가 보고있는 브라우저를 말한다
// 화면을 스크롤 할때마다 콘솔창에 이벤트가 발생한다.
// _.throttle(함수, 시간)
// if(window.scrollY > 500) 윈도우에 스크롤Y 값이 500보다 커지면 이벤트를 발생시킨다.


toTopEl.addEventListener('click', function() {
        gsap.to(window, .7, {
        scrollTo: 0
        });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
// 먼저 함수를 정의한다. fadeELs 라는 함수를 정의 하면서 전체 문서에 쿼리셀렉터올(여러개를 선택할때)
// 비쥬얼 안에 페이드 인이라는 클래스를 찾는다.
fadeEls.forEach(function (fadeEl, index) {
        //  gsap.to(요소, 지속시간, {옵션});
        gsap.to(fadeEl, 1, {
                delay: (index + 1) *.7, // 0.7, 1.4, 2.1, 2.7
                opacity: 1
        });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
        direction: 'vertical',
        autoHeight : true,
        autoplay: true,
        loop: true
});

new Swiper('.promotion .swiper-container',{
       slidesPerView:3, //한번에 보여줄 슬라이드 개수
       spaceBetween: 10,
       centeredSlides: true,
//        autoplay: {
//                delay:5000
//        },  
       loop: true,
        pagination:{
                el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
                clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
        },
        navigation:{
                prevEl: '.promotion .swiper-prev',
                nextEl: '.promotion .swiper-next'
        }
               
});

new Swiper('.awards .swiper-container', {
        autoplay: true, //자동 플레이
        loop: true,     //반복
        spaceBetween: 30, //객체사이의 간격 조정
        slidesPerView: 5, //슬라이드에 보여지는 객체수
        navigation: {
                prevEl: '.awards .swiper-prev', //좌측버튼
                nextEl: '.awards .swiper-next'  //우측버튼
        }
});

const promotionEl = document.querySelector('.promotion');
// 프로모션 클래스를 문서에서 찾아서 프로모션 엘리먼트에 할당한다.
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 토글프로모션 클래스를 문서에서 찾아서 토글프로모션토글버튼에 할당한다.
let isHidePromotion = false;
// 프로모션영역이 숨겨졌는지 확인한다. 현재는 안숨겨짐.
promotionToggleBtn.addEventListener('click', function () {
        isHidePromotion = !isHidePromotion
        if (isHidePromotion) {
                // 숨김처리
                promotionEl.classList.add('hide');
        } else{
                // 보임처리
                promotionEl.classList.remove('hide');
        }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
        // `.toFixed()`를 통해 반환된 문자 데이터를,
        // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
      }

function floatingObject(selector, delay, size) {
        // gsap.to(요소, 시간, 옵션);
        gsap.to(
        selector, //선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        { // 옵션
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
        });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
        new ScrollMagic
                .Scene({
                 triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
                 triggerHook: .8
                })
                .setClassToggle(spyEl, 'show')
                .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021


