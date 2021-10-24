$(document).ready(function () {

    const toggleMenu = document.querySelector(".toggle-menu"); //иконка гамбургер
    const mobMenu = document.querySelector(".mobile-menu"); //иконка гамбургер
    const overlay = document.querySelector("#overlay");//overlay
    const bodyEl = document.body;
    
    //прослушиваем клик по гамбургеру
    toggleMenu.addEventListener("click", function() {
        this.classList.toggle("active");
        mobMenu.classList.toggle("active");
        overlay.classList.toggle("active");
        bodyEl.classList.toggle("noscroll");
    });
    
    //прослушиваем клик по области меню
    mobMenu.addEventListener("click", function() {
        this.classList.remove("active");
        toggleMenu.classList.remove("active");
        overlay.classList.remove("active");
        bodyEl.classList.remove("noscroll");
    
    })

    
    //-фильтрация проектов
    let containerEl = document.querySelector('#portfolio-projects');

    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });

   

})