# Projeto Ilusao DJW
## Leonardo Macêdo Aurieni<br>
# Jogo: O labirinto da vida
Esse jogo é uma continuação do jogo de LP. Onde o jogador saiu da prisão e agora tem que atravessar o labirinto para pegar o Manto do Timão.<br>
As cores do labirinto foi escolhida por conta das cores do Timão, preto e branco.
<img src="img/printjogo.jpg"><br>
## Como Jogar?
<img src="img/jogar.png"><br>
# HTML
Fiz uma estrutura simples de HTML e adicionei um canvas com id "canvas".
<img src = "img/printhtml.jpg"><br>
# CSS
Troquei sua cor de fundo para preto.<br>
<img src = "img/css.jpg"><br>
# JavaScript
Comecei inicializando o canvas, depois configurei para ele ficar na tela toda.<br>
<img src = "img/js1.jpg"><br>
## Personagem
O personagem eu fiz com retângulos, círculos, retas e curva.<br>
Adicionei uma função 'boneco' nele que irei explicar.<br>
<img src = "img/js2.png"><br>
## Labirinto
Fiz o labirinto apenas com retas e mudei as linhas para branco.<br>
Adiciona uma função 'labirinto' nele que irei explicar.<br>
<img src = "img/lab.jpg"><br>
<img src = "img/js3.png"><br>
## Manto do Timão
Coloquei o Manto do Timão em forma de imagem.<br>
<img src = "img/js4.png"><br>

# Script de movimentação
Adicionei duas variáveis, uma para posição 'x' e outra para posição 'y'. Troquei as posições 'x' e 'y' dos desenhos do boneco pelas variáveis.<br>
Para movimentar o boneco eu usei apenas a função 'if', com as condições de apertar a tecla, que quando pressionada irá aumentar ou dimininuir '10' nas variáveis.<br>
Lembra das funções que eu criei no labirinto e personagem? Elas servirão na função 'animacao', onde quando acionada ela limpará toda a tela. Mas com as funções 'labirinto' e 'boneco' ela não limpará eles.<br>
<img src = "img/js5.png"><br>
# Jogo Funcionando<br>
https://github.com/Leo-Macedo/Projeto_Ilusao_DJW/assets/127630556/5e37ee3f-e85b-419a-bf7b-67efcfec6ad1

<br>
# Diagramas
## Diagrama de classes
<img src = "img/classe.jpg" ><br>
<h3> Descrição </h3>
Esse é um Diagrama de Classes do Jogo do Labirinto. Que contêm as classes: Desenhos; Curva; Quadrado; Reta; Circulo; Personagem e Labirinto.<br>
As classes Curva, Reta, Circulo e Quadrado tem uma relação de herança com a classes Desenhos, onde herda todos os atributos dela.<br>
A classe Personagem tem relação de herança com Curva, Reta, Circulo e Quadrado que os utiliza para desenhar as partes dele. Também tem relação com o Labirinto que precisa dele, mas existe sem ele.<br>
O Labirinto tem relação de herança com Reta para desenhar suas paredes.<br>
<h2>Diagrama de casos de uso</h2>
<img src = "img/uso.jpg" ><br>
<H3>Documentação</H3>
<img src = "img/documentacao.jpg" ><br>
<H2>Diagrama de atividade (finalizar o labirinto)</H2>
<img src = "img/atividade.jpg" >
