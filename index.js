let slidebar=document.getElementById("slide");
let move=document.getElementById("move");
let img=document.querySelector(".img2");

move.oninput=()=>{
    let slideValue = move.value;
    img.style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
    slidebar.style.left=slideValue+"%";
}
