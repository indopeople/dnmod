$(function () {
	/*-------------------------------------------------------------------------------------*/

	
	//ページ内スクロール
	
	$('a').on('click', function(){
		var link= $(this).attr("href");
		var scl = $(link).offset().top;
		$("html,body").animate({scrollTop : scl - 130}, 400);

	});



	$('#menu > li').hover(function () {
		$('.subMenu', this).stop().animate({height: 'show'}, 300);
	}, function () {
		$('.subMenu', this).stop().animate({height: 'hide'}, 300);
	});





	$('#gtop').click(function () {
		$('body,html').animate({scrollTop: 0}, 300);
		return false;
	});


	//chara
	for (var i = 0 ; i < 9 ; i++){
		$('#cButton').append("<img src='img/chara/b"+i+".jpg'>");
	}

	$(document)
		.on('mouseenter','#cButton img', function () {
		$(this).stop(true,true).fadeTo(500,1);
		id=$(this).index();
		$('#cImage').css({backgroundImage:'none'})
		$('#cImage div').css({backgroundImage:'url(img/chara/c'+id+'.jpg)'});

	})
		.on('mouseleave','#cButton img', function () {
		$(this).stop(true,true).fadeTo(500,0.6);
		$('#cImage div').css({backgroundImage:'none'});
		$('#cImage').css({backgroundImage:'url(img/chara/bg.jpg)'});
	});//document




	/*-------------------------------------------------------------------------------------*/
});
