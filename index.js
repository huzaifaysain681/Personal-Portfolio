const menu_barEL=document.getElementById("menu-bar");
const menu_iconEl=document.getElementById("menu-icon");
menu_iconEl.addEventListener('click',()=>{
    console.log("Clicked");
    menu_barEL.classList.toggle("active");
})