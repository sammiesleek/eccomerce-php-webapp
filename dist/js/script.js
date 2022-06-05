$(".togler").click(()=>{
   $(".nav3").addClass("open")
})

$(".close .bx").click(()=>{
   $(".nav3").removeClass("open")
})

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

$(".top-deals .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplayTimeout:5000,
    // autoplayHoverPause:false,
    // animateIn: 'animate_flipInX',
    // animateOut:'animate_slideOutUp', 
    // animateIn:'animate__bounceInDown',
    autoplay:true,
     lazyLoad:false,
     mouseDrag:true,
    //  margin:10,
     responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
            
           
          
        }

})
$(".new-arrival .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplayTimeout:5000,
    // autoplayHoverPause:false,
    // animateIn: 'animate_flipInX',
    // animateOut:'animate_slideOutUp', 
    // animateIn:'animate__bounceInDown',
    autoplay:true,
     lazyLoad:false,
     mouseDrag:true,
    //  margin:10,
     responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
            1200:{
                items:6
            }
            
           
          
        }

})
$(".top-selling .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplayTimeout:5000,
    // autoplayHoverPause:false,
    // animateIn: 'animate_flipInX',
    // animateOut:'animate_slideOutUp', 
    // animateIn:'animate__bounceInDown',
    autoplay:true,
     lazyLoad:false,
     mouseDrag:true,
    //  margin:10,
     responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:6
            }
            
           
          
        }

})
$(".banner1 .owl-carousel").owlCarousel({
    loop:false,
    nav:false,
    dots:true,
    // autoplayTimeout:20000,
    autoplayHoverPause:false,
    // animateIn: 'animate_flipInX',
    // animateOut:'animate_slideOutUp', 
    // animateIn:'animate__bounceInDown',
    autoplay:false,
     lazyLoad:false,
     mouseDrag:true,
     margin:10,
     responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
            
           
          
        }

})
$(".banner2 .owl-carousel").owlCarousel({
    loop:false,
    nav:false,
    dots:true,
    // autoplayTimeout:20000,
    autoplayHoverPause:false,
    // animateIn: 'animate_flipInX',
    // animateOut:'animate_slideOutUp', 
    // animateIn:'animate__bounceInDown',
    autoplay:false,
     lazyLoad:false,
     mouseDrag:true,
     margin:10,
     responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
           
            
           
          
        }

})



$(document).ready(()=>{

     $(".owl-nav .owl-next").html(`<i class='bx bx-chevron-right'></i>`)
    $(".owl-nav .owl-prev").html(`<i class='bx bx-chevron-left'></i>`)
})


$(document).ready(()=>{

     //  isotope filter  recent products
    var $grid= $(".grid").isotope({
        itemSelector:'.items',
        layoutMode:'fitRows'
    })
    $(".button-group").on("click", "button",function(e){
        $("#sfg .items").removeClass('off')
        $(".button-group button").removeClass('active')
        var filterValue=$(this).attr('data-filter');
       $(this).addClass('active')
       $grid.isotope({filter:filterValue})
      
    })

    
    var $grid = $(".grid").isotope({
        itemSelector:'.product',
       layoutMode:'fitRows'
    })
    $(".filter-selector").on('change', function()   {
         $("#sfg .items").removeClass('off')
        var filterValue = this.value;
        $grid.isotope({filter:filterValue})
    })
})