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
    let containerEl = document.querySelector('#project-block__content');

    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });

    
     //Увеличивать и уменьшать карточки в микситапе по количеству в фильтре

     const filterToggles = document.querySelectorAll(".project-block__menu button");
     const portfolioBigCards = document.querySelectorAll(".project-card");

     for (let i = 0; i < filterToggles.length; i++) {
         filterToggles[i].addEventListener("click", function() {
             if (i ==0) {
                 for (let j = 0; j < 2; j++) {
                     portfolioBigCards[j].classList.add("project-card--big")
                 }
             } else {
                 for (j = 0; j < 2; j++) {
                     portfolioBigCards[j].classList.remove("project-card--big")
                 }
             }
         });
     }

     
     //Добавить надпись над плейсхолдером
     const formItems = document.querySelectorAll(".contacts-form__field");

     for(let item of formItems) {
         const thisParent = item.closest(".contacts-form__item");
         const thisPlaceholder = thisParent.querySelector(".fake-placeholder");

        //Если input в фокусе
        item.addEventListener("focus", function() {
            thisPlaceholder.classList.add("active");
        });

        //Если input не в фокусе
        item.addEventListener("blur", function() {

            if(item.value.length > 0){
                thisPlaceholder.classList.add("active");
            } else {
                thisPlaceholder.classList.remove("active");
            }
        })

     }

})