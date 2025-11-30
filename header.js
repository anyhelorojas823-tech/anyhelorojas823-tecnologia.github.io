const btnMenu = document.getElementById("btn-menu");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});
