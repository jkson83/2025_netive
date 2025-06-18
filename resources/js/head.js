// 접속 환경 체크
function isMobile() {
  const ua = navigator.userAgent.toLowerCase();

  const isPhone = /iphone|ipod|android.*mobile|blackberry|iemobile|opera mini/i.test(ua);
  const isTablet = /ipad|android(?!.*mobile)|tablet|playbook|silk/i.test(ua);

  const isIpadOS = (
    navigator.platform === 'MacIntel' &&
    navigator.maxTouchPoints > 1 &&
    !window.MSStream // iPadOS에서만 해당 조합이 나옴
  );
 // console.log(navigator.userAgentData);

  return isPhone || isTablet || isIpadOS;
}

// 화면 초기 설정
// SEO 관련 내용 변경경
const initPage = (_depth) => {
  let path = _depth == 0 ? './resources'
          : _depth == 1 ? '../resources'
          : _depth == 2 ? '../../resources'
          : '../resources';
  let hstr = `
    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no, address=no, email=no">
    <meta name="apple-mobile-web-app-title" content="NETIVE">
    <meta name="title" content="Netive. We create what’s next.">
    <meta name="description" content="Netive는 새롭게 사고하고, 창의적으로 움직이며, 주도적으로 연결을 설계하는 디지털 전문가 집단입니다. 변화에 유연하게 반응하고, 브랜드와 사용자를 이어주는 새로운 흐름을 만들어갑니다.">
    <meta name="keywords" content="네티브, Netive, 디지털 에이전시, 웹 에이전시, UIUX 디자인, UX 컨설팅, 사용자 중심 디자인, 반응형 웹, 웹사이트 제작, 플랫폼 구축, 시스템 구축, 웹 개발, 앱 개발, 구축 및 운영, 프론트엔드 개발, 백엔드 개발, 모바일 최적화, 금융 UIUX, 보험 UIUX, 기획 디자인 퍼블리싱 개발">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="mobile-web-app-capable" content="yes">

    <meta property="og:title" content="Netive. We create what’s next.">
    <meta property="og:description" content="Netive는 새롭게 사고하고, 창의적으로 움직이며, 주도적으로 연결을 설계하는 디지털 전문가 집단입니다. 변화에 유연하게 반응하고, 브랜드와 사용자를 이어주는 새로운 흐름을 만들어갑니다.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.netive.co.kr/">
    <meta property="og:image" content="https://www.netive.co.kr/static/img/image_og.png">
    <meta property="og:site_name" content="Netive. We create what’s next.">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Netive. We create what’s next.">
    <meta name="twitter:description" content="Netive는 새롭게 사고하고, 창의적으로 움직이며, 주도적으로 연결을 설계하는 디지털 전문가 집단입니다. 변화에 유연하게 반응하고, 브랜드와 사용자를 이어주는 새로운 흐름을 만들어갑니다.">
    <meta name="twitter:image" content="https://www.netive.co.kr/static/img/image_twitter.png">

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <script src="${path}/js/plugins/gsap@3.12.5/gsap.min.js"></script>
    <script src="${path}/js/plugins/gsap@3.12.5/MotionPathPlugin.min.js"></script>
    <script src="${path}/js/plugins/gsap@3.12.5/ScrollTrigger.min.js"></script>
    <script src="${path}/js/plugins/gsap@3.12.5/ScrollToPlugin.min.js"></script>
    <script src="${path}/js/plugins/gsap@3.12.5/SplitText.min.js"></script>
    <script src="${path}/js/plugins/swiper/swiper-bundle.min.js"></script>
    <script src="${path}/js/UI_common.js"></script>
  `;

  // 메인일 때만
  // if (_depth == 0) {
  //   hstr += `<script src="./resources/js/gsapMotion.js"></script>`;
  // }

  // pc/mobile에 따른 css파일 설정
  let cssFile;
  if (isMobile()) {
    cssFile = 'mobile.css';
  } else {
    cssFile = 'main.css';
  }

  hstr += `<link rel="stylesheet" href="${path}/scss/${cssFile}" type="text/css">`;

  document.write(hstr);
}

const setHeader = (_depth) => {
  let rootPath = _depth == 0 ? './index.html'
          : _depth == 1 ? '../index.html'
          : _depth == 2 ? '../../index.html'
          : '../index.html';
  let path = _depth == 0 ? './contents'
          : _depth == 1 ? '.'
          : _depth == 2 ? '../contents'
          : '.';
  let logoPath = _depth == 0 ? './resources' : '../resources';
  let headerObj = document.querySelector('.header');
  let portUrl = window.location.href; //현재  url 전체 가져오기.
  let addTag = `<div class="historyBack"><button type="button" onclick="javascript:history.back();"><em>뒤로가기</em></button></div>`;

  if(portUrl.includes('portfolio')){
    let str = `
    <h1><a href="${rootPath}" role="home" aria-label="홈으로 이동" class="logo pc-only"><img src="${logoPath}/img/pc/logo_netive.svg" alt="NETIVE" class="logoBlack"><img src="${logoPath}/img/pc/logo_netiveW.svg" alt="NETIVE" class="logoWhite"></a></h1>
    <button type="button" class="btn_menu"><em>메뉴열기</em></button>
    <nav id="nav" class="nav" aria-label="주 내비게이션">
      <ul role="menu">
        <li role="none" class="mo-only"><a href="../index.html" role="menuitem" aria-label="Work 페이지 이동" class="btnSt"><span>HOME</span></a></li>
        <li role="none"><a href="${path}/FNT_PJ_01.html" role="menuitem" aria-label="Work 페이지 이동" class="btnSt"><span>PORTFOLIO</span></a></li>
        <li role="none"><a href="${path}/FNT_CT_01.html" role="menuitem" aria-label="Contact 페이지 이동" class="btnSt"><span>CONTACT</span></a></li>
        <li role="none"><a href="${path}/FNT_RT_01.html" role="menuitem" aria-label="Recruit 페이지 이동" class="btnSt"><span>RECRUIT</span></a></li>
        <li role="none"><a href="${path}/FNT_NS_01.html" role="menuitem" aria-label="NEWS 페이지 이동" class="btnSt"><span>NEWS</span></a></li>
      </ul>
      <button type="button" class="btn_close"><em>메뉴닫기</em></button>
    </nav>`
    headerObj.innerHTML = str + addTag ;
  }else{
    let str = `
    <h1><a href="${rootPath}" role="home" aria-label="홈으로 이동" class="logo"><img src="${logoPath}/img/pc/logo_netive.svg" alt="NETIVE" class="logoBlack"><img src="${logoPath}/img/pc/logo_netiveW.svg" alt="NETIVE" class="logoWhite"></a></h1>
    <button type="button" class="btn_menu"><em>메뉴열기</em></button>
    <nav id="nav" class="nav" aria-label="주 내비게이션">
      <ul role="menu">
        <li role="none" class="mo-only"><a href="../index.html" role="menuitem" aria-label="Work 페이지 이동" class="btnSt"><span>HOME</span></a></li>
        <li role="none"><a href="${path}/FNT_PJ_01.html" role="menuitem" aria-label="Work 페이지 이동" class="btnSt"><span>PORTFOLIO</span></a></li>
        <li role="none"><a href="${path}/FNT_CT_01.html" role="menuitem" aria-label="Contact 페이지 이동" class="btnSt"><span>CONTACT</span></a></li>
        <li role="none"><a href="${path}/FNT_RT_01.html" role="menuitem" aria-label="Recruit 페이지 이동" class="btnSt"><span>RECRUIT</span></a></li>
        <li role="none"><a href="${path}/FNT_NS_01.html" role="menuitem" aria-label="NEWS 페이지 이동" class="btnSt"><span>NEWS</span></a></li>
      </ul>
      <button type="button" class="btn_close"><em>메뉴닫기</em></button>
    </nav>`
    headerObj.innerHTML = str;
  }
}
