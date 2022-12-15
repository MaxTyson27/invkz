$(function () {

  $(".content__body span").on("click", function (event) {
    event.preventDefault();

		const id  = $(this).attr('data-href'),
			top = $(id).offset().top - 100
    $('body,html').animate({scrollTop: top}, 1500);
    
    
  });

});

