const navMenu = document.getElementById("nav-menu");
const Hamburg = document.getElementById("hamburg");
const navLinks = document.querySelectorAll(".nav_link");

Hamburg.addEventListener("click", ()=>{
    Hamburg.classList.toggle("ri-menu-line");
    Hamburg.classList.toggle("ri-close-line");

navMenu?.classList.toggle("-translate-y-full");
  navMenu?.classList.toggle("translate-y-0");
  navMenu?.classList.toggle("opacity-0");
  navMenu?.classList.toggle("opacity-100");
  navMenu?.classList.toggle("pointer-events-none");
  navMenu?.classList.toggle("pointer-events-auto");

  

})

function closeNavMenu() {
  if (!navMenu?.classList.contains("translate-y-0")) return;

  navMenu.classList.remove("translate-y-0");
  navMenu.classList.add("-translate-y-full");
  navMenu.classList.remove("opacity-100");
  navMenu.classList.add("opacity-0");
  navMenu.classList.remove("pointer-events-auto");
  navMenu.classList.add("pointer-events-none");

  Hamburg?.classList.remove("ri-close-line");
  Hamburg?.classList.add("ri-menu-line");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeNavMenu);
})

