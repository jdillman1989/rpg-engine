function drawBattle(players, enemies){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  var charText = battleUI.char,
      descriptionText = battleUI.desc,
      playersText = battleUI.players.join('\n'),
      actionText = battleUI.actions.join('\n'), 
      optionsText = battleUI.options.join('\n'), 
      targetText = battleUI.targets.join('\n');

  drawTopDisplay(charText, descriptionText);
  drawBottomDisplay(playersText, actionText, optionsText, targetText);
  drawPlayerBattle(players);
  drawEnemiesBattle(enemies);
}

function drawTopDisplay(charText, descriptionText){

  // [Jadle 100/100] -> [ATK or target desc]

  var displayBorders = 1;
  var displayHeight = 32;
  var displayPadding = 2;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 0, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));

  canvasWrite(displayBorders + displayPadding, displayBorders, charText);
  canvasWrite(displayBorders + displayPadding + (canvas.width / 3), displayBorders, descriptionText);
}

function drawBottomDisplay(playersText, actionText, optionsText, targetText){

  // [ATK DEF RUN] -> [Fire Heal] -> [Imp 1 Imp 2]

  var displayBorders = 1;
  var displayHeight = 32;
  var displayPadding = 2;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, canvas.height - displayHeight, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, canvas.height - displayHeight + displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));

  canvasWrite(displayBorders + displayPadding, canvas.height - displayHeight + displayBorders, playersText);
  canvasWrite(displayBorders + displayPadding + ((canvas.width / 4) * 1), canvas.height - displayHeight + displayBorders, actionText);
  canvasWrite(displayBorders + displayPadding + ((canvas.width / 4) * 2), canvas.height - displayHeight + displayBorders, optionsText);
  canvasWrite(displayBorders + displayPadding + ((canvas.width / 4) * 3), canvas.height - displayHeight + displayBorders, targetText);
}

function drawPlayerBattle(players){
  var playerWidth = 20;
  ctx.fillStyle = '#FFF';
  for(var i = 0; i < players.length; ++i){
    ctx.fillRect(-(playerWidth) + 48, (canvas.height / (players.length + 1)) * (i + 1), playerWidth, 30);
  }
}

function drawEnemiesBattle(enemies){
  var enemyWidth = 20;
  ctx.fillStyle = '#000';
  for(var i = 0; i < enemies.length; ++i){
    ctx.fillRect(canvas.width - 48, (canvas.height / (enemies.length + 1)) * (i + 1), enemyWidth, 30);
  }
}
