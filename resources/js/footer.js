const initFooter = (_depth) => {
  let root = _depth == 0 ? '.' : '..';
  let fstr = `
    <div class="CompanyInfo">
      <p>We create what’s NEXT.</p>
      <div class="siteMap">
        <dl>
          <dt>Location</dt>
          <dd>서울시 마포구 월드컵북로63<br>(성산동, 서레빌딩 2층)</dd>
        </dl>
        <dl>
          <dt>Contact</dt>
          <dd>TEL 02.324.3447</dd>
          <dd>FAX 02.324.3449</dd>
        </dl>
        <dl>
          <dt>Site Map</dt>
          <dd><a href="${root}/index.html">Home</a></dd>
          <dd><a href="${root}/contents/FNT_PJ_01.html">Portfolio</a></dd>
          <dd><a href="${root}/contents/FNT_CT_01.html">Contact</a></dd>
          <dd><a href="${root}/contents/FNT_RT_01.html">Recruit</a></dd>
          <dd><a href="${root}/contents/FNT_NS_01.html">News</a></dd>
        </dl>
      </div>
    </div>
    <div class="copyright">
      <h2><img src="${root}/resources/img/pc/logo_footer.svg" alt="NETIVE INC."></h2>
      <p>
        <!--<a href="#" class="btnTop"><span>Back to the Top</span></a>-->
        <span>© NETIVE, Inc. All rights reserved.</span>
      </p>
    </div>
  `;
  // document.write(fstr);
  document.querySelector('#footer').innerHTML = fstr;

  const topBtn = document.createElement('div');
  topBtn.className = 'ui_top';
  topBtn.innerHTML = '<button type="button" onclick="pageTopMove()"><em>top</em></button>';
  document.querySelector('#wrap').appendChild(topBtn);
}

// 페이지 상단으로 이동
const pageTopMove = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});

  // a11y
  const target = document.querySelector('#container');
  setTimeout(() => {
    target.setAttribute('tabIndex','-1')
    document.querySelector('#container').focus();
  }, 300);
}