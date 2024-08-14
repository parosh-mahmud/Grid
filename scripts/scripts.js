document.getElementById("menu-toggle").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.classList.toggle("open");
});

document.getElementById("close-menu").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.classList.remove("open");
});
