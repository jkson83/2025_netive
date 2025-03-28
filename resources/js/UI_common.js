function header_Sticky() {
	// const wrapElement = document.querySelector('.wrap');
	// const containerElement = document.querySelector('.container');
	// const headerElement = document.querySelector('.header');
	const changeElement = document.querySelector('.sec1');
	// .wrap 또는 .container가 없을 경우 오류 방지
	if (!changeElement) {
		console.error('해당 요소가 존재하지 않습니다.');
		return;
	}

	// const totalHeight = wrapElement.scrollHeight; // 전체 컨텐츠 길이
	// const contHeight = containerElement.scrollHeight; // 컨텐츠 영역 길이
	// const changeOffset = totalHeight - contHeight; // 기준 높이값
	const changeOffset = changeElement.scrollHeight;
	//console.log(changeOffset);

	// 현재 스크롤 위치 체크
	if (window.scrollY >= changeOffset) {
		gsap.to('.header', {
			backgroundColor: '#fff',
			color: '#111',
			duration: 0.5, // 애니메이션 지속 시간 추가
		});
		//	console.log('헤더 색 변경됨');
	} else {
		gsap.to('.header', {
			backgroundColor: 'transparent',
			color: '#fff',
			duration: 0.5,
		});
		//	console.log('헤더 원래 색 유지');
	}

	//	console.log(window.scrollY);
}

// 페이지 로드 후 실행 및 스크롤 이벤트 등록
document.addEventListener('DOMContentLoaded', function () {
	header_Sticky(); // 초기 실행
	window.addEventListener('scroll', header_Sticky); // 스크롤 이벤트 등록
});
