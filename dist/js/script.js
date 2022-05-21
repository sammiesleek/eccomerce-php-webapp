

$("#homesec .owl-carousel").owlCarousel({
    loop:false,
    nav:true,
    dots:true,
    autoplayTimeout:20000,
    autoplayHoverPause:false,
    // animateIn: 'animate_flipInX',
    // animateOut:'animate_slideOutUp', 
    // animateIn:'animate__bounceInDown',
    autoplay:true,
     lazyLoad:true,
     mouseDrag:true,
     responsive:{
            0:{
                items:1
            },
           
          
        }

})



$(document).ready(()=>{

     $(".owl-nav .owl-next").html(`<i class='bx bx-chevron-right'></i>`)
    $(".owl-nav .owl-prev").html(`<i class='bx bx-chevron-left'></i>`)
})