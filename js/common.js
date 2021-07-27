const searchEl = document.querySelector('.search');
// 서치 엘리먼트를 전체 코드중에서 찾는다
const searchInputEl = searchEl.querySelector('input');
// 전체중에 서치 엘리먼트를 찾은 후에 그안에 있는 인풋요소를 찾는다

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});
// 서치 엘리먼트를 클릭했을때 그안에 있는 인풋요소를 포커스되게 한다.

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
// 인풋요소가 포커스가 되면 서치 엘리먼트에 포커스트라는 클래스를 추가 
// 하게되고 추가적으로 플레이스홀더를 추가해 통합검색 텍스트를 추가한다

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});
// 인풋요소에 추가해두었던 포커스드를 제거하면서
// 플레이스홀더에 들어갔던 텍스트를 제거한다.



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021
