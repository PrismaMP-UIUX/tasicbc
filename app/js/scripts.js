///// FUNCION UTILIZADA PARA DINAMIZAR EL FLUJO /////
///// No tener en cuenta para el desarrollo /////

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}

function searchToObject() {
  var pairs = window.location.search.substring(1).split("&"),
    obj = {},
    pair,
    i;

  for ( i in pairs ) {
    if ( pairs[i] === "" ) continue;

    pair = pairs[i].split("=");
    obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
  }

  return obj;
}
////////////////////////////////////////////////////////


/* FUNCION PARA BOTONES SIGUIENTE Y ANTERIOR DE SLIDER */
var Slider = {
	init : function(){
		//console.log("Inicializando slider...");
		this.$slider = $(".slider");
		this.$left = $(".paginado .left");
		this.$right = $(".paginado .right");
		this.pag_actual = 1;
		this.total_slides = this.$slider.find(".slide").length;
		$("#pagina-actual").html(this.pag_actual);
		$("#pagina-fin").html(this.total_slides);
		//console.log("El slider tiene {0} slides".format(this.total_slides));
		this.$right.click(function() {
		//	SSFramework.initTimeout();
			if(Slider.pag_actual < Slider.total_slides && !Slider.$slider.hasClass("sliding"))
				Slider.slide(1);
		});
		this.$left.click(function(){
		//	SSFramework.initTimeout();
			if(Slider.pag_actual > 1 && !Slider.$slider.hasClass("sliding"))
				Slider.slide(-1);
		});
		//console.log("El width actual es: ",$(window).width());
		//this.updateStyles();

		/*$(window).resize(function() {
			Slider.updateStyles();
		});*/

	},

	updateStyles : function(){
		var win_width = $(window).width(); //Window Width
		var slide_count = $(".slider .slide").length;
		console.log("Window width: {0}px, slide count: {1}".format(win_width,slide_count));
		$(".slider").css({
			"width" : (win_width * slide_count)+"px",
			"position" : "relative"
		});
		$(".slider .slide").css({"width" : win_width+"px"});
	},

	slide : function(direction){
		//console.log("Hola.. deslizando hacia: "+(direction > 0 ? "derecha" : "izquierda"));
		this.$slider.addClass("sliding");
		this.$slider.animate({ "left": (direction > 0 ? "-=1024px" : "+=1024px") }, "slow", function(){
			//Lo siguiente se ejecuta cuando TERMINA la animacion
			Slider.pag_actual += direction;
			$("#pagina-actual").html(Slider.pag_actual);

			if (Slider.pag_actual <= 1 && !Slider.$left.hasClass("invisible"))
				Slider.$left.addClass("invisible");
			else
				Slider.$left.removeClass("invisible");

			if (Slider.pag_actual >= Slider.total_slides && !Slider.$right.hasClass("invisible"))
				Slider.$right.addClass("invisible");
			else
				Slider.$right.removeClass("invisible");

			Slider.$slider.removeClass("sliding");
		});
	}
};


$(document).ready(function(){

	Slider.init();
	////////////////////////////////////////////////////
	///////////////// SLIDER COLUMNAS //////////////////
	// var pag_actual_col = 1;
	// var total_pag_col = $(".columnas").length;
	// // FUNCIONALIDAD DEL BOTON DE "PAGINA SIGUIENTE"
	// $("body" ).on("click", ".right", function() {
	// 	$(".columnas" ).animate({ "left": "-=1024px" }, "slow", function(){
	// 		var $slide = $(this);
	// 		if ($slide.hasClass("slide1") && pag_actual_col <= total_pag_col){
	// 			pag_actual_col++;
	// 			if (pag_actual_col == total_pag_col){
	// 				$(".right").addClass("invisible");
	// 				$(".left").removeClass("invisible");
	// 			} else {
	// 				$(".right").removeClass("invisible");
	// 				$(".left").removeClass("invisible");
	// 			}
	// 		}
	// 	});
	// });
	// FUNCIONALIDAD DEL BOTON DE "PAGINA ANTERIOR"
	// $("body" ).on("click", ".left", function() {
	// 	$(".right").removeClass("invisible");
	// 	$(".columnas" ).animate({ "left": "+=1024px" }, "slow", function(){
	// 		var $slide = $(this);
	// 		if ($slide.hasClass("slide1")) {
	// 			pag_actual_col--;
	// 		} else {
	// 			$(".left").removeClass("invisible");
	// 		}
	// 		if (pag_actual_col <= 1) {
	// 			$(".left").addClass("invisible");
	// 		}

	// 	});
	// });
	// ////////////////////////////////////////////////////
	// /////////// SLIDER COLUMNAS-SERVICIOS //////////////
	// var pag_actual_serv = 1;
	// var total_pag_serv = $(".columnas-servicios").length;
	// // FUNCIONALIDAD DEL BOTON DE "PAGINA SIGUIENTE"
	// $("body" ).on("click", ".right", function() {
	// 	$(".columnas-servicios" ).animate({ "left": "-=1024px" }, "slow", function(){
	// 		var $slide = $(this);
	// 		if ($slide.hasClass("slide") && pag_actual_serv < total_pag_serv){
	// 			pag_actual_serv++;
	// 			if (pag_actual_serv == total_pag_serv){
	// 				$(".right").addClass("invisible");
	// 				$(".left").removeClass("invisible");
	// 			} else {
	// 				$(".right").removeClass("invisible");
	// 				$(".left").removeClass("invisible");
	// 			}
	// 		}
	// 	});
	// });
	// // FUNCIONALIDAD DEL BOTON DE "PAGINA ANTERIOR"
	// $("body" ).on("click", ".left", function() {
	// 	$(".right").removeClass("invisible");
	// 	$(".columnas-servicios" ).animate({ "left": "+=1024px" }, "slow", function(){
	// 		var $slide = $(this);
	// 		if ($slide.hasClass("slide")) {
	// 			pag_actual_serv--;
	// 		} else {
	// 			$(".left").removeClass("invisible");
	// 		}
	// 		if (pag_actual_serv <= 1) {
	// 			$(".left").addClass("invisible");
	// 		}

	// 	});
	// });

	// DELAY PARA LA ANIMACION JELLO DEL CHECK VERDE
	// ya que primero tiene el fade-in
	$('.fa-check').delay(0).queue(function(){
	  $(this).addClass("jello");
	});
	$('.fa-times').delay(0).queue(function(){
	  $(this).addClass("jello");
	});

	//MOSTRAR CHEQUE POR CHEQUE - FLUJO SIN TAREJTA
	// OJO!! Está hardcodeado para 4 cheques y para el flujo ST (sin tarjeta)
	var total_cheques_st = 4;
	var cheque_actual_st = 1;
	$("body" ).on("click", ".siguiente-cheque-ST", function() {
		if (cheque_actual_st < total_cheques_st){
			cheque_actual_st++;
			$(".clip").attr("src", "../../img/cheque"+cheque_actual_st+".bmp");
			if (cheque_actual_st == total_cheques_st){
				$(".siguiente-cheque-ST").replaceWith("<a href='depositar-monto-cheques.html?flujo=ST' class='btn btn-derecha-bottom btn-verde'><p>Aceptar</p></a>");
				$(".siguiente-cheque-ST").delay(000).queue(function(){
	  				$(this).addClass("pulse");
				});
			}
		}
	});

	//MOSTRAR CHEQUE POR CHEQUE - FLUJO CON TAREJTA
	// OJO!! Está hardcodeado para 4 cheques y para el flujo CT (con tarjeta)
	var total_cheques_ct = 4;
	var cheque_actual_ct = 1;
	$("body" ).on("click", ".siguiente-cheque-CT", function() {
		if (cheque_actual_ct < total_cheques_ct){
			cheque_actual_ct++;
			$(".clip").attr("src", "../../img/cheque"+cheque_actual_ct+".bmp");
			if (cheque_actual_ct == total_cheques_ct){
				$(".siguiente-cheque-CT").replaceWith("<a href='depositar-monto-cheques.html?flujo=CT' class='btn btn-derecha-bottom btn-verde'><p>Aceptar</p></a>");
				$(".siguiente-cheque-CT").delay(000).queue(function(){
	  				$(this).addClass("pulse");
				});
			}
		}
	});

});
