const buttonDemoLeading = document.querySelector(".btn-demo-leading");
const buttonDemoBaseline = document.querySelector(".btn-demo-baseline");
const buttonDemoStacked = document.querySelector(".btn-demo-stacked");
const demoToast = document.querySelector(".demo-toast")
const btnRetry = document.querySelector(".demo-retry")
const stackedToast= document.querySelector(".stacked-toast")


buttonDemoLeading.addEventListener("click",()=>{
    demoToast.classList.remove("leading-snackbar");
    demoToast.style.display = "flex"
    setTimeout(()=>{
        demoToast.style.display = "none"
    },2000)
})

buttonDemoBaseline.addEventListener("click",()=>{
    demoToast.classList.add("center-snackbar");
    demoToast.style.display = "flex"
    setTimeout(()=>{
        demoToast.style.display = "none"
    },2000)
})

buttonDemoStacked.addEventListener("click",()=>{
    stackedToast.classList.add("center-snackbar");
    stackedToast.style.display = "flex"
    setTimeout(()=>{
        stackedToast.style.display = "none"
    },2000)
})