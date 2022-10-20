const share =  document.querySelector(".share");
 const shareIcon = document.querySelector(".share-icon");
const icon = document.querySelector(".icons");
const tri = document.querySelector(".triangle");

  share.addEventListener("click", ()=>{
icon.classList.remove("hidden");
tri.style.display = "block"
 });

 shareIcon.addEventListener("click", ()=>{
    icon.classList.add("hidden");
    tri.style.display = "none"
     });

    

 