window.onload = function() {
    transition = new Transition();
    document.getElementById("adicionarLista").addEventListener("click", function(event) {
        transition.changeRegion("editarLista");
    });
    document.getElementById("cancelar").addEventListener("click",function(){
        transition.changeRegion("mostrarLista");
    });
}
