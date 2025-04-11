const str = `
<h1><a href="/" role="home" aria-label="홈으로 이동" class="logo">NETIVE</a></h1>
<nav id="nav" class="nav" aria-label="주 내비게이션">
  <ul role="menu">
    <li role="none"><a href="#" role="menuitem" aria-label="About 페이지 이동"  class="btnSt"><span>ABOUT</span></a></li>
    <li role="none"><a href="/pc/board/workList.html" role="menuitem" aria-label="Work 페이지 이동" class="btnSt"><span>WORK</span></a></li>
    <li role="none"><a href="/pc/contact.html" role="menuitem" aria-label="Contact 페이지 이동" class="btnSt"><span>CONTACT</span></a></li>
    <li role="none"><a href="" role="menuitem" aria-label="Recruit 페이지 이동" class="btnSt"><span>RECRUIT</span></a></li>
    <li role="none"><a href="/pc/board/news.html" role="menuitem" aria-label="NEWS 페이지 이동" class="btnSt"><span>NEWS</span></a></li>
  </ul>
</nav>
`;
document.write(str);
