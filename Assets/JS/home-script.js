const listIcon = document.getElementById("list-icon");
const menuList = document.getElementById("nav-menu");

listIcon.addEventListener("click", ()=>{
    menuList.classList.toggle('hidden');
});

