// navbar
const listIcon = document.getElementById("list-icon");
const menuList = document.getElementById("nav-menu");

listIcon.addEventListener("click", ()=>{
    menuList.classList.toggle('hidden');
});

// about us carousel

let items = document.querySelectorAll('.about-container .list-items .item-slide');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// config param
let countItem = items.length;
let itemActive = 0;

//next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

function showSlider(){
    // ketika klik tombol akan menghasilkan new active jadi harus remove item old active
    let itemActiveOld = document.querySelector('.item-slide.active-item');
    itemActiveOld.classList.remove('active-item');

    // active new item
    items[itemActive].classList.add('active-item');
}

