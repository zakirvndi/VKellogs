// navbar
const listIcon = document.getElementById("list-icon");
const menuList = document.getElementById("nav-menu");

listIcon.addEventListener("click", ()=>{
    menuList.classList.toggle('hidden');
});

//filter product n brand
const allFilterItems = document.querySelectorAll('.filter-product');
const allFilterBtns = document.querySelectorAll('.filter-btn');
const allFilterBrns = document.querySelectorAll('.filter-brn');

// brand

allFilterBrns.forEach((brn) => {
    brn.addEventListener('click', () => {
        showFilteredContent(brn);
    });
});

function showFilteredContent(brn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(brn.id)){
            resetActiveBrn();
            brn.classList.add('active-brn');
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBrn(){
    allFilterBrns.forEach((brn) => {
        brn.classList.remove('active-brn');
    });
}


//product

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

