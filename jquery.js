
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".menu").toggleClass("open");
    $(".menu-list").toggleClass("open");
    $(this).toggleClass("anim");
  });
});
$(document).ready(function(){


		$(window).scroll(function(){
			if (  $(window).scrollTop() > 100  ) {
				$('.newnav').slideDown(500);
			}
			else{
				$('.newnav').slideUp(500);
			}

		});

		$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

		function myFunction1(){
	
	
	$('.singlePicture').hover(function(){

				$(this).find('.more-info').stop().animate({'margin-top':'0px'});
				$(this).find('.picsofworks').stop().animate({
															'width':'500px',
															'height': '450px',
															'margin-top': '-75px',
															'margin-left': '-75px'

														});
			}, 
			function(){
				$(this).find('.more-info').stop().animate({'margin-top':'299px'});
				$(this).find('.picsofworks').stop().animate({
															'width':'350px',
															'height': '299px',
															'margin-top': '0px',
															'margin-left': '0px'
														});
			});
	}

	function myFunction2(){
		$('.singlePicture').hover(function(){

				$(this).find('.more-info').stop().animate({'margin-top':'0px'});
				$(this).find('.picsofworks').stop().animate({
															'width':'300px',
															'height': '200px',
															'margin-top': '-30px',
															'margin-left': '-30px'

														});
			}, 
			function(){
				$(this).find('.more-info').stop().animate({'margin-top':'299px'});
				$(this).find('.picsofworks').stop().animate({
															'width':'200px',
															'height': '160px',
															'margin-top': '0px',
															'margin-left': '0px'
														});
			});
	}

	 var resdevice =  $(window).width();

	 if (resdevice < 960) {
	 	myFunction2();
	 }else{
	 	myFunction1();
	 }


	$(window).scroll(function(){
    if ($(this).scrollTop() > 100)    // Sayfa ne kadar aşağı kayarsa buton görünsün. 100 sayısı = Kaydırma çubuğunun piksel konumu. Bu sayı değiştirilebilir.
        $("#yukari").fadeIn(500);    // Yukarı çık butonu ne kadar hızla ortaya çıksın. 500 milisaniye = 0,5 saniye. Bu sayı değiştirilebilir.
    else 
        $("#yukari").fadeOut(500);    // Yukarı çık butonu ne kadar hızla ortadan kaybolsun. 500 milisaniye = 0,5 saniye. Bu sayı değiştirilebilir.
});
$(document).ready(function(){
    $("#yukari").click(function(){    // Yukarı çık butonuna tıklanıldığında aşağıdaki satır çalışır.
        $("html, body").animate({ scrollTop: "0" }, 500);    // Sayfa ne kadar hızla en yukarı çıksın.
        // 0 sayısı sayfanın en üstüne çıkılacağını belirtir.
        // 500 sayısı ne kadar hızla çıkılacağını belirtir. 500 milisaniye = 0,5 saniye. Bu sayı değiştirilebilir.
        return false;
    });
});	








});