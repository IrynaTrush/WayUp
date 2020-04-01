let btn = document.getElementById('btn');
btn.onclick = function (each) {
    each.preventDefault();
    let change = document.getElementById('btn');
    change.classList.add('blue');
   }

$(function () {
	$(window).scroll(function() {
	    $('.item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.goal_h').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInDown");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('#form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomIn");
	        }
	    });
	});
})