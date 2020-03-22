/* MENU RESPONSIVO */

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle  = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
  
  document.body.style.overyflow = show ? "hidden" : "inicial"

  menuSection.classList.toggle("on", show)
  show = !show;

})