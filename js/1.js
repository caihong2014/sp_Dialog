$(document).ready(function() {
	$("#click_btn").click(function() {
		var nDiv = "<div style='width:100px;height:100px;background:red;position:relative'></div>";
		$(this).append(nDiv);
	});
});
