function toggleMenu() {
	document.getElementById("navigation").classList.toggle("open");
	document.getElementById("hamButton").classList.toggle("open");
}

const x = document.getElementById("hamButton");
x.onclick = toggleMenu;


///Date/// 

const now = new Date();
const nowDate = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"
}).format(now);
document.getElementById('header-date')
	.innerText = nowDate;


///Banner///
if (now.getDay() == 1 || now.getDay() == 2) {
	document.getElementById('announcement')
		.style.display = "flex";
}	





