$(document).ready(function(){
gsap.registerPlugin(MotionPathPlugin, TextPlugin);
	var wrapper = $('.video-wrapper');
	spanWrapper = $(document.createElement('h1')).addClass("letter-span-wrapper");
	spanWrapper.css({"letterSpacing": "8px"});
	wrapper.append(spanWrapper);
	var windowWidth = $( window ).width();
	var windowHeight = $( window ).height();
	var documentWidth = $( document ).width();
	var documentHeight = $( document ).height();
	console.log(windowWidth);
	console.log(documentWidth);
	var wheelWrapper = $('.wheel-wrapper');
	var wheelContent = $('.wheel-content');
	var wheelCarousel = $('.wheel-carrousel');
	var wheelCarouselItem = document.querySelectorAll('.wheel-carrousel-item');
	generateSpan("Chcę zostać programistą!");

	var letter = document.querySelectorAll('.letter-span');
	var tl = gsap.timeline();
	tl.from(letter, 1, {opacity: 0, filter:"blur(160px)", stagger: .25, ease:"ease-out"})
	.to(letter,1, {stagger:.01, color: "white", ease:"ease-out",textShadow:"0px 5px 10px white"})
	.to(letter,1, {stagger:.05,  textShadow:"0px 5px 40px gold", color: "gold", ease: "ease-out",opacity:0, filter:"blur(100px)"})
	.to('.video',0.5,{opacity:0, complete:removeVideoPart})
	.to('.video-wrapper',2,{opacity:0, ease: "linear"});
	
	

	
		tl2 = gsap.timeline({delay: 15});
		tl2.to(wheelWrapper,1,{visibility: "transparent"})
			.to(wheelContent,4,{scale:1, marginLeft:"600px", paddingTop: "400px", complete:removeVideoWrapper}, "-=1");

			tl3 = gsap.timeline();
			tl3.fromTo(wheelCarousel,3,{rotateY:360},{rotateY:0,repeat: -1, ease: "linear"});
			
			wheelCarousel.mouseover(function(){
				tl3.pause();
			});
			wheelCarousel.mouseout(function(){
				tl3.play();
			});

			
	$('.wheel-carrousel-item').mouseover(function(){
		gsap.to($(this), 1, {scale:0.8});
	});
	$('.wheel-carrousel-item').mouseout(function(){
		gsap.to($(this), 1, {scale: 1});
	});
	function removeVideoWrapper(){
		wrapper.remove();
	}
	function removeVideoPart(){
		$('.video').remove();
		$('.letter-span-wrapper').remove();
	}


	function generateLettersArray(string){
		var text = string;
		var l = text.length;
		var lettersArray = [];

		for(var x = 1; x<l+1; x++){
			var letter = text.slice(x-1, x);
			lettersArray.push(letter);
		}
		console.log(lettersArray);
		return lettersArray;
		
	}
	function generateSpan(text){
		var array = generateLettersArray(text);
		
		for(var i = 0; i<array.length; i++){
			var iteration = i/5.5;
			var span = $(document.createElement("span")).text(array[i]).addClass("letter-span");
			spanWrapper.append(span);
			
		}
		
	}
	
});

