const initFooter = (_depth) => {
  let root = _depth == 0 ? '.' : '..';
  let fstr = `
    <div class="CompanyInfo">
      <p>We create what’s NEXT.</p>
      <div class="siteMap">
        <dl>
          <dt>Location</dt>
          <dd>서울특별시 마포구 월드컵북로63<br>(성산동, 서레빌딩 2층)</dd>
        </dl>
        <dl>
          <dt>Contact</dt>
          <dd>TEL 02.324.3447</dd>
          <dd>FAX 02.324.3449</dd>
        </dl>
        <dl>
          <dt>Site map</dt>
          <dd><a href="${root}/index.html">Home</a></dd>
          <dd><a href="${root}/contents/FNT_PJ_01.html">Portfolio</a></dd>
          <dd><a href="${root}/contents/FNT_CT_01.html">Contact</a></dd>
          <dd><a href="${root}/contents/FNT_RT_01.html">Recuit</a></dd>
          <dd><a href="${root}/contents/FNT_NS_01.html">News</a></dd>
        </dl> 
      </div>
    </div>
    <div class="copyright">
      <h2>NETIVE INC.</h2>
      <p>
        <!--<a href="#" alt="위로가기"  class="btnTop"><span>Back to the Top</span></a>-->
        <span>© NETIVE, Inc. All rights reserved.</span>
      </p>        
    </div>
    <div class="ui_top">
      <button type="button" onclick="pageTopMove()"><em>top</em></button>
    </div>
  `;
  document.write(fstr);
}

// 페이지 상단으로 이동
const pageTopMove = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}