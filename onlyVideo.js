var f = $("#container_wrapper");
var body = $("body");
body.children().each(
	function(i,e){
		$(e).remove();
	});
f.css("height","100%").css("width","100%");
body.append(f);
