$(document).ready(function(){
gsap.registerPlugin(MotionPathPlugin, TextPlugin, Draggable);
	var wrapper = $('.video-wrapper');
	spanWrapper = $(document.createElement('h1')).addClass("letter-span-wrapper");
	spanWrapper.css({"letterSpacing": "8px"});
	wrapper.append(spanWrapper);
	var windowWidth = $( window ).width();
	var windowHeight = $( window ).height();
	var documentWidth = $( document ).width();
	var documentHeight = $( document ).height();
	var wheelWrapper = $('.wheel-wrapper');
	var wheelContent = $('.wheel-content');
	var wheelCarousel = $('.wheel-carrousel');
	var wheelCarouselItem = document.querySelectorAll('.wheel-carrousel-item');
	generateSpan("Chcę zostać programistą!");
	var timesClicked = 0;
	var leftRocket = $('.rocket-left');
	var rightRocket = $('.rocket-right');
	var letter = document.querySelectorAll('.letter-span');
	var isTilesHide = true;
	


	var tl = gsap.timeline();
	tl.from(letter, 1, {opacity: 0, filter:"blur(160px)", stagger: .25, ease:"ease-out"})
	.to(letter,1, {stagger:.01, color: "white", ease:"ease-out",textShadow:"0px 5px 10px white"})
	.to(letter,1, {stagger:.05,  textShadow:"0px 5px 40px gold", color: "gold", ease: "ease-out",opacity:0, filter:"blur(100px)"})
	.to('.video',0.5,{opacity:0, complete:removeVideoPart})
	.to('.video-wrapper',2,{opacity:0, ease: "linear"});
	
	
		tl2 = gsap.timeline({delay: 1});
		tl2.to(wheelWrapper,1,{visibility: "transparent"})
			.to(wheelContent,4,{scale:0.8, marginLeft:"600px", paddingTop: "500px", complete:removeVideoWrapper}, "-=1");

			tl3 = gsap.timeline();
			tl3.fromTo(wheelCarousel,5,{rotateY:360},{rotateY:0,repeat: -1, ease: "linear"})
			
			
			wheelCarousel.mouseover(function(){
				tl3.pause();
				startWheel();
			});
			

			

	leftRocket.click(function(){
		tl3.pause();
		var prev = gsap.timeline();
		prev.fromTo(wheelCarousel, 1,{rotateY: timesClicked*40}, {rotateY: (timesClicked*40) - 40});
		timesClicked--;
		startWheel();
	})

	rightRocket.click(function(){
		tl3.pause();
		var next = gsap.timeline();
		next.fromTo(wheelCarousel, 1,{rotateY: timesClicked*40}, {rotateY: (timesClicked*40) + 40});
		timesClicked++;
		startWheel();
	})


	function startWheel(){
		setTimeout(function(){
			tl3.resume(); 
		}, 5000);
	}
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

	function initTiles(){
			var tilesWrapper = $('.tiles-container');
	
			var tilesWrapperWidth = tilesWrapper.width();
			var tilesWrapperHeight = tilesWrapper.height();
			for(var i=0; i<56; i++){
				var tile = $(document.createElement('div')).addClass('tile');
				tile.css({"width": tilesWrapperWidth/8, "height": tilesWrapperHeight/8, "backgroundColor":"grey" });
				tilesWrapper.append(tile);
			}
			
			}
initTiles();

	wheelCarousel.click(function(){
		var tile = document.querySelectorAll('.tile');
		if(isTilesHide){
			
			gsap.to('.tile', 1, {
					scale:1,
					y:0,
					stagger:{
						amount:1,
						axis: "x",
						ease: Power3.easeOut
					}
				})
			isTilesHide = false;
		}else{
			
			gsap.to('.tile', 1, {
					scale:0,
					y:80,
					stagger:{
						amount:1,
						axis: "x",
						ease: Power3.easeOut
					}
				})
			isTilesHide = true;
		}

		
			
				
		
	})
});

