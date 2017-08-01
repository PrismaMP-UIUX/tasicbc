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

	// DELAY PARA LA ANIMACION PULSE DEL BOTON VERDE
	// ya que primero tiene el fade-in
	$('.btn-verde').delay(1500).queue(function(){
	  $(this).addClass("pulse");
	});

});