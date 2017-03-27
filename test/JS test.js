var myDiv = document.getElementsByClassName('div1')[0];

myDiv.addEventListener('click', fadeOut);

function fadeOut(){
	myDiv.classList.toggle('fade-out');
	setTimeout(function () {myDiv.classList.toggle('fade-out-2');}, 500);
}	

//function fadeOut(){
//	if(click != 0) {
//		myDiv.classList.toggle('fade-out');
//		click = 0;
//	} else if (click == 0) {
//		myDiv.classList.add('fade-out');
//		click = 1;
//	}
//}

//	$(document).ready(function() {
//		$("input[name='something']").change(function() {
//			$(".div1 p").html($(this).val());
//		});
//		
////		$("input").change(function() {
////			$(".div1 p").html($(this).val());
////		});
//	});