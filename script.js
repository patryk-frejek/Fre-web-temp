window.onload = init;


window.onresize = () => {
	if (window.innerWidth <= 600) {
		navigation.style.top = contactBar.clientHeight + "px";;
	} else {
		navigation.style.top = 0 + "px";;
		
	}
	
}
const toggle = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navigation__list");
var navigation = document.querySelector(".navigation");
const nav_item = document.querySelectorAll(".navigation__item");
const dropmenu = document.querySelectorAll(".dropmenu");
const contactBar = document.querySelector(".header__contact-list");
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

	for (let i = 0; i < nav_item.length; i++) {
		nav_item[i].onmouseenter = () => dropmenu[i].classList.add("active");
		dropmenu[i].onmouseenter = () => dropmenu[i].classList.add("active");
		dropmenu[i].onmouseleave = () => {
			setTimeout(() => {
				dropmenu[i].classList.remove("active");
			}, 100);
		};
		nav_item[i].onmouseleave = () =>
			setTimeout(() => {
				dropmenu[i].classList.remove("active");
			}, 100);
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
