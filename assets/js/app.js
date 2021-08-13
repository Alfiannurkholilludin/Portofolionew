// function preload

window.addEventListener("load", () => {

	const preload = document.querySelector(".preload");
	preload.classList.add("preload-finish");

});

// function sticky navbar

window.addEventListener("scroll", function(){
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0 );
})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.hero',{}); 
sr.reveal('.wrapper-content-hero',{delay: 200}); 
sr.reveal('.wrapper-button-icon',{delay: 400}); 
sr.reveal('.container-social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about-wrapper-title',{}); 
sr.reveal('.content-text',{delay: 400}); 
sr.reveal('.cards',{delay: 400}); 
sr.reveal('.container-button-about',{delay: 400});

/*SCROLL Project*/
sr.reveal('.service',{});
sr.reveal('.service-wrapper-title',{delay: 400});
sr.reveal('.container-service',{delay: 400}); 
sr.reveal('.box',{delay: 400}); 
sr.reveal('.name',{delay: 400});
sr.reveal('.readmore',{delay: 400});
sr.reveal('.circle',{delay: 400});
sr.reveal('.product',{delay: 400});

/*SCROLL project*/
sr.reveal('.project',{});
sr.reveal('.project-wrapper-title',{delay: 400});
sr.reveal('.all-img-baris-1',{delay: 400}); 
sr.reveal('.image-induk-1',{delay: 400}); 
sr.reveal('.img1',{delay: 400});
sr.reveal('.img-overlay',{delay: 400});
sr.reveal('.btn-look',{delay: 400});


// Function mouse move
