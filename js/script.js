//inicializando canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//bone
ctx.fillStyle = '#314aeb';
ctx.strokeStyle = '#314aeb';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.fillRect(100, 75, 50, 25);
ctx.moveTo(150,97.5);
ctx.lineTo(180,97.5);
ctx.stroke();

//cabeca
ctx.fillStyle = '#fcde8b';
ctx.fillRect(100, 100, 50, 35);

//boca
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(110,125);
ctx.quadraticCurveTo(125,135,140,125);
ctx.stroke();

//olhos
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(112.5, 110, 3, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(137.5, 110, 3, 0, Math.PI * 2);
ctx.fill();

//camisa
ctx.fillStyle = 'red';
ctx.fillRect(100, 135, 50, 50);

//braços
ctx.fillStyle = '#fcde8b';
ctx.fillRect(150, 135, 15, 55);
ctx.fillRect(85, 135, 15, 55);

//shorts
ctx.fillStyle = 'black';
ctx.fillRect(100, 185, 50, 30);

//pernas
ctx.fillStyle = '#fcde8b';
ctx.fillRect(105, 215, 15, 35);
ctx.fillRect(130, 215, 15, 35);

//sapato
ctx.fillStyle = '#cccccc';
ctx.fillRect(105, 245, 15, 15);
ctx.fillRect(130, 245, 15, 15);
