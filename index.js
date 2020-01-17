const cvs=document.getElementById('canvas');
const ctx=cvs.getContext("2d");

const bird=new Image();
const bg=new Image();
const fg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

let birdX=10;
let birdY=150;

let flyMusic = new Audio();
let scoreMusic = new Audio();

bird.src="bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
pipeNorth.src = "pipeNorth.png";
pipeSouth.src = "pipeSouth.png";

ctx.drawImage(bg,0,0);
ctx.drawImage(bird,birdX,birdY);
ctx.drawImage(pipeNorth,130,0);
ctx.drawImage(pipeSouth,130,330);


const mvdown=()=>{
	birdY-=25;
}
document.addEventListener("keydown",mvdown);

let p1=130;
let p2=130;

const startGame=()=>{
	if(birdX!=(p1-30)){
		//birdX+=1;
		birdY++;
		p1--;
	}
		
	ctx.drawImage(bg,0,0);
	ctx.drawImage(bird,birdX,birdY);
	ctx.drawImage(pipeNorth,p1,0);
	ctx.drawImage(pipeSouth,p1,330);
	ctx.drawImage(fg,0,cvs.height - fg.height);
	requestAnimationFrame(startGame);
}

startGame();
/*setInterval(()=>{
	birdX+=10;
	ctx.clearRect(10,160,10,150)
	ctx.drawImage(bird,birdX,birdY);
},100);*/



