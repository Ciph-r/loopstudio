const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click", toggle);

function toggle() {
	btn.classList.toggle("open");
	menu.classList.toggle("flex");
	menu.classList.toggle("hidden");
}
