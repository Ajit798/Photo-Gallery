AOS.init();
$('.portfolio-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
$('.portfolio-item ul li').click(function(){
    $('.portfolio-item ul li').removeClass("active");
    $(this).addClass("active");
})
