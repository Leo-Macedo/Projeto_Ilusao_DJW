//inicializando canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//variaveis
var w = 87, s = 83, d = 68, a = 65;
var moverx = 50;
var movery = 50;
var velox = 10;



//bone
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.fillRect(moverx , 37.5, 25, 12.5);
ctx.moveTo(moverx + 25,48.5);
ctx.lineTo(moverx + 40,48.5);
ctx.stroke();

//cabeca
ctx.fillStyle = '#fcde8b';
ctx.fillRect(moverx , 50, 25, 17.5);

//boca
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(moverx + 5,62.5);
ctx.quadraticCurveTo(moverx + 12.5,67.5,70,62.5);
ctx.stroke();

//olhos
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(moverx + 6, 55, 1.5, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(moverx + 19, 55, 1.5, 0, Math.PI * 2);
ctx.fill();

//braços
ctx.fillStyle = '#fcde8b';
ctx.fillRect(moverx + 25, 67.5, 7.5, 27.5);
ctx.fillRect(moverx - 7.5, 67.5, 7.5, 27.5);

//camisa
ctx.fillStyle = '#6210b9';
ctx.fillRect(moverx , 67.5, 25, 25);
ctx.fillRect(moverx + 25, 67.5, 7.5, 10);
ctx.fillRect(moverx - 7.5, 67.5, 7.5, 10);

//shorts
ctx.fillStyle = 'white';
ctx.fillRect(moverx, 92.5, 25, 15);

//pernas
ctx.fillStyle = '#fcde8b';
ctx.fillRect(moverx + 2.5, 107.5, 7.5, 17.5);
ctx.fillRect(moverx + 15, 107.5, 7.5, 17.5);

//sapato
ctx.fillStyle = '#cccccc';
ctx.fillRect(moverx + 2.5, 122.5, 7.5, 7.5);
ctx.fillRect(moverx + 15, 122.5, 7.5, 7.5);

//labirinto
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2.5;
ctx.moveTo(90,20);
ctx.lineTo(1700,20);
ctx.lineTo(1700,700);

ctx.moveTo(1700,850);
ctx.lineTo(1700,900);
ctx.lineTo(90,900);
ctx.lineTo(90,150);
ctx.lineTo(200,150);
ctx.lineTo(200,430);
ctx.lineTo(300,430);
ctx.lineTo(300,550);
ctx.lineTo(190,550);

ctx.moveTo(300,20);
ctx.lineTo(300,280);
ctx.lineTo(400,280);
ctx.lineTo(400,700);
ctx.lineTo(190,700);
ctx.lineTo(190,750);

ctx.stroke();