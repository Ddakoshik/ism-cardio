$(document).ready(function() {
	
	
//	setTimeout(function(){
//		$.fancybox({
//			href: '#formPopapEmailId',
//			prevEffect:'fade',
//			nextEffect:'fade',
//			padding:0,
//			helpers:{overlay:{locked:false}}
//		});
//	}, 30000);
//	
//	$(window).scroll(function(){
//		if ( $(this).scrollTop() > 0){
//			$('.headerMenuScrol').addClass("fixedmenu");
//		} else if($(this).scrollTop() <= 0) {
//			$('.headerMenuScrol').removeClass("fixedmenu");
//		}
//	});
	
	
//	
//	$(window).scroll(function() {
//		if($(this).scrollTop() !== 0) {
//			$('.totop').fadeIn();
//		} else {
//			$('.totop').fadeOut();
//		}
//	});
//	
//	
//	$('.formPopapClass').fancybox({
//		prevEffect:'fade',
//		nextEffect:'fade',
//		padding:0,
//		helpers:{overlay:{locked:false}}
//	});
//	
//	
//	$(".navMenu, .totopblock").on("click","a", function (event) {
//        event.preventDefault();
//        var id  = $(this).attr('href'),
//            top = $(id).offset().top;
//        $('body,html').animate({scrollTop: top-70}, 1500);
//    });
	
	
	
	
	$('.popapClass').fancybox({
		prevEffect:'fade',
		nextEffect:'fade',
		padding:0,
		helpers:{overlay:{locked:false}}
	});

	
	$('.owl-carousel1').owlCarousel({
		loop:true,
		margin:0 ,
		nav:false,
		autoWidth: false,
//		navText: ["<img src='/img/btn-2.png'>","<img src='/img/btn.png'>"],
		dots:false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:6
			}
		}
	})
	
	$('.owl-carousel2').owlCarousel({
		loop:true,
		margin:0 ,
		nav:true,
		autoWidth: false,
		navText: ["<img src='/img/layer-36.png'>", "<img src='/img/layer-35.png'>"],
		dots:true,
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
	

	
	
	$('[name="field_6"]').val($('h1').text()); // Форма заказа в товаре
	
	$(document).on('click', '.smb_btn', function(){ 
		
		var this_btn = $(this);
		//this_btn.attr('disabled','disabled');

		var form = $(this).parent('form');
		var dataform = form.serialize();
		$('input, textarea').removeClass('error');
		
		//console.log('cli');
		
		$.ajax({
			url:"",
			type:"POST",
			dataType:"json",
			data:dataform,
			success: function(response){
				//console.log(response);
				$(response.block).html();
				$(response.block).html(response.html);
				if(response.error !== undefined){ 
					for (var i = 0; i < response.error.length; i++) {
						//console.log(response.error[i]);
						$('[name="'+response.error[i]+'"]').addClass('error');
						this_btn.removeAttr('disabled');
					}
				}else{
					form.trigger('reset');
					this_btn.removeAttr('disabled');
				}
				
			}
		});
		
		return false;

	});	
		
});

 

function initMap() {
	var originalMapCenter = new google.maps.LatLng(50.258914, 28.655377);
	var  myLatLng = new google.maps.LatLng(50.258914, 28.655377);
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: originalMapCenter
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Житомир, ул. Победы, 18A'
	});
}
