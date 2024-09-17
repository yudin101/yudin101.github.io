document.addEventListener('DOMContentLoaded', () => {
	var typed = new Typed('#element', {
		strings: ['Coding Enthusiast', 'Web Developer', 'Student', 'Open Source Appreciator'],
		typeSpeed: 50,
		loop: true,
		loopCount: Infinity,
	});

	let themeToggleButton = document.querySelector('.intro-right-button');
	let body = document.querySelector('body');
	let stHeadRow = document.querySelector('.st-head-row');
	let projects = document.querySelectorAll('.project');

	let socials = [
		document.querySelector('.github'),
		document.querySelector('.x-twitter'),
		document.querySelector('.mail')
	]

	themeToggleButton.addEventListener('click', () => {
		if (themeToggleButton.innerHTML.includes('fa-moon')) {
			
			themeToggleButton.innerHTML = '<i class="far fa-sun"></i>';
			themeToggleButton.classList.add('dark-intro-right-button');
			body.classList.add('dark-body');
			stHeadRow.classList.add('dark-st-head-row');

			socials.forEach(social => {
				social.classList.add('dark-socials');
			});
			
			projects.forEach(project => {
				project.classList.add('dark-project');
			});
		} else {
			themeToggleButton.innerHTML = '<i class="far fa-moon"></i>';
			themeToggleButton.classList.remove('dark-intro-right-button');
			body.classList.remove('dark-body');
			stHeadRow.classList.remove('dark-st-head-row');

			socials.forEach(social => {
				social.classList.remove('dark-socials');
			});
			
			projects.forEach(project => {
				project.classList.remove('dark-project');
			});
		}
	});
});

