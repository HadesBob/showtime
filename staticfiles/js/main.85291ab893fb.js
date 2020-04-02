$(document).ready(function(){
	var wrapper = $('.category-buttons-wrapper');
	

	function get_random_numbers_array(){
		var numbers = [];
		while(numbers.length < 10){
			var random = Math.floor((Math.random()*20));
			if(!numbers.includes(random)){
				numbers.push(random)
			}		
		}
		return numbers;
	}

	$.ajax({
			type: 'GET',
			url: '/quiz/category',
			success: function(data){
				var numbers = get_random_numbers_array();
				numbers.forEach(function(item){
					var label = data[item].category_name;
					var button = $(document.createElement('button'));
					button.text(label);
					button.css({"background-color": "green", "width": "100px"});
					wrapper.append(button);
				})	
				}	
		});

	
});