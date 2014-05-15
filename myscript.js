divs = $("div");
divs.each(
	function(i,e){
		if(!$(e).is("#container_wrapper")){
			$(e).empty();
		}
	});

scripts = $("script");
scripts.each(
	function(i,e){
		$(e).remove();
	});