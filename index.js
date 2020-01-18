const cvs=document.getElementById('canvas');
const ctx=cvs.getContext("2d");

// images to be drawn
const bird=new Image();
const bg=new Image();
const fg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

// the bird X,Y
let birdX=10;
let birdY=150;

// 
let flyMusic = new Audio();
let scoreMusic = new Audio();

//
bird.src="img/bird.png";
bg.src = "img/background.png";
fg.src = "img/fg.png";
pipeNorth.src = "img/pipeNorth.png";
pipeSouth.src = "img/pipeSouth.png";

// drawing images
ctx.drawImage(bg,0,0);
ctx.drawImage(bird,birdX,birdY);
ctx.drawImage(pipeNorth,130,0);
ctx.drawImage(pipeSouth,130,330);

// the game state
let finish=false;

const mvUp=(e)=>{
	//if(e.key=="ArrowUp" && !finish)
		birdY-=25;
}
document.addEventListener("keyup",mvUp);

let p1=130;let p2=0;
let pipe=[
	{
		x:cvs.width,
		y:0	
	}
]
let pas=p1+170;
const startGame=()=>{
	if(!finish){
		ctx.drawImage(bg,0,-400);
		//
		for(let i in pipe){
			ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
			ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+pipeNorth.height+85);
			pipe[i].x--;

			if(pipe[i].x==325){
				pipe.push(
					{
						x:cvs.width,
						y:Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height	
					}		
				)
			}
			if(birdX+bird.width>=pipe[i].x && birdX<=pipe[i].x+pipeNorth.width && (birdY <= pipe[i].y + pipeNorth.height || birdY+bird.height >= pipe[i].y+pipeNorth.height+85) || birdY + bird.height >=  cvs.height - fg.height){
				finish=true
			}
		}


	
		birdY++;
		ctx.drawImage(bird,birdX,birdY);
		ctx.drawImage(fg,0,cvs.height - fg.height);
		ctx.drawImage(fg,fg.width,cvs.height - fg.height);

		requestAnimationFrame(startGame);
	}
	else{
		// TODO Code
	}
}

startGame();



