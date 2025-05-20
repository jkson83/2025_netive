// 접속 환경 체크
function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
}

// 화면 초기 설정
const initPage = (_depth) => {
  let path = _depth == 0 ? './resources'
          : _depth == 1 ? '../resources'
          : _depth == 2 ? '../../resources'
          : '../resources';
  let hstr = `
    <title>NETIVE</title>
    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no, address=no, email=no">
    <meta name="apple-mobile-web-app-title" content="NETIVE">
    <meta name="title" content="NETIVE Inc.">
    <meta name="description" content="NETIVE, 네티브, 웹사이트,웹디자인,프로모션,마이크로사이트,스타일가이드,전시,홍보영상,모바일앱,어플리케이션,BI,CI,Website,Web design,Promotion,Microsite,Style guide,Exhibition,Mobile app,Mobile web,Application">
    <meta name="keywords" content="NETIVE, 네티브, 웹사이트,웹디자인,프로모션,마이크로사이트,스타일가이드,전시,홍보영상,모바일앱,어플리케이션,BI,CI,Website,Web design,Promotion,Microsite,Style guide,Exhibition,Mobile app,Mobile web,Application">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="mobile-web-app-capable" content="yes">
    <meta property="og:title" content="NETIVE Inc.">
    <meta property="og:description" content="NETIVE, 네티브, 웹사이트,웹디자인,프로모션,마이크로사이트,스타일가이드,전시,홍보영상,모바일앱,어플리케이션,BI,CI,Website,Web design,Promotion,Microsite,Style guide,Exhibition,Mobile app,Mobile web,Application">
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://www.netive.co.kr/">
    <meta property="og:image" content="http://www.netive.co.kr/front2016/img/netive.jpg">
    <meta property="og:site_name" content="NETIVE">
    <script src="${path}/js/plugins/gsap@3.12.5/gsap.min.js"></script>
    <script src="${path}/js/plugins/gsap@3.12.5/MotionPathPlugin.min.js"></script>
    <script src="${path}/js/plugins/gsap@3.12.5/ScrollTrigger.min.js"></script>
    <script src="${path}/js/plugins/gsap@3.12.5/ScrollToPlugin.min.js"></script>
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
  let headerObj = document.querySelector('.header');
  let str = `
    <h1><a href="${rootPath}" role="home" aria-label="홈으로 이동" class="logo">NETIVE</a></h1>
    <button type="button" class="btn_menu"><em>메뉴열기</em></button>
    <nav id="nav" class="nav" aria-label="주 내비게이션">
      <ul role="menu">
        <li role="none"><a href="${path}/FNT_PJ_01.html" role="menuitem" aria-label="Work 페이지 이동" class="btnSt"><span>PORTFOLIO</span></a></li>
        <li role="none"><a href="${path}/FNT_CT_01.html" role="menuitem" aria-label="Contact 페이지 이동" class="btnSt"><span>CONTACT</span></a></li>
        <li role="none"><a href="${path}/FNT_RT_01.html" role="menuitem" aria-label="Recruit 페이지 이동" class="btnSt"><span>RECRUIT</span></a></li>
        <li role="none"><a href="${path}/FNT_NS_01.html" role="menuitem" aria-label="NEWS 페이지 이동" class="btnSt"><span>NEWS</span></a></li>
      </ul>
      <button type="button" class="btn_close"><em>메뉴닫기</em></button>  
    </nav>
  `;

  headerObj.innerHTML = str;
}
