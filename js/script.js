//inicializando canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//bone
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.fillRect(50, 37.5, 25, 12.5);
ctx.moveTo(75,48.5);
ctx.lineTo(90,48.5);
ctx.stroke();

//cabeca
ctx.fillStyle = '#fcde8b';
ctx.fillRect(50, 50, 25, 17.5);

//boca
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(55,62.5);
ctx.quadraticCurveTo(62.5,67.5,70,62.5);
ctx.stroke();

//olhos
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(56, 55, 1.5, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(69, 55, 1.5, 0, Math.PI * 2);
ctx.fill();

//braços
ctx.fillStyle = '#fcde8b';
ctx.fillRect(75, 67.5, 7.5, 27.5);
ctx.fillRect(42.5, 67.5, 7.5, 27.5);

//camisa
ctx.fillStyle = '#6210b9';
ctx.fillRect(50, 67.5, 25, 25);
ctx.fillRect(75, 67.5, 7.5, 10);
ctx.fillRect(42.5, 67.5, 7.5, 10);

//shorts
ctx.fillStyle = 'white';
ctx.fillRect(50, 92.5, 25, 15);

//pernas
ctx.fillStyle = '#fcde8b';
ctx.fillRect(52.5, 107.5, 7.5, 17.5);
ctx.fillRect(65, 107.5, 7.5, 17.5);

//sapato
ctx.fillStyle = '#cccccc';
ctx.fillRect(52.5, 122.5, 7.5, 7.5);
ctx.fillRect(65, 122.5, 7.5, 7.5);


//labirinto
ctx.beginPath();
ctx.strokeStyle = 'red';
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

ctx.moveTo(300,20);
ctx.lineTo(300,280);
ctx.lineTo(400,280);

ctx.stroke();