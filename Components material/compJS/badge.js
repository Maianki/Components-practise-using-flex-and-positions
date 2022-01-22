const btnIcon = document.querySelector(".btn-toggle")
const toggleBadge = document.querySelector(".toggle-badge")
btnIcon.addEventListener("click",()=>{
    toggleBadge.classList.toggle("toggle-btn-icon");
})