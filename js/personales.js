
$(document).on("ready", gogogo);
function gogogo(){
    var scrollorama = $.scrollorama({
        blocks:'.myBody'
    });
    //scrollorama.animate('#Header',{ delay: 400, duration: 600, property:'top', start:0, end:0, });
    scrollorama.animate('#Anmleft',{ duration: 500, property:'left', start:-1500,end:0});
    scrollorama.animate('#Anmcenter',{ duration: 700, property:'opacity', start:0,end:1});
    scrollorama.animate('#Anmrigth',{ duration: 500, property:'right', start:-1500,end:0});


//Animaciones hover portafolio 
var cambiosCSSboxIn = {background: "#5196b4"}
var cambiosCSSscaleIn = {transform: "scale(1.1)",}

var cambiosCSSboxOut = {background: "rgba(255,255,255,0.1)"}
var cambiosCSSscaleOut = {transform: "scale(1.0)",}

var cambiosCSScaptionIn = {bottom: "0"}
var cambiosCSScaptionOut = {bottom: "-100%"}

$('.box-portafolio').mouseover( function(){
	$(this).css(cambiosCSSboxIn)
	$(this).find(".img-por").css(cambiosCSSscaleIn);
	$(this).find(".caption").css(cambiosCSScaptionIn);

})
.mouseout( function(){
	$(this).css(cambiosCSSboxOut)
	$(this).find(".img-por").css(cambiosCSSscaleOut);
	$(this).find(".caption").css(cambiosCSScaptionOut); 
});


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


$("#LinkMenu").click( function animatemenu(event){
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

$(".limenus").on("click", function(){
	$("#Menu").animate({right:"-100%"}, 200);	
	$("#LinkMenu").addClass("isDown");
} );

function actionegocityapp(){
	$('#Egocityapp').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Egocityapp').css({left: "-150%"});
	});
}

function actionegocityweb(){
	$('#Egocityweb').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Egocityweb').css({left: "-150%"});
	});
}

function actionegocitylp(){
	$('#Egocitylp').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Egocitylp').css({left: "-150%"});
	});
}

function cursodjweb(){
	$('#Cursodjweb').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Cursodjweb').css({left: "-150%"});
	});
}

function cursodjlp(){
	$('#Cursodjlp').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Cursodjlp').css({left: "-150%"});
	});
}

function apic(){
	$('#Apic').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Apic').css({left: "-150%"});
	});
}

function sura(){
	$('#Sura').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Sura').css({left: "-150%"});
	});
}

function erika(){
	$('#Erika').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Erika').css({left: "-150%"});
	});
}

function sillouet(){
	$('#Sillouet').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Sillouet').css({left: "-150%"});
	});
}

function apolo(){
	$('#Apolo').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Apolo').css({left: "-150%"});
	});
}

function sacu(){
	$('#Sacu').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Sacu').css({left: "-150%"});
	});
}