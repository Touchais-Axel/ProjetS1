const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const cross = document.querySelector('.cross');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu');
    
    burger.addEventListener('click',() => {
        // Toggle NaV
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');

    });
       
    cross.addEventListener('click',() => {
        // Toggle NaV
        nav.classList.toggle('nav-active');
    
        // Burger Animation
        cross.classList.toggle('toggle');
        


    });
}

navSlide();