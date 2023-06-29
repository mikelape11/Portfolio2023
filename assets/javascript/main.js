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
const menu = document.querySelector('.header__menu');
const body = document.querySelector("body");
const esBtn = document.querySelector("#es");
const enBtn = document.querySelector("#en");
const euBtn = document.querySelector("#eu");

if(esBtn) {
    esBtn.addEventListener("click", changeLangEs);
}
if(euBtn) {
    euBtn.addEventListener("click", changeLangEu);
}
if(enBtn) {
    enBtn.addEventListener("click", changeLangEn);
}

function changeLangEs() {
    location.href="/";
}
function changeLangEn() {
    location.href="/en/";
}
function changeLangEu() {
    location.href="/eu/";
}

setTimeout(function() {
    body.style.overflowY = "hidden";
    body.style.userSelect = "none";
    body.style.pointerEvents = "none";
}, 0);

setTimeout(function() {
    header.classList.remove('animation');
    body.style.overflowY = "auto";
    body.style.userSelect = "auto";
    body.style.pointerEvents = "auto";
    menu.style.opacity = 1;
}, 2000);

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

    var documentHeight = document.body.scrollHeight;
    var currentScroll = window.scrollY + window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li, i) => {
        li.classList.remove("active");

        if(currentScroll + 1 > documentHeight) {
            if(i == 4) {
                li.classList.add("active");
            }
        } else {
            if(li.getAttribute("id") == current+"2"){ 
                li.classList.add("active");  
            }
        }
    });

    sidebarDiv.forEach((div, i) => {
        div.classList.remove("active");

        if(currentScroll + 1 > documentHeight) {
            if(i == 4) {
                div.classList.add("active");
            }
        } else {
            if(div.getAttribute("id") == current+"2"){
                div.classList.add("active");
            }
        }
    });
}

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

document.querySelector(".header__options").addEventListener("mouseover", mouseOver);
document.querySelector(".header__options").addEventListener("mouseout", mouseOut);

function mouseOver() {
    body.style.overflowY = "hidden";
}

function mouseOut() {
    body.style.overflowY = "auto";
}

//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});

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
  'stroke-dashoffset 0.5s ease-in 1.2s';
// Go!
path.style.strokeDashoffset = 0;

// Glow effect

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}





