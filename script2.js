// ZMIENNE=========================

const toggle = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navigation__list");
var navigation = document.querySelector(".navigation");
const nav_item = document.querySelectorAll(".navigation__item");
const dropmenu = document.querySelectorAll(".dropmenu");
const linkButton = document.querySelectorAll(".link-button");
const contactBar = document.querySelector(".header__contact-list");

var form = document.getElementById("form");
var container = document.querySelector(".quotation__container");
var quotationContainer = document.querySelector(".quotation__form");

//MAIN FUNCTIONS
window.onload = init;
window.onresize = () => {
	autoTopNavi();
	formSizeChange();
};

//LOWER LEVEL FUNCTIONS
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
}

function autoTopNavi() {
	if (window.innerWidth <= 600) {
		navigation.style.top = contactBar.clientHeight + "px";
	} else {
		navigation.style.top = 0 + "px";
	}
}
function formSizeChange() {
	if (window.innerWidth <= 900) {
		let width = window.innerWidth - 30 + "";
		form.setAttribute("width", `${width}`);
	}
}
