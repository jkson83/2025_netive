<<<<<<< HEAD
// 접속 환경 체크
function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
}

// 헤더 색상 변경
function handleHeaderSticky() {
  const changeElement1 = document.querySelector('.sec1,.motionBox')?.scrollHeight || 0;
  const changeOffset = changeElement1 - 100;
=======
//상단 헤더메뉴이벤트트
function header_Sticky() {
	// const wrapElement = document.querySelector('.wrap');
	// const containerElement = document.querySelector('.container');
	// const headerElement = document.querySelector('.header');
	const changeElement1 = document.querySelector('.sec1').scrollHeight;
	const changeElement2 = document.querySelector('.sec2').scrollHeight;
	const changeOffset = changeElement1 + changeElement2 - 100;
	// .wrap 또는 .container가 없을 경우 오류 방지

	// const totalHeight = wrapElement.scrollHeight; // 전체 컨텐츠 길이
	// const contHeight = containerElement.scrollHeight; // 컨텐츠 영역 길이
	// const changeOffset = totalHeight - contHeight; // 기준 높이값
	//console.log(changeOffset);

	// 현재 스크롤 위치 체크
	if (window.scrollY >= changeOffset) {
		gsap.to('.header, .logo, .btnSt', {
			backgroundColor: 'transparent',
			color: '#111',
			duration: 0.5, // 애니메이션 지속 시간 추가
		});
		//console.log('헤더 색 변경됨');
	} else {
		gsap.to('.header, .logo, .btnSt', {
			backgroundColor: 'transparent',
			color: '#fff',
			duration: 0.5,
		});
		//console.log('헤더 원래 색 유지');
	}
	//console.log(window.scrollY);
}
//아코디언 메뉴 이벤트
function OpenEvent() {
	const obj = document.querySelectorAll('.toggleLayout');
	//const contBox = document.querySelectorAll('.toggleCont');
	const Pbox = document.querySelectorAll('.toggleLayout > dl');
	if (!obj) return;
>>>>>>> e5cbe18fa9040ab4c19fb8ce6c8ac3c97b4e4502

  const isScrolled = window.scrollY >= changeOffset;
  const headerElements = isMobile() ? document.querySelectorAll('.header, .logo') : document.querySelectorAll('.header, .logo, .btnSt');

  gsap.to(headerElements, {
    backgroundColor: isScrolled ? '#fff' : 'transparent',
    color: isScrolled ? '#000' : '#fff',
    duration: 0.1,
    onStart: () => {
      if (!isScrolled) {
        headerElements.forEach((el) => el.classList.add('sticky'));
      } else {
        headerElements.forEach((el) => el.classList.remove('sticky'));
      }
    },
  });
}
//접속 환경체크
function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
}

if (isMobile()) {
  console.log("모바일 환경입니다.");
} else {
  console.log("PC 환경입니다.");
}

isMobile();

// 모바일 메뉴 열기/닫기
function handleMenuToggle() {
  const menuBtn = document.querySelector('.btn_menu');
  const closeBtn = document.querySelector('.btn_close');
  const naviBox = document.querySelector('.nav');

<<<<<<< HEAD
  if (!menuBtn || !closeBtn || !naviBox) return;

  menuBtn.addEventListener('click', () => naviBox.classList.add('open'));
  closeBtn.addEventListener('click', () => naviBox.classList.remove('open'));
}

// 아코디언 메뉴
function handleAccordionToggle() {
  const toggleItems = document.querySelectorAll('.toggleLayout');

  toggleItems.forEach((item, index) => {
    item.addEventListener('click', function (event) {     
      event.preventDefault();
      const isOpen = item.classList.contains('open');
      const viewCont = item.nextElementSibling;
      if (viewCont && viewCont.classList.contains('listStyle')) {
        // 모두 닫기
        toggleItems.forEach((el) => {
          const siblingUl = el.nextElementSibling;
          const uHeight = el.nextElementSibling.scrollHeight;
          const emText = el.querySelector('button em');
          siblingUl.classList.remove('open');
          el.classList.remove('open');
          el.title = '펼치기';
          
          if (siblingUl && siblingUl.classList.contains('listStyle')) {
            siblingUl.style.height =  uHeight + 'px';
            siblingUl.style.transition = 'height 0.5s ease'; 
            siblingUl.style.height = '0';
          }
          if (emText) emText.textContent = '펼치기';
          if(!el.classList.contains('open')){
            siblingUl.style.display='none';
          }
        });
  
        // 현재 항목 열기/닫기
        if (!isOpen) {
          item.classList.add('open');
          item.title = '닫기';
          viewCont.style.display = 'block';
          const viewHeigh = viewCont.scrollHeight ;          
          viewCont.style.transition = 'height 0.5s ease'; 
          viewCont.style.height = viewHeigh + 'px';
          viewCont.classList.add('open');
          const emText = item.querySelector('button em');
          if (emText) emText.textContent = '닫기';
          setTimeout(() => {
            //let itemTop = (item.parentElement.offsetTop - item.clientHeight) + 90;
            let itemTop = isMobile() ? item.offsetTop - 60 : item.offsetTop - 100 ;
            window.scroll({ top: itemTop, left: 0, behavior: 'smooth' });
          }, 500);
        }
      }
    });
  });
}

//top 버튼 노출 조정
function handleTopBtn() {
  let uiTop = document.querySelector('.ui_top');
  let viewScrollTop = window.scrollY;
  if (viewScrollTop >= 200) {
    //uiTop.style.display = "block";
    uiTop.style.opacity = '1';
  } else {
    //uiTop.style.display = "none";
    uiTop.style.opacity = '0';
  }
}

//사내복지 자동 스와이프 함수
function handleAutoSwipe() {
  const slideInner = document.querySelector('.slide-inner'); 
  const slides = document.querySelectorAll('.slide-item'); 
  
  if (!slideInner || !slides) return;

  // 슬라이드 너비 및 개수 계산
  const slideWidth = isMobile() ? slides[0].clientWidth + 20  : slides[0].clientWidth + 40;
  const totalSlides = slides.length;

  // 클론 슬라이드 추가
  slides.forEach((slide) => {
    let slideClone = slide.cloneNode(true);
    slideInner.append(slideClone);
  });

  let currentIndex = 0;

  // 애니메이션 시작
  setInterval(() => {
    currentIndex++;

    // 슬라이드 이동
    slideInner.style.transition = 'transform 0.5s ease';
    slideInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // 무한 루프 처리
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        slideInner.style.transition = 'none';
        slideInner.style.transform = 'translateX(0)';
        currentIndex = 0;
      }, 500);
    }
  }, 2500);
}

//모달팝업 열기/닫기
function handleModalToggle() {
  const moBtn = document.querySelector('.btnB');
  const closeBtn = document.querySelector('.modal-popup-btn');
  const modal = document.querySelector('.modal-popup');
  const modalBg = document.querySelector('.modal-popup-bg');
  const openModal = () => {
    modalBg.style.display = 'block';
    modal.style.display = 'block';
    modal.style.opacity = '1';
    // 트랜지션 적용을 위해 setTimeout 사용
    setTimeout(() => {
      modalBg.style.opacity = '.75';
    }, 10); // 10ms 정도의 지연을 주어야 트랜지션이 적용됨
  };
  const closeModal = () => {
    modalBg.style.opacity = '0';
    modal.style.opacity = '0';
    // 트랜지션이 끝난 후에 display를 'none'으로 설정
    setTimeout(() => {
      modalBg.style.display = 'none';
      modal.style.display = 'none';
    }, 300); // 트랜지션 시간과 동일하게 맞춰줌
  };
  if (!moBtn || !closeBtn) return;
  moBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
}

// 초기화 함수
function init() {
  handleMenuToggle();
  handleAccordionToggle();
  handleModalToggle();
  handleTopBtn(); 
  handleAutoSwipe();

  handleHeaderSticky(); // 초기 실행
  window.addEventListener('scroll', handleHeaderSticky);

  window.addEventListener('scroll', handleTopBtn);
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);
=======
// 페이지 로드 후 실행 및 스크롤 이벤트 등록
document.addEventListener('DOMContentLoaded', function () {
	const changeElement = document.querySelector('.sec1');
	if (!changeElement) {
		return;
	} else {
		header_Sticky(); // 초기 실행
		window.addEventListener('scroll', header_Sticky); // 스크롤 이벤트 등록
	}
});
>>>>>>> e5cbe18fa9040ab4c19fb8ce6c8ac3c97b4e4502
