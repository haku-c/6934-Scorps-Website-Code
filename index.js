/* fade in for the main robot picture
var tl=gsap.timeline(); 
tl.from("#robot-background",{
    webkitFilter: 'blur(6px)', filter: 'blur(6px)', duration: 2
});
tl.from(".team-name",{
    duration: 2, y:30, ease:"power1"
},"-=2");
*/
var tween1=gsap.timeline();
tween1.from(".about-horiz-line", {
    opacity:0, x:-100, duration: 1, ease: "power1" 
});
tween1.from(".about-container p", {
    opacity:0, x:-100, duration: 1, ease: "power1" 
},"-=.5");
var tween2=gsap.timeline();
tween2.from(".first-horiz-line", {
    opacity:0, x:100, duration: 1, ease: "power1" 
});
tween2.from(".first-container p", {
    opacity:0, x:100, duration: 1, ease: "power1" 
},"-=.5");
tween2.from(".button1", {
    opacity:0, x:100, duration: 1, ease: "power1" 
},"-=.5");
var controller=new ScrollMagic.Controller();
var scene=new ScrollMagic.Scene({
      triggerElement:".about-container",
      triggerHook: 0.75,
      reverse:false
   })
  .setTween(tween1)
  .addTo(controller);

var scene=new ScrollMagic.Scene({
    triggerElement:".first-container",
    triggerHook: 1,
    reverse:false
 })
.setTween(tween2)
.addTo(controller);

/*function that pulls up the mobile dropdown*/
var pullupMobile=gsap.timeline();
pullupMobile.paused(true);
pullupMobile.to(".navbar-mobile-dropdown",{
    y:-30, opacity:0, display:"none", duration:0.5, ease:"power1"
});
// function that moves the mobile dropdown down
var dropdownMobile=gsap.timeline();
dropdownMobile.paused(true);
dropdownMobile.to(".navbar-mobile-dropdown",{
   y:0,display:"flex",opacity:1, duration:0.1
});

/*toggles if it is up or down*/
var extendedDownMobile=false;
function toggleMobileDropdown(){
    if(extendedDownMobile){
        pullupMobile.play(0);
        console.log("up");
    }else{
        dropdownMobile.play(0);
        console.log("down");
    }
}
const navbarMobile= document.querySelector(".fa-bars");
navbarMobile.addEventListener("click",(e)=>{
    if(dropdown.isActive()||pullup.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleMobileDropdown();
    extendedDownMobile=!extendedDownMobile;
});

/*function that pulls down the dropdown*/
var dropdown=gsap.timeline();
dropdown.paused(true);
dropdown.from("nav ul li ul",{
    y:-20, duration:1, ease:"power1"
});
dropdown.to("nav ul li ul",{
    display:"block", duration:1, opacity:1
},"-=1");
/*function that pulls up the dropdown*/
var pullup=gsap.timeline();
pullup.paused(true);
pullup.to("nav ul li ul",{
    y:-20, duration:0.5, ease:"power1"
});
pullup.to("nav ul li ul",{
    display:"none", opacity:0, duration:0.5
});
/*toggles if it is up or down*/
var extendedDown=false;
function toggleNavbarRight(){
    if(extendedDown){
        pullup.play(0);
        console.log("pullup");
    }else{
        console.log("dropdown");
        dropdown.play(0);
    }
}
const navbarRight= document.querySelector(".memory-pulldown");
navbarRight.addEventListener("click",(e)=>{
    if(dropdown.isActive()||pullup.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleNavbarRight();
    extendedDown=!extendedDown;
});

var controller2 = new ScrollMagic.Controller();
var parallax = new ScrollMagic.Scene({
    triggerElement: ".parallax",
    duration:"200%"
})
.setTween("#robot-background", {
    backgroundPosition:"50% 120%",
    ease: Linear.easeNone
})
.addTo(controller2);

$(document).ready(function() {
    // page is fully loaded, including all frames, objects and images
setTimeout(function(){

  $('.preloader').css("display","none");
  //gets rid of scrollbar
  $('body').css("overflow","visible");
  $('header').css("visibility","visible");
  $('main').css("visibility","visible");
  $('footer').css("visibility","visible");
}, 1500);
}); 

