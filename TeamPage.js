
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
    let gray=document.getElementById('grayout');
    let card=document.getElementById('maincard');
    let c_img,c_name,c_team,c_about;
    let card_visible=false;
    card_c = card.children;
    for(var i = 0; i < card_c.length; i++) {
      if(card_c[i].tagName=='IMG'){
        c_img=card_c[i];
      }
      if(card_c[i].className == 'name') {
        c_name=card_c[i];
      }
      if(card_c[i].className == 'team') {
        c_team=card_c[i];
      }
      if(card_c[i].className == 'about') {
        c_about=card_c[i];
      }
    }

  function show(div){
    console.log(div);
    c = div.children;
    gray.style.display='block';
    card.style.display='block';
    card_visible=true;
    c_name.innerHTML='';
    c_team.innerHTML='';
    c_img.src='';
    c_about.innerHTML='';
    for(var i = 0; i < c.length; i++) {
      if(c[i].tagName=='IMG'){
        c_img.src=c[i].src.replace('team/','team/in/');
      }
      if(c[i].className == 'name') {
          c_name.innerHTML=c[i].innerHTML;
      }
      if(c[i].className == 'team') {
        c_team.innerHTML=c[i].innerHTML;
      }
      if(c[i].className == 'about') {
        c_about.innerHTML=c[i].innerHTML;
      }
    }
  }

  gray.onclick = function(e){
    if (card_visible && e.target != card){
      gray.style.display='none';
      card.style.display='none';
    }
  }

  document.onkeydown = function(e) {
    if(e.key === "Escape") {
      gray.style.display='none';
      card.style.display='none';
    }
  }
  