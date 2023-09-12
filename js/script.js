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


function boneco(){
    //bone
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.fillRect(moverx, movery - 10, 25, 10);
    ctx.moveTo(moverx + 25,movery - 1);
    ctx.lineTo(moverx + 40,movery - 1);
    ctx.stroke();

    //cabeca
    ctx.fillStyle = '#fcde8b';
    ctx.fillRect(moverx , movery, 25, 17.5);

    //boca
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(moverx + 5,movery + 12);
    ctx.quadraticCurveTo(moverx + 12.5,movery + 17,moverx + 20,movery + 12);
    ctx.stroke();

    //olhos
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(moverx + 6, movery + 5, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(moverx + 19, movery +5, 1.5, 0, Math.PI * 2);
    ctx.fill();

    //braços
    ctx.fillStyle = '#fcde8b';
    ctx.fillRect(moverx + 25, movery + 17, 7.5, 22);
    ctx.fillRect(moverx - 7.5, movery + 17, 7.5, 22);

    //camisa
    ctx.fillStyle = '#6210b9';
    ctx.fillRect(moverx , movery +17, 25, 20);
    ctx.fillRect(moverx + 25, movery +17, 7.5, 5);
    ctx.fillRect(moverx - 7.5, movery +17, 7.5, 5);

    //shorts
    ctx.fillStyle = 'white';
    ctx.fillRect(moverx, movery +37, 25, 10);

    //pernas
    ctx.fillStyle = '#fcde8b';
    ctx.fillRect(moverx + 2.5, movery +47, 7.5, 15);
    ctx.fillRect(moverx + 15, movery +47, 7.5, 15);

    //sapato
    ctx.fillStyle = '#cccccc';
    ctx.fillRect(moverx + 2.5, movery +60, 7.5, 5);
    ctx.fillRect(moverx + 15, movery +60, 7.5, 5);
}

function labirinto(){
    //labirinto
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 4;
    ctx.moveTo(90,20);
    ctx.lineTo(1300,20);
    ctx.lineTo(1300,700);

    ctx.moveTo(1300,850);
    ctx.lineTo(1300,900);
    ctx.lineTo(90,900);
    ctx.lineTo(90,150);
    ctx.lineTo(150,150);
    ctx.lineTo(150,380);
    ctx.lineTo(300,380);
    ctx.lineTo(300,550);
    ctx.lineTo(150,550);


    ctx.moveTo(300,460);
    ctx.lineTo(150,460);

    ctx.moveTo(230,20);
    ctx.lineTo(230,280);
    ctx.lineTo(380,280);
    ctx.lineTo(380,650);
    ctx.lineTo(190,650);
    ctx.lineTo(190,750);
    ctx.lineTo(400,750);



    ctx.moveTo(480,350);
    ctx.lineTo(480,120);

    ctx.moveTo(130,600);
    ctx.lineTo(90,600);

    ctx.moveTo(130,800);
    ctx.lineTo(90,800);

    ctx.moveTo(480,170);
    ctx.lineTo(400,170);

    ctx.moveTo(330,20);
    ctx.lineTo(330,90);

    ctx.moveTo(600,250);
    ctx.lineTo(600,150);
    ctx.lineTo(480,150);

    ctx.moveTo(600,650);
    ctx.lineTo(480,650);
    
    ctx.moveTo(900,550);
    ctx.lineTo(700,550);
    ctx.lineTo(700,250);

    ctx.moveTo(480,900);
    ctx.lineTo(480,850);
    ctx.lineTo(800,850);
    ctx.lineTo(800,750);
    ctx.lineTo(700,750);
    ctx.lineTo(700,650);
    ctx.lineTo(900,650);


    ctx.moveTo(480,500);
    ctx.lineTo(480,750);
    ctx.lineTo(600,750);
    ctx.lineTo(600,400);


    ctx.moveTo(200,900);
    ctx.lineTo(200,850);
    ctx.lineTo(400,850);

    ctx.stroke();
}


function animacao(){
    ctx.clearRect(0,0,1920,1080);
    boneco();
    labirinto();

    requestAnimationFrame(animacao);
}

document.addEventListener('keydown', function(event){
    boneco();
    labirinto();
    if(event.key === 'd' || event.key === 'D'){
        moverx += 10;
    }
    if(event.key === 'a' || event.key === 'A'){
        moverx -= 10;
    }
    if(event.key === 'w' || event.key === 'W'){
        movery -= 10;
    }
    if(event.key === 's' || event.key === 'S'){
        movery += 10;
    }
});

boneco();
labirinto();
animacao();
