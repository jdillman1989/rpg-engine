function drawBattle(players, enemies){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  var topText = enemies[0].name + '\n';
      topText += 'HP: ' + enemies[0].hp + ', ATK: ' + enemies[0].off + ', DEF: ' + enemies[0].def;

  var bottomText = players[0].name + '\n';
      bottomText += 'HP: ' + players[0].hp + ', ATK: ' + players[0].off + ', DEF: ' + players[0].def;

  drawTopDisplay(topText);
  drawBottomDisplay(bottomText);
  drawPlayerBattle();
  drawEnemiesBattle();
}

function drawBottomDisplay(text){

  var displayBorders = 1;
  var displayHeight = 32;
  var displayPadding = 2;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, canvas.height - displayHeight, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, canvas.height - displayHeight + displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));
  canvasWrite(displayBorders + displayPadding, canvas.height - displayHeight + displayBorders + displayPadding, 10, text);
}

function drawTopDisplay(text){

  var displayBorders = 1;
  var displayHeight = 32;
  var displayPadding = 2;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 0, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));

  canvasWrite(displayBorders + displayPadding, displayBorders + displayPadding, 10, text);
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
