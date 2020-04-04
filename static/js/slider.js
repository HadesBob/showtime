$(document).ready(function(){
		var leftRocket = $('.rocket-left');
		var rightRocket = $('.rocket-right');
		var carrousel = $('.slider-carrousel');
		var timesClicked = 0;
		var isClicked = false;
		var tl2 = gsap.timeline();
		var scrollLeft;
		var pageXDown;
		var pageXUp;


		tl2.fromTo(carrousel, 6,{rotateY: 0}, {rotateY: 360, repeat: -1, ease: "linear"});
		carrousel.mousemove(function(e){
		
		});
		carrousel.mousedown(function(e){
			pageXDown = e.pageX;
		});
		carrousel.mouseup(function(e){
			pageXUp = e.pageX;
			var scrollLeft = pageXDown - pageXUp;
			$( "#log" ).text( "value: " + scrollLeft);
		});
	leftRocket.click(function(){
		tl2.pause(2);
		var tl = gsap.timeline();
		tl.fromTo(carrousel, 1,{rotateY: timesClicked*40}, {rotateY: (timesClicked*40) - 40});
		timesClicked--;
		
	})

	rightRocket.click(function(){
		tl2.pause(2);
		var tl = gsap.timeline();
		tl.fromTo(carrousel, 1,{rotateY: timesClicked*40}, {rotateY: (timesClicked*40) + 40});
		timesClicked++;
		
	})
carrousel
	$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY )});
;
});