
$(document).on("ready", gogogo);
function gogogo(){
    var scrollorama = $.scrollorama({
        blocks:'.myBody'
    });
    //scrollorama.animate('#Header',{ delay: 400, duration: 600, property:'top', start:0, end:0, });
    scrollorama.animate('#Anmleft',{ duration: 500, property:'left', start:-1500,end:0});
    scrollorama.animate('#Anmcenter',{ duration: 700, property:'opacity', start:0,end:1});
    scrollorama.animate('#Anmrigth',{ duration: 500, property:'right', start:-1500,end:0});

  //$('#LinkMenu').on("click", animatemenu); 
       
}


var topdelmenu = $("header").offset().top;
$(window).scroll(function(){
	var pos = $(window).scrollTop();
	   if (pos > topdelmenu){
	     $ ("header").addClass("top-fixed");
  
	   }
	   else {
	     $("header").removeClass("top-fixed").fadeIn(100);
	   }		
});

/*
function animatemenu(){
	$('#Menu').animate({right: "0"});
}

*/
$("#LinkMenu").click( function(event){
	event.preventDefault();
	if ($(this).hasClass("isDown") ) {
		$("#Menu").animate({right: "0"}, 200);			
		$(this).removeClass("isDown");
	} else {
		$("#Menu").animate({right:"-100%"}, 200);	
		$(this).addClass("isDown");
	}
	return false;
});