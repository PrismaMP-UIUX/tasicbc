/*
11/jul/2017: Creado por Eduardo Rodriguez (NCR)
*/
$(function () {
	
	// Attach a delegated event handler.
    $("body").on("click",".btn",function() {
		
		// Usamos eventos "delegados" porque los componentes no existen
		// al completarse la inicializacion del DOM, sino que son cargados
		// posteriormente (via AJAX) por el SSFramework
		
		SSFramework.initTimeout();

		var $btn = $(this);
		
		//storedata
		var storedata = $btn.data("storedata");
		if ( storedata != undefined){
            States.storeValue(storedata);
            console.log("Storedata", storedata);
        }
		
		var ssfwev = $btn.data("ssfw-ev");
        if (ssfwev != undefined){
            SSFramework.playAudio('boton.wav');
            States.handleEvent(ssfwev);
        }
		
		var ssfwCustomEv = $btn.data("ssfw-custom-ev");
        if (ssfwCustomEv != undefined){
			var evParams = $btn.data("ssfw-custom-ev-data")
            SSFramework.playAudio('boton.wav');
			//Arreglar esto!!! Debe sacarse los customEvParams del estado
			console.log("disparando el evento: "+ssfwCustomEv+", con data: "+evParams);
            States.fireCustomEvent(ssfwCustomEv, evParams != undefined ? evParams : null);
            //States.fireCustomEvent(ssfwCustomEv, boton.customEventParam);
        }
    });
    
});
