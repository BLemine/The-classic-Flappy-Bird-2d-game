const cvs = document.getElementById('canvas');
const ctx = cvs.getContext("2d");

// images to be drawn
const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();
const gameover = new Image();

// the bird X,Y
let birdX = 10;
let birdY = 150;

// 
let flyMusic = new Audio();
let scoreMusic = new Audio();

// resources
bird.src = "img/bluebird-upflap.png";
bg.src = "img/background.png";
fg.src = "img/fg.png";
pipeNorth.src = "img/pipeNorth.png";
pipeSouth.src = "img/pipeSouth.png";
gameover.src = "img/gameover.png"

// drawing images
ctx.drawImage(bg, 0, 0);
ctx.drawImage(bird, birdX, birdY);
ctx.drawImage(pipeNorth, 130, 0);
ctx.drawImage(pipeSouth, 130, 330);

// the game state
let finish = false;

// the event action to be executed
const mvUp = (e) => {
	//if(e.key=="ArrowUp" && !finish)
	birdY -= 25;
}

// the jump eventListener
document.addEventListener("keyup", mvUp);

// pipes
let pipe = [
	{
		x: cvs.width,
		y: 0
	}
]
// The flap
moveBird=()=>{
	setTimeout(()=>{bird.src="img/bluebird-midflap.png"},200)
	setTimeout(()=>{bird.src="img/bluebird-downflap.png"},300);
	setTimeout(()=>{bird.src="img/bluebird-upflap.png"},400)
}
moveBird();
const MB=setInterval(moveBird,600);
//
const startGame = () => {
	if (!finish) {
		// drawing the background image
		ctx.drawImage(bg, 0, -400);
		
		// adding pipes
		for (let i in pipe) {
			ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
			ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + pipeNorth.height + 85);
			pipe[i].x--;

			if (pipe[i].x == 325) {
				pipe.push(
					{
						x: cvs.width,
						y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
					}
				)
			}
			if (birdX + bird.width >= pipe[i].x && birdX <= pipe[i].x + pipeNorth.width && (birdY <= pipe[i].y + pipeNorth.height || birdY + bird.height >= pipe[i].y + pipeNorth.height + 85) || birdY + bird.height >= cvs.height - fg.height) {
				finish = true
			}
		}
		// the movement of the bird
		birdY++;
		// drawing the images
		ctx.drawImage(bird, birdX, birdY);
		ctx.drawImage(fg, 0, cvs.height - fg.height);
		ctx.drawImage(fg, fg.width, cvs.height - fg.height);
		// to repeat the scene 
		requestAnimationFrame(startGame);
	}
	else {
		// in case of "game over"
		ctx.drawImage(gameover,150,150);
		clearInterval(MB);
		// to restart the game
		document.addEventListener("keyup", ()=>{
			location.reload()
		})
	}
}

// to start the game
startGame();



