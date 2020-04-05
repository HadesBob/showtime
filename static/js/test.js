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
	var isTilesHide = false;
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


function initContent(id, iconUrl, title){
	$.getJSON('/static/json/description.json', function(data) {
             var x = findByName(data, id);
             var result = data.data;
               })
	var tilesContentWrapper = $('.content-wrapper');	
	var contentBox = $(document.createElement('div')).addClass('content-box').attr('id',id);
	tilesContentWrapper.append(contentBox);
	var tilesContentHeader = $(document.createElement('div')).addClass('content-header');
	contentBox.append(tilesContentHeader);
	var icon = $(document.createElement('img')).addClass('content-icon').attr('src','/static/photos/' + iconUrl);
	var title = $(document.createElement('h1')).addClass('content-title').text(title);
	var closeIcon = $(document.createElement('img')).addClass('close-icon').attr('src','/static/photos/close4.png').attr('value', id).attr('id', 'close-icon');
	tilesContentHeader.append(icon, title, closeIcon);
	var tilesContent = $(document.createElement('div')).addClass('content');
	contentBox.append(tilesContent);
	
		closeIcon.click(function(){
			var hide = gsap.timeline();
				hide.to(wheelContent, 0.5, {scale: 0.7,y:0},).to('.tile',0.5, {
					scale:0,
					y:80,
					opacity: 0,
					stagger:{
						amount:1,
						axis: "x",
						ease: Power3.easeOut
					}
				}, "-=1").to('#' + id, 0.5,{opacity: 0, filter:"blur(20px)"}, "-=1");
				isTilesHide = true;
		})
	}

	initContent("start-content", "start-icon.png", "HELLO WORLD");
	var tl = gsap.timeline();
	tl.from(letter, 1, {opacity: 0, filter:"blur(160px)", stagger: .25, ease:"ease-out"})
	.to(letter,1, {stagger:.01, color: "white", ease:"ease-out",textShadow:"0px 5px 10px white"})
	.to(letter,1, {stagger:.05,  textShadow:"0px 5px 40px gold", color: "gold", ease: "ease-out",opacity:0, filter:"blur(100px)"})
	.to('.video',0.5,{opacity:0, complete:removeVideoPart})
	.to('.video-wrapper',2,{opacity:0, ease: "linear"});
	
	
		tl2 = gsap.timeline({delay: 13});
		tl2.to(wheelWrapper,1,{visibility: "transparent"})
			.to(wheelContent,2,{scale:0.7, marginLeft:"600px", paddingTop: "500px", complete:removeVideoWrapper}, "-=1")
			.to('#start-content', 1, {opacity:1, filter:"blur(0px)"}).to('.tile', 1, {
					scale:1,
					y:0,
					opacity: 0.3,
					stagger:{
						amount:1,
						ease: Power3.linear
					}
				});

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

	
	


	


	$('.wheel-carrousel-item').click(function(e){
		var tile = document.querySelectorAll('.tile');
		var value = $(this).attr('value');
		var id;
		var iconUrl;
		var title;
		var array;
		switch(value) {
  			case "java":
    			id = "java-content";
    			iconUrl = "java-icon.png";
    			title = "JAVA";
    			
    			break;
  			case "html":
   				id = "html-content";
    			iconUrl = "html-icon.png";
    			title = "HTML and CSS";
  
   				break;
  			case "django":
  				id = "django-content";
    			iconUrl = "django-icon.png";
    			title = "DJANGO";
    
    			break;
    		case "skills":
  				id = "skills-content";
    			iconUrl = "skills-icon.png";
    			title = "OTHER SKILLS";
    			
    			break;
    		case "js":
  				id = "js-content";
    			iconUrl = "js-icon.png";
    			title = "JAVA SCRIPT";
    
    			break;
    		case "mysql":
  				id = "mysql-content";
    			iconUrl = "mysql-icon.png";
    			title = "MYSQL";
    			
    			break;
    		case "work":
  				id = "work-content";
    			iconUrl = "work-icon.png";
    			title = "EXPERIENCE";
    	
    			break;
    		case "school":
  				id = "school-content";
    			iconUrl = "school-icon.png";
    			title = "EDUCATION"
    			
    			break;
    		case "start":
  				id = "start-content";
    			iconUrl = "start-icon.png";
    			title = "HELLO WORLD";
    		
    			break;
		}

		if(isTilesHide){
			initContent(id, iconUrl, title, array);
			var show = gsap.timeline();
			show.to(wheelContent, 1, {scale: 0.5, y:100}).to('.tile', 1, {
					scale:1,
					y:0,
					opacity: 0.3,
					stagger:{
						amount:1,
						axis: "x",
						ease: Power3.easeOut
					}
				}, "-=1").to('#' + id, 1,{opacity: 1, filter:"blur(0px)"});
			isTilesHide = false;
		}else{
			return;
		}	
	});









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

		function findByName(array, name){
		for(var i=1; i<array.data.length; i++){
			if(array.data[i].name === name){
				return array.data[i].skills;
			}
			else{
				return "Kupsko";
			}
		}
	}
});

