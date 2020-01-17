const cvs=document.getElementById('canvas');
const ctx=cvs.getContext("2d");

const bird=new Image();
const bg=new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src="bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
pipeNorth.src = "pipeNorth.png";
pipeSouth.src = "pipeSouth.png";

ctx.drawImage(bg,0,0);
ctx.drawImage(bird,10,150);



