//-------------------- TEXT SIZE ENLARGEMENT --------------------

//dynamically creating internal <style> element consisting of class .textBigger to prepare for toggling
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.textBigger { transition: .5s; font-size: 1.5em; }';
document.getElementsByTagName('head')[0].appendChild(style);

//function called to toggle text size
var txt = document.getElementsByClassName('about-section')[0].getElementsByTagName('p');
function enlargeText() {
	for(i = 0; i < txt.length ; i++) {
		txt[i].classList.toggle('textBigger');
	}
}

//-------------------- SEARCH FILTERING --------------------

var input1 = document.getElementById('musicSearch'),
	button4Filter = document.getElementById('button4Filter'),
	button4All = document.getElementById('button4All'),

	storedInput = document.getElementById('storedInput'),
	storedData = document.getElementById('storedData'),
	inputResults = document.getElementById('output');

button4Filter.addEventListener('click', filterResults);
button4All.addEventListener('click', allResults);

function filterResults() {
	storedInput.innerHTML = input1.value;
	
	//clear previous results
	inputResults.innerHTML = '';

	//monitor case sensitivity - capitalises first letter of input text value
	if(storedInput.innerHTML.charAt(0) != storedInput.innerHTML.charAt(0).toUpperCase() ) {
		storedInput.innerHTML = storedInput.innerHTML.charAt(0).toUpperCase() + storedInput.innerHTML.substr(1);
	}
	
	//display following message if nothing is entered
	if ( input1.value == '') {
		inputResults.innerHTML = "<p>You haven't entered anything...</p>"
	} else {
	
		//find and show matched data results (names of artists) if input is valid
		for(i = 0; i < storedData.getElementsByTagName('p').length; i++ ) {

			var str = storedData.getElementsByTagName('p')[i].innerHTML,
				checkMatch = str.includes(storedInput.textContent);
			
			// note: '+=' is to show multiple results rather than the last matching result
			if(checkMatch == true) {
				inputResults.innerHTML += '<p>'+str+'</p>';
			}
		}
	}

	//if no results found, notify user
	if ( inputResults.innerHTML == '' ) {
		inputResults.innerHTML = '<p>No results for "' + storedInput.textContent + '"';
	}
}

function allResults() {
	inputResults.innerHTML = storedData.innerHTML;
}


//-------------------- OTHERS (jQuery) --------------------

$(document).ready(function() {
	// $("input").focus();
	// var mySound = document.createElement('audio');
	// mySound.setAttribute('src', 'One More Time.mp3');
	// $('.play').click(function() {
	// 	mySound.play().dequeue();
	// 	$("body").animate({backgroundColor: 'blue'}, 1000);
	// });
// waiting time before growing out text and loadscreen fading out
	$(".intro p").delay(5000).animate({fontSize: "3em", opacity: "0"}, 550, "linear");
	$(".intro").delay(5550).fadeOut(1000);

// displays social button when 'sign up' is clicked
	$("#signup").click(function () {
		$(".sign table").fadeOut();
		$(".btn-block").fadeIn().animate({top: "+=50px"}, {duration: 400, queue: false});
	});
	// $(".btn-block").click(function() {
	// 	$(".sign table").fadeIn(); $(this).fadeOut(200).animate({top: "-=50px"}, 300);
	// });

// adjusting column span of first four nav links across all columns of the table
	$("nav tr:nth-child(-n+4) td").attr('colspan','3');

// show nav links
	$(".menuIcon").click(function() {
		$(this).children().toggle("slide");
		$("nav").toggleClass("menuMove");
	});

// close nav links, alternative method - by clicking outside the nav links
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

// go to page section, by correspondence of index number of both section and nav table row
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