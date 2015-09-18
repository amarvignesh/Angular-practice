
jQuery(function(){						// shortcut for - $(document).ready | '$' is the shortcut for 'jQuery'
	console.log("hii jquery!");
	
	$("#divOne").css("background-color", "gold").slideUp(2000).slideDown(2000);

	
	$("a").click(function(event){
		event.preventDefault();
		$("a").addClass("thick");
		
		$(this).hide("slow");		
		
	});
	
	$('#divOne').click(function(event){
		
		$(this).hide("slow");
	});
	
});


$(window).load(function(){
	
	console.log("window loaded")
	
});