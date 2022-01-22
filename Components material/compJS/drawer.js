const btnDismissible = document.querySelector(".btn-demo-dismissible")
const nav = document.querySelector("nav")
const main = document.querySelector(".main")
btnDismissible.addEventListener('click',()=>{
    // main.classList.toggle("toggle-margin-lft");
    nav.classList.toggle("dismissible-drawer");
})