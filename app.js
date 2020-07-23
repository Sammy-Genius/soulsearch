const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");
const sideMenuList = document.querySelectorAll(".side-menu-list");
const logo = document.querySelector(".logo");
const closeBtn = document.querySelector(".close-btn");
let tl = gsap.timeline();

tl.from("body", {opacity:0, duration:1, y:50, stagger:.5}, "+=.3");

//open the side menu

menuBtn.addEventListener("click", () => {
  if (sideMenu.style.visibility == "hidden") {
      sideMenu.style.visibility = "visible";
      sideMenu.style.width = "80%";
      sideMenu.style.height = "100vh";
      sideMenu.style.borderRadius = "0px 0px 0px 400px";
      tl.from(".side-menu .side-menu-list li", {opacity:0, y:50, stagger:.5});
  } 
  else {
    sideMenu.style.visibility = "hidden";
  }
});

//close the side menu 

closeBtn.addEventListener("click", () => {
  if (sideMenu.style.visibility == "visible") {
      sideMenu.style.visibility = "hidden";
      sideMenu.style.width = "0%";
      sideMenu.style.height = "0vh";
      sideMenu.style.borderRadius = "50%";
  } 
  else {
    sideMenu.style.visibility = "visible";
  }
});