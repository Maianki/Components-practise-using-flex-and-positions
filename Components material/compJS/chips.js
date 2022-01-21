const txtInput = document.querySelector(".input-box")
const closeBtn = document.querySelector(".close-btn")
const inputChipsDisplay = document.querySelector(".input-chips-display")

txtInput.addEventListener("keyup",(event)=>{
    if (event.key === "Enter") {
        console.log(event.target.value)
        const chipInnertext = event.target.value
        const newChip = document.createElement("div");
        newChip.innerHTML = `${chipInnertext} <i class="close-btn fa fa-close"></i>`;
        newChip.className = "chip"
        inputChipsDisplay.appendChild(newChip);
        event.target.value = "";
      }
     
})

// closeBtn.addEventListener('click',(e)=>{
//   console.log(closeBtn)
//   closeBtn.parentElement.style.display='none'
// })
