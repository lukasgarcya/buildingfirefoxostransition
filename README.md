<p>No construtor da classe pode definir uma região específica para ser a tela inicial ou deixar que seja apresentado a section</p>
<p>Com isto consegue-se fazer o efeito da transição utilizado o padrão dos App do Firefox OS.</p>
<p>O CSS de transição utilizado foi do exemplo do BuildingBlock. O posicionamento do CSS foi feito para deixar cada section na posição correta(direita, centro ou esquerda).</p>
<p>O arquivo index.html tem o link do buildingblock que cada um utiliza. Também precisa ser incluido o css de transition do Building Block e o css da biblioteca(transitions.css). O arquivo transition.js é a biblioteca que faz a transição funcionar e no arquivo control.js somente tem como é utilizado a biblioteca e não esquecendo que precisa importar o arquivo transition.js para o index.html.</p>
<p>Para facilitar o entendimento do transition.js eu apresento abaixo como será o uso.</p>
<pre>
    transition = new Transition("novaRegion");
    document.getElementById("mostrarPagina2").addEventListener("click", function(event) {
        transition.changeRegion("pagina2");
    },false);
</pre>
<p>A linha "transition = new Transition("novaRegion");" que inicia a biblioteca, nesta linha pode informar no construtor da classe o ID que será a região principal ou inicial.
 Já a linha "transition.changeRegion("pagina2");" ativa a transição no qual tem de ser informado o id da section que será mostrada.</p>
<p>BUG:</p>
<ul>
    <li>Caso o usuário não aguarde a aniação terminar e já clicar para mudar de tela vai ficar tela uma em cima da outra.</li>
</ul>