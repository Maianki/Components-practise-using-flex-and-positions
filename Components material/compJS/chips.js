const txtInput = document.querySelector(".input-box")

const addChip = ()=>{

}
txtInput.addEventListener("keyup",(event)=>{
    if (event.key === "Enter") {
        addChip(event.target.value);
        console.log(event.target.value)
        event.target.value = "";
      }
})