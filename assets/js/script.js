


// MARQUEE
document.querySelectorAll('.marquee__track').forEach(track => {
    track.innerHTML += track.innerHTML;
});


//SWIPER
	
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },

      loop:true,
       autoplay: {
        delay:1000,
        disableOnInteraction: false,

      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets : true,
        
      },
    });