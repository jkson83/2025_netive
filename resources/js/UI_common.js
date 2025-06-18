// 접속 환경 체크
function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileAgent = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
  return isMobileAgent;
}

// 헤더 색상 변경
function handleHeaderSticky() {
  const changeElement1 = document.querySelector('.sec1,.motionBox')?.scrollHeight || 0;
  const changeOffset = changeElement1 - (isMobile() ? 56 : 90);
  const isScrolled = window.scrollY >= changeOffset;
  const headerElements = isMobile() ? document.querySelectorAll('.header') : document.querySelectorAll('.header, .btnSt');
  const logoBlack = document.querySelector('.logoBlack');
  const logoWhite = document.querySelector('.logoWhite');
  const scrollColor = document.querySelector('.motionBox button');
  const porticon = document.querySelector('.historyBack');
  //상세 포트폴리오 헤더 색깔 조정
  const isColorBlack = () => {
    const siteUrl = window.location.href;
    const pageIds = ['a005', 'b001', 'b004']; //<= 페이지 아이디 추가
    return pageIds.some(pageId => siteUrl.includes(pageId));
  };
  const showBlack = () =>{
    headerElements.forEach((el) => el.classList.remove('sticky'));
    logoBlack.style.display  = "block";
    logoWhite.style.display = "none";
    if (!scrollColor) return;
    scrollColor.classList.add('scrollBlack');
  };
  const showWhite = () =>{
    headerElements.forEach((el) => el.classList.add('sticky'));
    logoBlack.style.display  = "none";
    logoWhite.style.display = "block";
    if (!scrollColor) return;
    scrollColor.classList.remove('scrollBlack');
  };
  gsap.to(headerElements, {
    backgroundColor: isScrolled ? '#fff' : 'transparent',
    color: isScrolled || isColorBlack() ? '#000' : '#fff',
    duration: 0.1,
    onStart: () => {
      if (!isScrolled) {
        if(isColorBlack()){
          showBlack();
        }else{
          showWhite();
        }
        if (!porticon) return;
        if(isColorBlack()){
          porticon.classList.add('chgImg');
        }else{
          porticon.classList.remove('chgImg');
        }
      } else {
        showBlack();
        if (!porticon) return;
        porticon.classList.add('chgImg');
      }
    },
  });
}

// 모바일 메뉴 열기/닫기
function handleMenuToggle() {
  const menuBtn = document.querySelector('.btn_menu');
  const closeBtn = document.querySelector('.btn_close');
  const naviBox = document.querySelector('.nav');
  let viewScrollTop;

  if (!menuBtn || !closeBtn || !naviBox) return;

  menuBtn.addEventListener('click', () => {
    naviBox.classList.add('open');

    viewScrollTop = window.scrollY;
    setTimeout(() => {
      document.body.style.height = window.innerHeight + 'px';
      document.body.style.overflow = 'hidden';
    }, 500);

  });
  closeBtn.addEventListener('click', () => {
    naviBox.classList.remove('open');

    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
    window.scrollTo({ top: viewScrollTop })
  });
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
    uiTop.style.pointerEvents = "auto";
    uiTop.style.opacity = '1';
  } else {
    //uiTop.style.display = "none";
    uiTop.style.pointerEvents = "none";
    uiTop.style.opacity = '0';
  }
}

//자동 스와이프 함수
function handleAutoSwipe() {
  const slideBox  = document.querySelector('.slide-box');
  const slideInner = document.querySelector('.slide-inner');
  const slides = document.querySelectorAll('.slide-item');
  if (!slideBox || !slideInner) return;
  const childrenW = slideInner.children;
  let itemGap = 0;

  //item 사이의 공간을 유동적으로 계산하기
  if(childrenW.length >= 2){
    const first = childrenW[0];
    const second = childrenW[1];
    itemGap = second.offsetLeft - (first.offsetLeft + first.offsetWidth);
  }
  if (!slideInner || slides.length === 0) return;
  //const slideWidth = isMobile() ? slides[0].clientWidth + 20 : slides[0].clientWidth + 40;
  //console.log('gap:', itemGap + 'px');
  const slideWidth = slides[0].clientWidth + itemGap;

  // 슬라이드를 두 번 복제하여 무한 루프 구현
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slideInner.appendChild(clone);
  });

  let currentX = 0;

  const durationInSeconds = 12;
  const fps = 80;
  const resetPoint = slideWidth * slides.length; // 원본 슬라이드 전체 길이
  const speed = resetPoint / (durationInSeconds * fps); // 한 프레임당 이동 거리
  //const speed = isMobile() ? 1.5 : 2.5; // 한 프레임당 이동 속도(px) - 숫자 키우면 더 빠르게 이동
  //console.log(speed);
  let isPaused = false;

  function animate() {
    //console.log(isPaused);
    if(!isPaused){
      currentX -= speed;
      slideInner.style.transform = `translateX(${currentX}px)`;

      // 슬라이드 전체 너비의 절반을 넘어서면 초기화 (원본 길이 기준)
      const resetPoint = slideWidth * slides.length;

      if (Math.abs(currentX) >= resetPoint) {
        currentX = 0;
        slideInner.style.transform = `translateX(0px)`;
      }
    }
    requestAnimationFrame(animate);
  }

  slideInner.style.whiteSpace = 'nowrap';
  slideInner.style.display = 'flex';
  slideInner.style.transition = 'none'; // 자연스럽게 requestAnimationFrame으로 이동하므로 transition 제거

  const isPortfolio = () => {
    const siteUrl = window.location.href;
    const pageId = 'portfolio';
    return siteUrl.includes(pageId);
  };

  // 마우스 이벤트 처리 (포트폴리오 슬라이드가 아닐때만)
  if(!isPortfolio()){
    slideBox.addEventListener('mouseleave', () => { isPaused = false; });
    slideBox.addEventListener('touchend', () => { isPaused = false; });
    slideBox.addEventListener('mouseover', () => { isPaused = true; });
    slideBox.addEventListener('touchstart', () => { isPaused = true; });
  }

  animate(); //시작
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

// modal
const modal = {
  gTarget: null,
  sPrevFocus: null,
  open(e, id, callback) {
    this.gTarget = document.querySelector(`[data-modal="${id}"]`);
    this.gTarget.setAttribute('tabIndex', '-1');
    this.gTarget.classList.add('active');
    this.gTarget.style.display = "block";
    this.gTarget.focus();

    this.sPrevFocus = e.currentTarget;

    if(typeof callback !== 'function') return;
    callback();
  },
  close(callback) {
    this.gTarget.style.display = "none";

    this.sPrevFocus.focus();

    if(typeof callback !== 'function') return;
    callback();
  },
  init() {
    // console.log(1111)
  }
}

// counter
function animateCounter(element, startValue = 0, endValue = 0, duration = 1) {
  element.textContent = startValue; // 카운터 초기값 설정

  const startCount = {
    val: startValue
  };

  gsap.to(startCount, {
    val: endValue,
    duration: duration,
    ease: "linear.inOut",
    /*
      .in → 천천히 시작
      .out → 부드럽게 멈춤
      .inOut → 천천히 시작하고 부드럽게 멈춤
    */
    onUpdate: () => {
      element.textContent = Math.floor(startCount.val);
    },
    overwrite: true,
  });
}
const gsapCounter = {
  init() {
    const gTargets = document.querySelectorAll('[data-counter]');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const startNum = parseInt(target.dataset.start, 10);
          const endNum = parseInt(target.dataset.end, 10);
          const duration = parseInt(target.dataset.duration, 10);

          animateCounter(target, startNum, endNum, duration);
          observer.unobserve(target); // 한 번만 실행
        }
      });
    }, { threshold: 0.5 });

    gTargets.forEach(target => {
      observer.observe(target);
    });
  }
}

// scroll event 추가
const ScrollEffect = {
  area: null,
  init() {
    this.area = document.querySelectorAll('[data-scroll-effect], [data-row-effect], [data-scroll-event]');
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('load', this.handleScroll.bind(this));
    this.handleScroll();
  },
  handleScroll() {
    const windowHeight = window.innerHeight;
    this.area.forEach(ele => {
      const rect = ele.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        ele.classList.add('active');
      }
    });
  }
};

// 포트폴리오 상세 스크롤 이벤트
const portfolioScrollDown = () => {
  let targetTop = document.querySelector('.motionBox').offsetHeight;
  window.scrollTo({
    top: targetTop,
    behavior: 'smooth',
    delay: 1,
  });
};

// 초기화 함수
function init() {
  handleMenuToggle();
  handleAccordionToggle();
  // handleModalToggle(); 20250522 주석
  modal.init(); // 20250522 추가
  gsapCounter.init(); // 20250522 추가
  ScrollEffect.init(); // 20250522 추가
  handleTopBtn();
  handleAutoSwipe();

  handleHeaderSticky(); // 초기 실행
  window.addEventListener('scroll', handleHeaderSticky);

  window.addEventListener('scroll', handleTopBtn);
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);
