const tabItem = document.querySelectorAll(".tab-item")
const tabInfo = document.querySelectorAll(".tab-info")

tabItem.forEach((eachTabItem)=>{
    eachTabItem.addEventListener('click',(e)=>{
        if(e.target.innerText === "Dogs"){
            tabInfo[0].style.display = "block"
            tabInfo[1].style.display = "none"
            tabInfo[2].style.display = "none"
            tabItem[0].classList.add("active")
            tabItem[1].classList.remove("active")
            tabItem[2].classList.remove("active")

        }else if(e.target.innerText === "Cats"){
            tabInfo[1].style.display = "block";
            tabInfo[0].style.display = "none";
            tabInfo[2].style.display = "none";
            tabItem[1].classList.add("active");
            tabItem[0].classList.remove("active");
            tabItem[2].classList.remove("active");
        }else{
            tabInfo[2].style.display = "block";
            tabInfo[0].style.display = "none";
            tabInfo[1].style.display = "none";
            tabItem[2].classList.add("active");
            tabItem[0].classList.remove("active");
            tabItem[1].classList.remove("active");
        }
    })
});