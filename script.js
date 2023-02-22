
window.onload = init;
const toggle = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navigation__list");
const header = document.querySelector(".header");
function init() {

	toggle.onclick = () => {
		navbar.classList.toggle("active");
		header.classList.toggle("active");
		console.log("testt");
	};
	
}


