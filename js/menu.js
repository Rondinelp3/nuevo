var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', ()=>{
    nav.classList.toggle('mostrar')
})

 $(window).scroll(function () {
    if ($("#header_contenedor").offset().top >850) {

    	console.log('llego al scroll');

    	 $("#header_contenedor").removeClass("colorPrimario");
       	 $("#header_contenedor").addClass("contenedor_segundo");

        } else {

            $("#header_contenedor").removeClass("contenedor_segundo");
            $("#header_contenedor").addClass("colorPrimario");
 
        }
    
});