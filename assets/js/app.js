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


// particle js
/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
