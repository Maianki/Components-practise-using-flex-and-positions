const buttonDemoLeading = document.querySelector(".btn-demo-leading");
const buttonDemoBaseline = document.querySelector(".btn-demo-baseline");
const demoToast = document.querySelector(".demo-toast")
const btnRetry = document.querySelector(".demo-retry")

buttonDemoLeading.addEventListener("click",()=>{
    demoToast.classList.remove("baseline-snackbar");
    demoToast.style.display = "flex"
    setTimeout(()=>{
        demoToast.style.display = "none"
    },2000)
})

buttonDemoBaseline.addEventListener("click",()=>{
    demoToast.classList.add("baseline-snackbar");
    demoToast.style.display = "flex"
    setTimeout(()=>{
        demoToast.style.display = "none"
    },2000)
})