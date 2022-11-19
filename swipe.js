const breakpoint = window.screen.width

if (breakpoint < 768) {

const swiper1 = new Swiper('.brands__swiper-container', {
    slidesPerView: 1.3,
    initialSlide : 0,
    spaceBetween: 20,
    loop: true,

  // If we need pagination
  pagination: {
    el: '.brands__swiper-pagination',
    clickable: true,
  },


    breakpoints: {     
      480: {       
         slidesPerView: 2,       
         spaceBetween: 20     
      },   

      640: {       
         slidesPerView: 2.5,       
         spaceBetween: 30     
      } 
   }

});


const swiper2 = new Swiper('.gadgets__swiper-container', {
    slidesPerView: 1.3,
    initialSlide : 0,
    spaceBetween: 25,
    loop: true,

  // If we need pagination
  pagination: {
    el: '.gadgets__swiper-pagination',
    clickable: true,
  },


    breakpoints: {     
      480: {       
         slidesPerView: 2,       
         spaceBetween: 20     
      },   

      640: {       
         slidesPerView: 2.5,       
         spaceBetween: 30     
      } 
   }

});

const swiper3 = new Swiper('.prices__swiper-container', {
    slidesPerView: 1.2,
    initialSlide : 0,
    spaceBetween: 15,
    loop: true,

  // If we need pagination
  pagination: {
    el: '.prices__swiper-pagination',
    clickable: true,
  },


    breakpoints: {     
      480: {       
         slidesPerView: 2,       
         spaceBetween: 20     
      },   

      640: {       
         slidesPerView: 2.5,       
         spaceBetween: 30     
      } 
   }

});

} 







