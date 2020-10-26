const home = document.querySelector(".home"),
      about = document.querySelector(".about"),
      project1 = document.querySelector(".project__content--1"),
      project2 = document.querySelector(".project__content--2"),
      project3 = document.querySelector(".project__content--3"),
      project4 = document.querySelector(".project__content--4")


window.addEventListener("scroll",()=>{
    let pageYOffset = window.pageYOffset + (screen.height/2);

    if( pageYOffset > home.offsetTop) {
        document.querySelector(".home__tit").classList.remove("hidden");
    }
    if( pageYOffset > about.offsetTop) {
        document.querySelector(".about__wrap").classList.remove("hidden");
    }
    if( pageYOffset > project1.offsetTop) {
        document.querySelector(".project__content--1").classList.remove("hidden");
    }
    if( pageYOffset > project2.offsetTop) {
        document.querySelector(".project__content--2").classList.remove("hidden");
    }
    if( pageYOffset > project3.offsetTop) {
        document.querySelector(".project__content--3").classList.remove("hidden");
    }
    if( pageYOffset > project4.offsetTop) {
        document.querySelector(".project__content--4").classList.remove("hidden");
    }
})