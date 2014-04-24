window.onload = function() {
    transition = new Transition();
    document.getElementById("mostrarPagina2").addEventListener("click", function(event) {
        transition.changeRegion("pagina2");
    },false);
    document.getElementById("voltarPagina1").addEventListener("click",function(){
        transition.changeRegion("pagina1");
    },false);
    document.getElementById("mostrarPagina3").addEventListener("click",function(){
        transition.changeRegion("pagina3");
    },false);
    document.getElementById("voltarPagina2").addEventListener("click",function(){
        transition.changeRegion("pagina2");
    },false);
    document.getElementById("mostrarPagina1").addEventListener("click",function(){
        transition.changeRegion("pagina1");
    },false);
};
