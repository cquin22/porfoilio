
$(document).on("ready", gogogo);
function gogogo(){
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       0,
	    mobile:       true,       // trigger animations on mobile devices (default is true)

      }
    );
    wow.init();


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
	wow.init();
} );

function actionegocityapp(){
	$('#Egocityapp').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Egocityapp').css({left: "-150%"});
		wow.init();
	});
}

function actionegocityweb(){
	$('#Egocityweb').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Egocityweb').css({left: "-150%"});
		wow.init();
	});
}

function actionegocitylp(){
	$('#Egocitylp').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Egocitylp').css({left: "-150%"});
		wow.init();
	});
}

function cursodjweb(){
	$('#Cursodjweb').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Cursodjweb').css({left: "-150%"});
		wow.init();
	});
}

function cursodjlp(){
	$('#Cursodjlp').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Cursodjlp').css({left: "-150%"});
		wow.init();
	});
}

function apic(){
	$('#Apic').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Apic').css({left: "-150%"});
		wow.init();
	});
}

function sura(){
	$('#Sura').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Sura').css({left: "-150%"});
		wow.init();
	});
}

function erika(){
	$('#Erika').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Erika').css({left: "-150%"});
		wow.init();
	});
}

function sillouet(){
	$('#Sillouet').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Sillouet').css({left: "-150%"});
		wow.init();
	});
}

function apolo(){
	$('#Apolo').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Apolo').css({left: "-150%"});
		wow.init();
	});
}

function sacu(){
	$('#Sacu').css({left: "0"});
	$(".icon-close").on("click", function(){
		$('#Sacu').css({left: "-150%"});
		wow.init();
	});
}





var map;
var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#197AA5' },
        { visibility: 'simplified' },
        { gamma: 0.9 },
        { weight: 0.9 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#197AA5' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 16,
    zoomControl: false,
    center: new google.maps.LatLng(6.151103, -75.618198),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);


  var contentString = '<div class="box-map">'+
  '<p>Cristian Quintero Rodriguez</p>' +
  '<p><span class="icon-apple4"></span>  311 2043337</p>' +
  '<p><span class="icon-fingerprint43"></span> (57-4) 3015785</p>' +
  '<p><span class="icon-email34"></span> cristianqr22@gmail.com</p>' +

  '</div>'
  ;



  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });


  var image = 'img/map.png';
  var myLatLng = new google.maps.LatLng(6.151103, -75.618198);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });

  google.maps.event.addListener(map, 'mouseover', function() {
    infowindow.open(map,beachMarker);
  });

  google.maps.event.addListener(map, 'click', function() {
    infowindow.open(map,beachMarker);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
