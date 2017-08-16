///// FUNCION UTILIZADA PARA DINAMIZAR EL FLUJO /////
///// No tener en cuenta para el proyecto final /////

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

$(document).ready(function(){
	////////////////////////////////////////////////////
	///////////////// SLIDER COLUMNAS //////////////////
	var pag_actual_col = 1;
	var total_pag_col = $(".columnas").length;
	// FUNCIONALIDAD DEL BOTON DE "PAGINA SIGUIENTE"
	$("body" ).on("click", ".right", function() {
		$(".columnas" ).animate({ "left": "-=1024px" }, "slow", function(){
			var $slide = $(this);
			if ($slide.hasClass("slide1") && pag_actual_col <= total_pag_col){
				pag_actual_col++;
				if (pag_actual_col == total_pag_col){
					$(".right").addClass("invisible");
					$(".left").removeClass("invisible");
				} else {
					$(".right").removeClass("invisible");
					$(".left").removeClass("invisible");
				}
			}
		});
	});
	// FUNCIONALIDAD DEL BOTON DE "PAGINA ANTERIOR"
	$("body" ).on("click", ".left", function() {
		$(".right").removeClass("invisible"); 	
		$(".columnas" ).animate({ "left": "+=1024px" }, "slow", function(){
			var $slide = $(this);
			if ($slide.hasClass("slide1")) {
				pag_actual_col--;
			} else {
				$(".left").removeClass("invisible");
			}
			if (pag_actual_col <= 1) {
				$(".left").addClass("invisible");
			}

		});
	});
	////////////////////////////////////////////////////
	/////////// SLIDER COLUMNAS-SERVICIOS //////////////
	var pag_actual_serv = 1;
	var total_pag_serv = $(".columnas-servicios").length;
	// FUNCIONALIDAD DEL BOTON DE "PAGINA SIGUIENTE"
	$("body" ).on("click", ".right", function() {
		$(".columnas-servicios" ).animate({ "left": "-=1024px" }, "slow", function(){
			var $slide = $(this);
			if ($slide.hasClass("slide1") && pag_actual_serv < total_pag_serv){
				pag_actual_serv++;
				if (pag_actual_serv == total_pag_serv){
					$(".right").addClass("invisible");
					$(".left").removeClass("invisible");
				} else {
					$(".right").removeClass("invisible");
					$(".left").removeClass("invisible");
				}
			}
		});
	});
	// FUNCIONALIDAD DEL BOTON DE "PAGINA ANTERIOR"
	$("body" ).on("click", ".left", function() {
		$(".right").removeClass("invisible"); 	
		$(".columnas-servicios" ).animate({ "left": "+=1024px" }, "slow", function(){
			var $slide = $(this);
			if ($slide.hasClass("slide1")) {
				pag_actual_serv--;
			} else {
				$(".left").removeClass("invisible");
			}
			if (pag_actual_serv <= 1) {
				$(".left").addClass("invisible");
			}

		});
	});

	// DELAY PARA LA ANIMACION JELLO DEL CHECK VERDE
	// ya que primero tiene el fade-in
	$('.fa-check').delay(0).queue(function(){
	  $(this).addClass("jello");
	});

	//MOSTRAR CHEQUE POR CHEQUE - FLUJO SIN TAREJTA
	// OJO!! Está hardcodeado para 4 cheques y para el flujo ST (sin tarjeta)
	var total_cheques_st = 4;
	var cheque_actual_st = 1;
	$("body" ).on("click", ".siguiente-cheque-ST", function() {
		if (cheque_actual_st < total_cheques_st){
			cheque_actual_st++;
			$(".clip").attr("src", "img/cheque"+cheque_actual_st+".bmp");
			if (cheque_actual_st == total_cheques_st){
				$(".siguiente-cheque-ST").replaceWith("<a href='depositar-monto-cheques.html?flujo=ST' class='btn btn-derecha btn-verde'><p>Aceptar</p></a>");
				$(".siguiente-cheque-ST").delay(000).queue(function(){
	  				$(this).addClass("pulse");
				});
			}
		} 
	});

	//MOSTRAR CHEQUE POR CHEQUE - FLUJO SIN TAREJTA
	// OJO!! Está hardcodeado para 4 cheques y para el flujo CT (con tarjeta)
	var total_cheques_ct = 4;
	var cheque_actual_ct = 1;
	$("body" ).on("click", ".siguiente-cheque-CT", function() {
		if (cheque_actual_ct < total_cheques_ct){
			cheque_actual_ct++;
			$(".clip").attr("src", "img/cheque"+cheque_actual_ct+".bmp");
			if (cheque_actual_ct == total_cheques_ct){
				$(".siguiente-cheque-CT").replaceWith("<a href='depositar-monto-cheques.html?flujo=CT' class='btn btn-derecha btn-verde'><p>Aceptar</p></a>");
				$(".siguiente-cheque-CT").delay(000).queue(function(){
	  				$(this).addClass("pulse");
				});
			}
		} 
	});





});