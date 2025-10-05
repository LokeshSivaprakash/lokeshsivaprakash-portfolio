// Modern Portfolio Interactivity

// 1. Dynamic Year in Footer
document.addEventListener('DOMContentLoaded', function() {
	const yearSpan = document.getElementById('year');
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}
});

// 2. Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	document.querySelectorAll('a[href^="#"]').forEach(link => {
	  link.addEventListener('click', function(e) {
	    const target = document.querySelector(this.getAttribute('href'));
	    if (target) {
	      e.preventDefault();
	      target.scrollIntoView({ behavior: 'smooth' });
	    }
	  });
	});
});

// 3. Fade-in Animation on Scroll (for hero, cards, etc.)
function revealOnScroll() {
	const reveals = document.querySelectorAll('.fade-in, .card-animate');
	const windowHeight = window.innerHeight;
	reveals.forEach(el => {
		const top = el.getBoundingClientRect().top;
		if (top < windowHeight - 60) {
			el.classList.add('visible');
		}
	});
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
// Testimonials carousel: scroll on wheel/drag
const carousel = document.querySelector('.testimonials-carousel');
if (carousel) {
	let isDown = false;
	let startX;
	let scrollLeft;
	carousel.addEventListener('mousedown', (e) => {
		isDown = true;
		carousel.classList.add('active');
		startX = e.pageX - carousel.offsetLeft;
		scrollLeft = carousel.scrollLeft;
	});
	carousel.addEventListener('mouseleave', () => {
		isDown = false;
		carousel.classList.remove('active');
	});
	carousel.addEventListener('mouseup', () => {
		isDown = false;
		carousel.classList.remove('active');
	});
	carousel.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - carousel.offsetLeft;
		const walk = (x - startX) * 1.5;
		carousel.scrollLeft = scrollLeft - walk;
	});
	// Touch support
	carousel.addEventListener('touchstart', (e) => {
		isDown = true;
		startX = e.touches[0].pageX - carousel.offsetLeft;
		scrollLeft = carousel.scrollLeft;
	});
	carousel.addEventListener('touchend', () => {
		isDown = false;
	});
	carousel.addEventListener('touchmove', (e) => {
		if (!isDown) return;
		const x = e.touches[0].pageX - carousel.offsetLeft;
		const walk = (x - startX) * 1.5;
		carousel.scrollLeft = scrollLeft - walk;
	});
	// Wheel scroll
	carousel.addEventListener('wheel', (e) => {
		if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
			carousel.scrollLeft += e.deltaY;
			e.preventDefault();
		}
	}, { passive: false });
}

// 4. Accessibility: Remove tabindex after focus
document.addEventListener('focusout', function(e) {
	if (e.target && e.target.tabIndex === -1) {
		e.target.removeAttribute('tabindex');
	}
});
document.getElementById('year').textContent = new Date().getFullYear();

// Small entrance for hero and cards in case revealOnScroll didn't catch initial view
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function(){
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }, 220);
});