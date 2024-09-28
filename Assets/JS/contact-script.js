// navbar
const listIcon = document.getElementById("list-icon");
const menuList = document.getElementById("nav-menu");

listIcon.addEventListener("click", ()=>{
    menuList.classList.toggle('hidden');
});



let items = document.querySelectorAll('.contact-container .list-items .item-slide');
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

//contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = document.querySelector('input[name="subject"]:checked');

    // First Name and Last Name validation
    if (firstName.length < 5 ) {
        isValid = false;
        alert('First Name must be atleast 5 characters');
    }

    if (lastName.length < 5 ) {
        isValid = false;
        alert('Last must be atleast 5 characters');
    }

    // Email validation
    if (!email.endsWith('@gmail.com')) {
        isValid = false;
        alert('email must be end with @gmail.com');
    }

    // Phone number validation
    if (phone.length < 10 || phone.length > 12) {
        isValid = false;
        alert('phone number input must be atleast 10 characters and maximum 12 characters');
    }

    // Subject radio button validation
    if (!subject) {
        isValid = false;
        alert('subject radio must be checked');
    }

    // Message box validation
    if (message === '') {
        isValid = false;
        alert('message box must be fill');
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can add your form submission logic here
    } else {
        // Prevent form submission
        console.log('Form validation failed.');
    }
});
