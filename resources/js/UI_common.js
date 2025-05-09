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
			backgroundColor: '#fff',
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
	console.log(window.scrollY);
}

function OpenEvent() {
	const obj = document.querySelectorAll('.toggleLayout');
	//const contBox = document.querySelectorAll('.toggleCont');
	const Pbox = document.querySelectorAll('.toggleLayout > dl');
	if (!obj) return;

	obj.forEach((btn, index) => {
		btn.addEventListener('click', function (event) {
			event.preventDefault(); // 기본 동작 방지
			let isOpen = obj[index].classList.contains('open');
			obj.forEach(l => l.classList.remove('open'));
			// 현재 클릭한 요소가 열려있던 상태가 아니면 다시 열기
			if (!isOpen) {
				Pbox[index].style.height = Pbox[index].clientHeight;
				obj[index].classList.add('open');
			}
		});
	});
}

// 페이지가 로드된 후 실행
document.addEventListener('DOMContentLoaded', OpenEvent);

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
7;
