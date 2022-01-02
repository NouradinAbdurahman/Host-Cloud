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



// Scroll To Tup
const btnScrollToTup = document.querySelector(".scrollUp");
btnScrollToTup.addEventListener("click",() => {
    window.scrollTo ({
        top:0,
        left:0,
        behavior: "smooth"
    })    
});