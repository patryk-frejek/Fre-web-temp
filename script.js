window.onload = init;
const toggle = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navigation__list");
const navigation = document.querySelector(".navigation");

const header = document.querySelector(".header");
var left = document.getElementsByClassName("header__split")[0];
var right = document.getElementsByClassName("header__split")[1];
var split = document.getElementsByClassName("header__split");

function init() {
	toggle.onclick = () => {
		navbar.classList.toggle("active");
		navigation.classList.toggle("active");
		console.log("test");
	};
	left.onmouseenter = () => {
		left.style.width = "75%";
		right.style.width = "25%";
		right.style.left = "75%";
	};
	right.onmouseenter = () => {
		right.style.width = "75%";
		left.style.width = "25%";
		right.style.left = "25%";
	};
	left.onmouseleave = () => {
		right.style.width = "50%";
		left.style.width = "50%";
		right.style.left = "50%";
	};
	right.onmouseleave = () => {
		right.style.width = "50%";
		left.style.width = "50%";
		right.style.left = "50%";
	};
}
