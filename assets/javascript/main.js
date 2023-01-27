'use strict'

console.log("\u2705 Javascript cargado")

AOS.init({
    anchorPlacement: 'top-bottom',
    duration: '500',
    once: true,
});

const scrollToTop = document.querySelector(".scroll-top");
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".header__li");
const sidebarDiv = document.querySelectorAll(".sidebar__indicator");
const openMenu = document.querySelector(".icon--menu");
const closeMenu = document.querySelector(".icon--exit");
const flipBtn  = document.querySelector("#tgl-btn");
const flipBtn2 = document.querySelector("#tgl-btn2");


setTimeout(function() {
    header.classList.remove('animation');
}, 2500);

window.onscroll = function() {scrollFunction(); menuActiveFunction();};

/*==================== HEADER SCROLL ====================*/

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var viewport_width = window.innerWidth;
    document.getElementById("scrollBar").style.width = scrolled + "%";
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("scroll");  
            scrollToTop.classList.remove("hide");  
        
    } else {
        header.classList.remove("scroll");    
        scrollToTop.classList.add("hide");  
    }
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
function menuActiveFunction () {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id"); 
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");

        if(li.getAttribute("id") == current+"2"){
            li.classList.add("active");
        }
    
    });

    sidebarDiv.forEach((div) => {
        div.classList.remove("active");

        if(div.getAttribute("id") == current+"2"){
            div.classList.add("active");
        }
  
    });
};

openMenu.addEventListener("click", openMenuFunction);
closeMenu.addEventListener("click", closeMenuFunction);

for(var i=0; i < navLi.length; i++){
    navLi[i].addEventListener("click", closeMenuFunction);
}

function openMenuFunction () {
    header.classList.add("mobile");  
}

function closeMenuFunction () {
    header.classList.remove("mobile");  
}




if(flipBtn) {
    flipBtn.addEventListener("click",  () => {
        document.querySelector(".about__card").classList.add("about__card--active");    
    })
}

if(flipBtn2) {
    flipBtn2.addEventListener("click",  () => {
        document.querySelector(".about__card").classList.remove("about__card--active");    
    })
}

// THEME COLOR
const themeColor = () => {
    const hueSlider = document.querySelector(".header__options__input");
    const html = document.querySelector("html");
  
    const setHue = (value) => {
      html.style.setProperty("--hue", value);
    //   document.querySelector(".js-hue").innerHTML = value;
    };
  
    hueSlider.addEventListener("input", function () {
      setHue(this.value);
  
      localStorage.setItem("--hue", this.value);
    });
  
    const slider = (value) => {
      hueSlider.value = value;
    };
  
    if (localStorage.getItem("--hue") !== null) {
        setHue(localStorage.getItem("--hue"));
        slider(localStorage.getItem("--hue"));
    } else {
        const hue = getComputedStyle(html).getPropertyValue("'--hue");
        console.log(hue);
        slider(hue.split(" ").join(" "));
    }
  };
themeColor();

var path = document.querySelector('path');
var length = path.getTotalLength();

// Clear any previous transition
path.style.transition = path.style.WebkitTransition = 'none';

// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;

// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 0.8s ease-in 1.2s';
// Go!
path.style.strokeDashoffset = 0;





