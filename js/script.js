//inicializando canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//bone
ctx.fillStyle = '#314aeb';
ctx.strokeStyle = '#314aeb';
ctx.lineWidth = 5;
ctx.fillRect(100, 75, 50, 25);
ctx.moveTo(150,97.5);
ctx.lineTo(180,97.5);
ctx.stroke();

//cabeca
ctx.fillStyle = '#fcde8b';
ctx.fillRect(100, 100, 50, 35);

//camisa
ctx.fillStyle = 'red';
ctx.fillRect(100, 135, 50, 50);

//shorts
ctx.fillStyle = 'black';
ctx.fillRect(100, 185, 50, 30);

//pernas
ctx.fillStyle = '#fcde8b';
ctx.fillRect(105, 215, 15, 35);
ctx.fillRect(130, 215, 15, 35);