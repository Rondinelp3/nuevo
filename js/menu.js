var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', ()=>{
    nav.classList.toggle('mostrar')
})

function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

let valor = 0;
if (isMobile()) {
	valor = 150;
}else{
	valor = 550;
}

 $(window).scroll(function () {
    if ($("#header_contenedor").offset().top > valor) {

    	console.log('llego al scroll');

    	 $("#header_contenedor").removeClass("colorPrimario");
       	 $("#header_contenedor").addClass("contenedor_segundo");

        } else {

            $("#header_contenedor").removeClass("contenedor_segundo");
            $("#header_contenedor").addClass("colorPrimario");
 
        }
    
});