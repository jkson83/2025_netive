function mainEffect() {
	let hasRun = false; //최소 한 번 실행 제어용 변수

	return function () {
		if (hasRun) return; // 이미실행된 경우 종료
		hasRun = true;
		const masterTimeline = gsap.timeline();

		const LogoAction = gsap
			.timeline()
			.to('.firstAction .baseText', {
				fontSize: 120,
				delay: 0.5,
			})
			.to('.firstAction', {
				opacity: 0,
				delay: 0.7,
			});

		const mainAction = gsap
			.timeline()
			.to('#sec1 .motionText', {
				opacity: 0,
				y: '-9.87vh',
				duration: 1,
				repeat: 0,
				opacity: 1,
			})
			.to('#sec1 .ImgBox', {
				opacity: 0,
				x: 0,
				y: 0,
				scale: 1.15,
				duration: 1,
				repeat: 0,
				repeatDelay: 1,
				opacity: 1,
				backgroundSize: '100% 100%',
			});

		// LogoAction -> mainAction 순차 실행
		masterTimeline
			.add(LogoAction)
			.add(mainAction)
			.call(() => {
				window.scrollTo({
					top: document.querySelector('#sec2').offsetTop,
					behavior: 'smooth',
					delay: 1,
				});
			});
	};

	//**************************** */
	// section2 효과
	//**************************** */
	// const infoActive = gsap
	// 	.timeline()
	// 	.from('#sec3', { opacity: 0 })
	// 	.from('#sec3 .infoGBox .gBox', {
	// 		opacity: 0,
	// 		y: 200,
	// 		duration: 1,
	// 		repeat: 0,
	// 		stagger: 0.7,
	// 		ease: 'back',
	// 	})
	// 	.from(
	// 		'#sec3 .infoGBox .gBox1',
	// 		{
	// 			duration: 1.5,
	// 			onStart: () => {
	// 				document
	// 					.querySelectorAll('#sec3 .infoGBox .gBox1 .chaneNumber')
	// 					.forEach(number => {
	// 						animateCounter(number, 2025, 2002, 1);
	// 					});
	// 			},
	// 		},
	// 		'-=1.5',
	// 	);

	//숫자 변화 스크립트
	function animateCounter(element, startValue, endValue, duration) {
		element.textContent = startValue; // 카운터 초기값 설정

		const startCount = {
			var: startValue,
		};

		gsap.to(startCount, {
			var: endValue,
			duration: duration,
			ease: 'none',
			onUpdate: () => changeNumber(element, startCount),
			overwrite: true,
		});

		function changeNumber(element, startCount) {
			const textNode = element.firstChild;
			if (textNode) {
				textNode.textContent = startCount.var.toFixed();
			} else {
				element.textContent = startCount.var.toFixed();
			}
		}
	}
}
const runMainEffect = mainEffect();

// 페이지가 로드된 후 실행
document.addEventListener('DOMContentLoaded', runMainEffect);
