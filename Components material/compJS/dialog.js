const btnDialogDemo = document.querySelector(".btn-dialog-demo");
const dialog = document.querySelector(".dialog-demo")
const bodyOverlay = document.querySelector(".body-overlay")
const cancelBtnDemo = document.querySelector(".cancel-btn-demo")

btnDialogDemo.addEventListener("click",()=>{
    bodyOverlay.style.display = "block"
    dialog.style.display = "block"
    // document.body.style.opacity=".5";
})

cancelBtnDemo.addEventListener("click",()=>{
    bodyOverlay.style.display = "none"
    dialog.style.display = "none"
})