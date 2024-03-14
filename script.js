window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  var nav = document.querySelector(".navigation");
  var search = document.querySelector(".mob-searchbar");
  header.classList.toggle("sticky", window.scrollY > 0);
  nav.classList.toggle("sticky", window.scrollY > 0);
  search.classList.toggle("sticky", window.scrollY > 0);
});



$('.custom-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   responsive: [
      {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
  });


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation-container');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
})

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('no-scroll');
}))

