let sun = true;
let sunMoon = document.getElementsByClassName("darkToggle");
sunMoon[0].addEventListener("click",(e)=>{
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        e.target.className="fa-solid fa-moon";
        e.target.style.color = "white";
    }else{
        e.target.className="fa-solid fa-sun";
        e.target.style.color = "yellow";
    }
})

