window.onload = function() {
    transition = new Transition();
    document.getElementById("adicionarLista").addEventListener("click", function(event) {
        transition.changeRegion("editarLista");
    });
    document.getElementById("cancelar").addEventListener("click",function(){
        transition.changeRegion("mostrarLista");
    });
    document.getElementById("mostrarDetalhes").addEventListener("click",function(){
        transition.changeRegion("detalhes");
    },false);
    document.getElementById("voltar").addEventListener("click",function(){
        transition.changeRegion("editarLista");
    },false);
};
