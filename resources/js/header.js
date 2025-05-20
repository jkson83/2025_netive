//header 소스 삽입하기======================================================================================
const str = `
<h1><a href="../index.html" role="home" aria-label="홈으로 이동" class="logo">NETIVE</a></h1>
<button type="button" class="btn_menu"><em>메뉴열기</em></button>
<nav id="nav" class="nav" aria-label="주 내비게이션">
  <ul role="menu">
    <li role="none"><a href="./FNT_PJ_01.html" role="menuitem" aria-label="Work 페이지 이동" class="btnSt"><span>PORTFOLIO</span></a></li>
    <li role="none"><a href="./FNT_CT_01.html" role="menuitem" aria-label="Contact 페이지 이동" class="btnSt"><span>CONTACT</span></a></li>
    <li role="none"><a href="./FNT_RT_01.html" role="menuitem" aria-label="Recruit 페이지 이동" class="btnSt"><span>RECRUIT</span></a></li>
    <li role="none"><a href="./FNT_NS_01.html" role="menuitem" aria-label="NEWS 페이지 이동" class="btnSt"><span>NEWS</span></a></li>
  </ul>
  <button type="button" class="btn_close"><em>메뉴닫기</em></button>  
</nav>
`;

const str2 = `
<h1><a href="../../index.html" role="home" aria-label="홈으로 이동" class="logo">NETIVE</a></h1>
<button type="button" class="btn_menu"><em>메뉴열기</em></button>
<nav id="nav" class="nav" aria-label="주 내비게이션">
  <ul role="menu">
    <li role="none"><a href="../FNT_PJ_01.html" role="menuitem" aria-label="Work 페이지 이동" class="btnSt"><span>PORTFOLIO</span></a></li>
    <li role="none"><a href="../FNT_CT_01.html" role="menuitem" aria-label="Contact 페이지 이동" class="btnSt"><span>CONTACT</span></a></li>
    <li role="none"><a href="../FNT_RT_01.html" role="menuitem" aria-label="Recruit 페이지 이동" class="btnSt"><span>RECRUIT</span></a></li>
    <li role="none"><a href="../FNT_NS_01.html" role="menuitem" aria-label="NEWS 페이지 이동" class="btnSt"><span>NEWS</span></a></li>
  </ul>
  <button type="button" class="btn_close"><em>메뉴닫기</em></button>  
</nav>
`;

// HTML에 삽입하는 함수
function insertHTML(targetId, content) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {  
    targetElement.innerHTML = content;
    //console.log('aaaa');
  }else{
    //console.log('notarget');
  }
}
//header 소스 삽입하기======================================================================================

// 초기화 함수
function init() {
  // 각 섹션에 템플릿 삽입
  insertHTML("header", str);
  insertHTML("headerPort", str2);
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);