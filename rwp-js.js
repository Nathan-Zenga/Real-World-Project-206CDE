$(document).ready(function() {
	// $("input").focus();
	// var mySound = document.createElement('audio');
	// mySound.setAttribute('src', 'One More Time.mp3');
	// $('.play').click(function() {
	// 	mySound.play().dequeue();
	// 	$("body").animate({backgroundColor: 'blue'}, 1000);
	// });
	$(".intro p").delay(5000).animate({fontSize: "3em", opacity: "0"}, 550, "linear");
	$(".intro").delay(5550).fadeOut(1000);
	$("#signup").click(function () {
		$(".sign table").fadeOut();
		$(".btn-block").fadeIn().animate({top: "+=50px"}, {duration: 400, queue: false});
	});
	$(".btn-block").click(function() {
		$(".sign table").fadeIn(); $(this).fadeOut(200).animate({top: "-=50px"}, 300);
	});
	$("nav tr:nth-child(-n+4) td").attr('colspan','3');
	$(".menuIcon").click(function() {
		$(this).children().toggle("slide");
		$("nav").toggleClass("menuMove");
	});
	$("section, #toTop").click(function() {
		$(".menuIcon span:first-child").show("slide");
		$(".menuIcon span:last-child").hide("slide");
		$("nav").removeClass("menuMove");
	});

	// function getRandomColor() {
	// 	var letters = '0123456789ABCDEF';
	// 	var color = '#';
	// 	for (var i = 0; i < 6; i++ ) {
	// 		color += letters[Math.floor(Math.random() * 16)];
	// 	}
	// 	return color;
	// }

	$("nav tr").click(function() {
		if($(this).index() >= 1) {
			$("html, body").animate({ scrollTop: $("body").find("section").eq($(this).index()).offset().top }, 500);
		} else {
			$("html, body").animate({ scrollTop: $("body").find("section").eq($(this).index()+1).offset().top }, 500);
		}
	});
	$("#arrow-left, #arrow-right").click(function() {
		$("section span").slideToggle();
		$(".arrows").toggle();
	});
	$(".charts tr:first-child td").attr("colspan","2");
	$("#toTop, .logo").click(function() {
		$("html, body").animate({ scrollTop: $("html, body").offset().top }, 500);
	});
	$(".charts tr:first-child").click(function () {
		$(".charts").append( "<tr name='new'>" + $(".charts tr:last-child").html() + "</tr>" );
		$(".charts tr[name=new]:last-child").hide().fadeIn(500);
	});

	$(window).scroll(function() {
		if( $(window).scrollTop() > 10 ) {
			$("#toTop").css("opacity", "1");
		} else {
			$("#toTop").css("opacity", "0");
		}
	});
});