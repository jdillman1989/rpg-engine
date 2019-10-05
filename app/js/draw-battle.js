function drawBattle(players, enemies){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  drawTopDisplay();
  drawBottomDisplay();
  drawPlayerBattle();
  drawEnemiesBattle();
}

function drawBottomDisplay(){

  var displayBorders = 1;
  var displayHeight = 32;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, canvas.height - displayHeight, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, canvas.height - displayHeight + displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));
}

function drawTopDisplay(){

  var displayBorders = 1;
  var displayHeight = 32;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 0, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));
}

function drawPlayerBattle(){
  var playerWidth = 20;
  ctx.fillStyle = '#FFF';
  ctx.fillRect(-(playerWidth) + 48, canvas.height / 2, playerWidth, 30);
}

function drawEnemiesBattle(){
  var enemyWidth = 20;
  ctx.fillStyle = '#000';
  ctx.fillRect(canvas.width - 48, canvas.height / 2, enemyWidth, 30);
}
