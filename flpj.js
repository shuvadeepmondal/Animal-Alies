let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn')
const userName = document.querySelector("#email");
const password = document.querySelector("#pass");
const button = document.querySelector("#btnn");

formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});
window.onscroll=()=>{
    menu.classList.remove('fa.xmark');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});
videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src =btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
    });
});
var swiper = new Swiper(".record-slider",{
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
})


const click = ()=>{
    console.log(userName.value);
    console.log(password.value);
}


button.addEventListener('click',click)