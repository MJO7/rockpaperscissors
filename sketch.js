var rock, paper, scissors, border1, border2, border3, border4, compres, rand, tie, tieImg, winImg, restart,winf,winfImg;
var PLAY = 1;
var CHOOSE = 0;
var END = 0;
var gameState = PLAY;
var rockImg, paperImg, scissorsImg, compres1Img, compres2Img, compres3Img;
var restart, score, playerChoice, computerChoice,restartImg;

function preload() {
  rockImg = loadImage("ROCK.png")
  paperImg = loadImage("PAPER.png")
  scissorsImg = loadImage("SCISORRS.png")
  compres1Img = loadImage("rock.webp")
  compres2Img = loadImage("paper1.png")
  compres3Img = loadImage("Screen Shot 2020-09-07 at 3.33.01 PM.png")
  tieImg = loadImage("Screen Shot 2020-09-10 at 3.36.45 PM.png")
  winImg = loadImage("win.png")
  restartImg = loadImage("Restart-PNG-Free-Download.png")
  winfImg = loadImage ("WIN-1.png")
}

function setup() {

  createCanvas(400, 400);
  rock = createSprite(100, 85, 10, 10)
  rock.addImage("rockImg", rockImg)
  rock.scale = 0.5
  paper = createSprite(100, 200, 10, 10)
  paper.addImage("paperImg", paperImg)
  paper.scale = 0.5
  scissors = createSprite(100, 315, 10, 10)
  scissors.addImage("scissorsImg", scissorsImg)
  scissors.scale = 0.5
  border1 = createSprite(350, 200, 10, 180)
  border2 = createSprite(150, 200, 10, 180)
  border3 = createSprite(250, 110, 200, 10)
  border4 = createSprite(250, 290, 200, 10)
  rand = Math.round(random(1, 3));
  score = 0
}

function draw() {


  background("white");
  drawSprites();

  text("SCORE: " + score, 330, 20)

  if(gameState === PLAY)
  {
  if (mousePressedOver(rock)) {
    gameState = CHOOSE;
    playerChoice = 1
    CHOOSE();
  }
  if (mousePressedOver(paper)) {
    gameState = CHOOSE
    playerChoice = 2
    CHOOSE();
  }
  if (mousePressedOver(scissors)) {
    gameState = CHOOSE
    playerChoice = 3
    CHOOSE();
  }

  if (rand === 1) {
    computerChoice = 1
  }
  if (rand === 2) {
    computerChoice = 2
  }
  if (rand === 3) {
    computerChoice = 3
  }

  if (playerChoice === 1 && computerChoice === 1) {
    tie = createSprite(200, 20, 10, 10)
    tie.scale = 0.1
    tie.addImage("tieImg", tieImg)
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
    restart.scale = 0.05
  }
  if (playerChoice === 1 && computerChoice === 2) {
    tie = createSprite(200, 20, 10, 10)
    tie.scale = 0.1
    tie.addImage("tieImg", tieImg)
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
     restart.scale = 0.05
  }
  if (playerChoice === 1 && computerChoice === 3) {
    win = createSprite(200, 20, 10, 10)
    win.addImage("winImg", winImg)
    score = score + 1
    win.scale = 0.2
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
     restart.scale = 0.05
    gameState = END

  }
  if (playerChoice === 2 && computerChoice === 1) {
    win = createSprite(200, 20, 10, 10)
    win.addImage("winImg", winImg)
    score = score + 1
    win.scale = 0.2
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
     restart.scale = 0.05
    gameState = END
  }
  if (playerChoice === 2 && computerChoice === 2) {
    tie = createSprite(200, 20, 10, 10)
    tie.addImage("tieImg", tieImg)
    tie.scale = 0.1
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
     restart.scale = 0.05
  }
  if (playerChoice === 2 && computerChoice === 3) {
    tie = createSprite(200, 20, 10, 10)
    tie.addImage("tieImg", tieImg)
    tie.scale = 0.1
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
     restart.scale = 0.05
  }
  if (playerChoice === 3 && computerChoice === 1) {
    tie = createSprite(200, 20, 10, 10)
    tie.addImage("tieImg", tieImg)
    tie.scale = 0.1
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
     restart.scale = 0.05
  }
  if (playerChoice === 3 && computerChoice === 2) {
    win = createSprite(200, 20, 10, 10)
    win.addImage("winImg", winImg)
    win.scale=0.2
    score = score + 1
    gameState = END
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
     restart.scale = 0.05
  }
  if (playerChoice === 3 && computerChoice === 3) {
    tie = createSprite(200, 20, 10, 10)
    tie.addImage("tieImg", tieImg)
    tie.scale = 0.1
    restart = createSprite(220,350,10,10)
    restart.addImage("restartImg",restartImg)
     restart.scale = 0.05
  }
    if(mousePressedOver(restart)){
gameState ="PLAY"


}
}    
  if (gameState === END) {

    
  }

  if(score === 5){
   winf= createSprite(200,200,400,400)
    winf.shapeColor = "red"
    winf.addImage("winfImg",winfImg)
    winf.scale = 2.3
  }
  function CHOOSE() {
    compres = createSprite(200, 200, 10, 10)
    switch (rand) {
      case 1:
        compres.addImage("rockImg", rockImg)
        compres.scale = 0.2
        break;
      case 2:
        compres.addImage("paperImg", paperImg)
        compres.scale = 0.2
        break;
      case 3:
        compres.addImage("scissorsImg", scissorsImg)
        compres.scale = 0.2
        break;
      default:
        break;
    }

  }

}