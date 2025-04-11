function mainEffect() {
	//**************************** */
	// section1 효과
	//**************************** */
	const mainAction = gsap
		.timeline({})
		.to('#sec1 .motionText', {
			opacity: 0,
			y: -90,
			duration: 1,
			repeat: 0,
			opacity: 1,
			//stagger: 0.7,
			//ease: 'back',
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
			//ease: 'back',
		});

	//**************************** */
	// section2 효과
	//**************************** */
	const infoActive = gsap
		.timeline()
		.from('#sec2', { opacity: 0 })
		.from('#sec2 .titleBox', {
			opacity: 0,
			//y: -347,
			duration: 0.5,
			repeat: 0,
			repeatDelay: 1,
			ease: 'back',
		})
		.from('#sec2 .infoGBox .gBox', {
			opacity: 0,
			y: 200,
			duration: 1,
			repeat: 0,
			stagger: 0.7,
			ease: 'back',
		})
		.from(
			'#sec2 .infoGBox .gBox1',
			{
				duration: 1.5,
				onStart: () => {
					document
						.querySelectorAll('#sec2 .infoGBox .gBox1 .chaneNumber')
						.forEach(number => {
							animateCounter(number, 2025, 2002, 1);
						});
				},
			},
			'-=1.5',
		);

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

mainEffect();
//infoActive();
