$(function() {
	var navButton = document.querySelector('.nav-mobile-button');
	navButton.addEventListener('click', function() {
		var menu = document.querySelector('.nav-heading');
		var icon = document.querySelector('.nav-mobile-button i.fa');
		var body = document.querySelector('body');
		if (!menu.classList.contains('nav-open')) {
			menu.classList.add('nav-open');
			icon.classList.remove('fa-bars');
			icon.classList.add('fa-times');
			body.style.overflow = 'hidden';
		}
		else {
			menu.classList.remove('nav-open');
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
			body.style.overflow = 'auto'
		}
	});
});
