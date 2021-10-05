const menuBtn = document.querySelector('#menuBtn');
const sideNav = document.querySelector('#sideNav');
let sideNavStatus = false;

menuBtn.addEventListener('click', e => {
  if(!sideNavStatus) {
    sideNav.style.width = "384px";
    sideNavStatus = !sideNavStatus;
  }else {
    sideNav.style.width = "0";
    sideNavStatus = !sideNavStatus;
  }
})

