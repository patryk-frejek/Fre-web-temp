window.onload = init;
window.onresize = () => {
	autoTopNavi();
	formSizeChange();
};

const toggle = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navigation__list");
var navigation = document.querySelector(".navigation");
const nav_item = document.querySelectorAll(".navigation__item");
const dropmenu = document.querySelectorAll(".dropmenu");
const linkButton = document.querySelectorAll(".link-button");
const contactBar = document.querySelector(".header__contact-list");
const header = document.querySelector(".header");
var left = document.getElementsByClassName("header__split")[0];
var right = document.getElementsByClassName("header__split")[1];
var split = document.getElementsByClassName("header__split");
const form = document.querySelector(".form");

function init() {
	autoTopNavi();
	formSizeChange();
	toggle.onclick = () => {
		navbar.classList.toggle("active");
		toggle.firstChild.classList.toggle("fa-xmark");
		toggle.firstChild.classList.toggle("fa-bars");

		navigation.classList.toggle("active");
		console.log("test");
	};

	for (let i = 0; i < linkButton.length; i++) {
		linkButton[i].onclick = () => dropmenu[i].classList.toggle("active");
	}

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

function autoTopNavi() {
	if (window.innerWidth <= 600) {
		navigation.style.top = contactBar.clientHeight + "px";
	} else {
		navigation.style.top = 0 + "px";
	}
}
function formSizeChange() {
	if (window.innerWidth <= 600) {
		let width = window.innerWidth - 30 + "";
		form.setAttribute("width", `${width}`);
	}
}
