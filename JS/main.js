$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    $('.owl-next span').text('Siguiente');
    $('.owl-prev span').text('Anterior');
});

var $grid = $('.collection-list').isotope({
    // options
}) 
// filter items on button click
$('.filter-button-group').on('click', 'button', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    })
})

<script> 
  document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
     
      document.getElementById('loader').style.display = 'block';
      
      setTimeout(function(){
       
        const href = item.getAttribute('href');
       
        window.location.href = href;
      }, 5000);
    });
  });
