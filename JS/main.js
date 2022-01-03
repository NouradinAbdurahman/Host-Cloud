const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);


// Open nad Close Menu
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navBar = document.getElementById("nav");

openMenu.addEventListener("click", () => {
  navBar.classList.add("open-close");
})

closeMenu.addEventListener("click", () => {
  navBar.classList.remove("open-close");
})




// Scroll To Tup
const btnScrollToTup = document.querySelector(".scrollUp");
btnScrollToTup.addEventListener("click",() => {
    window.scrollTo ({
        top:0,
        left:0,
        behavior: "smooth"
    })    
});

