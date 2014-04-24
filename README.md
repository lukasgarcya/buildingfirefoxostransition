<p>O funcionamento consiste em colocar data-position=current na section que será a tela inicial.</p>
<p>Nas outras telas necessita-se que seja colocado data-position=right.</p>
<p>Com isto consegue-se fazer o efeito da transição utilizado o padrão dos App do Firefox OS.</p>
<p>O CSS de transição utilizado foi do exemplo do BuildingBlock. O posicionamento do CSS foi feito para deixar cada section na posição que foi colocado no data-position.</p>
<p>O arquivo index.html tem o link do buildingblock que cada um utiliza. Também precisa ser incluido o css de transition do Building Block e o css da biblioteca(transitions.css). O arquivo transition.js é a biblioteca que faz a transição funcionar e no arquivo control.js somente tem como é utilizado a biblioteca e não esquecendo que precisa importar o arquivo transition.js para o index.html.</p>
<p>Para facilitar o entendimento do transition.js eu apresento abaixo como será o uso.</p>
<pre>
    transition = new Transition();
    document.getElementById("mostrarPagina2").addEventListener("click", function(event) {
        transition.changeRegion("pagina2");
    },false);
</pre>
<p>A linha "transition = new Transition();" que inicia a biblioteca. Já a linha "transition.changeRegion("pagina2");" ativa a transição no qual tem de ser informado o id da section que será mostrada.</p>
