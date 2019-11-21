'use strict;'

var sliderPrev = '<a class="carousel-control-prev" href="#" role="button"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>',
    sliderNext = '<a class="carousel-control-next" href="#" role="button"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>';



$(document).ready(function(){
    $('.close').click(function(e){
        e.preventDefault();
        $('.modal, .overlay').hide();
    });
    $('#category').select2({
        minimumResultsForSearch: -1
    });
    $('#support-carousel').slick({
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: sliderPrev,
        nextArrow: sliderNext,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              dots: true
            }
          },
        ]
    });
    $('#greetings-carousel').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: sliderPrev,
        nextArrow: sliderNext,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          },
        ]
    });
    $('.programm-header').click(function(e){
        if ($(this).hasClass('active')) {
            $(this).find('i').removeClass('up').addClass('down')
            $(this).removeClass('active').next().slideUp("slow");
        } else {
            $(this).find('i').removeClass('down').addClass('up');
            $(this).addClass('active').next().slideDown("slow");
        }
    });
    $(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function(event){
            var xMove = event.originalEvent.touches[0].pageX;
            if( Math.floor(xClick - xMove) > 5 ){
                $(this).carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -5 ){
                $(this).carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    });
    $('#greetModal').on('show.bs.modal', function (event) {
        var text = $(event.relatedTarget).data('text');
        $('.greet-img').prop('src', 'img/greetings-1-ph-'+text+'.jpg');
        $('.greet-text').append(mContent.greetings[text]);
    });
    $('#greetModal').on('hide.bs.modal', function (event) {
        $('.greet-img').prop('src','');
        $('.greet-text').html('');
    });
    $('#partnersModal').on('show.bs.modal', function (event) {
        var text = $(event.relatedTarget).data('text');
        $('.partners-text').append(mContent.partners[text]);
    }); 
    $('#partnersModal').on('hide.bs.modal', function (event) {
        $('.partners-text').html('');
    });
});
function bindContactForm() {
	var form = $('#sendForm');

    event.preventDefault(); 
    $("#sendForm .form-control").each(function() {
        validate ($(this), $(this).prop('type'));
    });
    if ($('.form-control.is-invalid').length == 0 )  {
        var formData = form.serialize();
        $.ajax({
                url: 'send.php',
                type: "POST",
                data: formData,
                beforeSend: function() {
                    $('#sendForm input,  #sendForm button').prop('disabled', 'disabled');
                },
                success: function(result) {

                    $('.success-modal, .overlay').show();
                    $('#sendForm input,  #sendForm button').prop('disabled', false);
                    $('#sendForm input').val('');
                },
                error: function(data) {
                    form.html('Oops! Произошла ошибка и ваше письмо не отправилось').css('opacity', '1');					
                }
        });  
    }

};

function validate (self, propType) {
	var  regEmail = /^[a-zа-яё0-9](([_\.\-]?[a-zа-яё0-9]+)*)@([a-zа-яё0-9]+)(([\.\-]?[a-zа-яё0-9]+)*)\.([a-zа-яё])+$/;
	if (self.val() == "" && propType != 'email') {
		self.addClass('is-invalid');
	} else if (propType == 'email') {
		if (self.val().trim() == "") {
			self.addClass('is-invalid');
		} else if (!(regEmail.test(self.val().toLowerCase()))) {
			self.addClass('is-invalid');		
		} else {
			self.removeClass('is-invalid');			
		}	
    } else if (propType == 'select-one') {
        if (self.val() == null) {
            self.addClass('is-invalid');
        } else {
            self.removeClass('is-invalid');	
        }
    } else if (propType == 'checkbox') {
        if (self.prop('checked')) {
            self.removeClass('is-invalid');
        } else {
            self.addClass('is-invalid');	
        }
    } else {
		self.removeClass('is-invalid');
	} 
}
