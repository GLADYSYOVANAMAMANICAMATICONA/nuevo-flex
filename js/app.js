//////////////JQUERY///////////////////////
$(".boton_abrir").click(function(p){//clase--evento click---funcion con parametro
	var img = p.target.src;//el target detecta  a que imagen se le hiso click.... src... captura la imagen
	var modal = '<div class="modal" id ="modal"><img src="'+ img +'" class="modal_img"><div class="modal_boton" id="modal_boton">X</div></div>'
	$("body").append(modal);//append inserta el modal al body
	$("#modal_boton").click(function(){//evento click
		$("#modal").remove();//remueva al modal... para que desaparesca
	})
});
