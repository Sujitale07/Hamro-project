const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

ham.addEventListener("click" , ()=> {
    nav.classList.toggle("active")
    ham.classList.toggle("active")
})

 // select the first <nav> element


