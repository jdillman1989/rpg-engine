function drawBattle(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  drawTopDisplay();
  drawBottomDisplay();
  drawPlayerBattle();
  drawEnemiesBattle();
  drawCursor();
}

function drawTopDisplay(){

  // [Jadle 100/100] -> [ATK or target desc]
  var charText = battleData.UI.top.left;
  var descriptionText = battleData.UI.top.right;

  // Borders
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 0, canvas.width, UISpacing.displayHeight);

  // Box
  ctx.fillStyle = '#225';
  ctx.fillRect(
    UISpacing.displayBorders, 
    UISpacing.displayBorders, 
    canvas.width - (UISpacing.displayBorders * 2), 
    UISpacing.displayHeight - (UISpacing.displayBorders * 2)
  );

  // Left Text
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding, 
    UISpacing.displayBorders, 
    charText
  );

  // Right Text
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + (canvas.width / 3), 
    UISpacing.displayBorders, 
    descriptionText
  );
}

function drawBottomDisplay(){

  var currentPlayer = Object.keys(battleData.stack).length;

  var playersText = battleData.UI.bottom[0].join('\n');
  var actionText = battleData.UI.bottom[1].join('\n');
  var optionsText = battleData.UI.bottom[2].join('\n');
  var targetText = battleData.UI.bottom[3].join('\n');

  // Borders
  ctx.fillStyle = '#FFF';
  ctx.fillRect(
    0, 
    canvas.height - UISpacing.displayHeight, 
    canvas.width, 
    UISpacing.displayHeight
  );

  // Box
  ctx.fillStyle = '#225';
  ctx.fillRect(
    UISpacing.displayBorders, 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    canvas.width - (UISpacing.displayBorders * 2), 
    UISpacing.displayHeight - (UISpacing.displayBorders * 2)
  );

  // Highlight current player selection
  ctx.fillStyle = '#F00';
  ctx.fillRect(
    UISpacing.displayBorders + UISpacing.displayPadding, 
    (canvas.height - UISpacing.displayHeight + UISpacing.displayBorders) + (currentPlayer * fontSize), 
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4)), 
    fontSize
  );

  // Player names
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding, 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    playersText
  );

  // Player actions
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) * 1),
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    actionText
  );

  // Contextual options
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) * 2), 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    optionsText
  );

  // Contextual targets
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) * 3), 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    targetText
  );
}

function drawPlayerBattle(){

  var playerWidth = 20;
  ctx.fillStyle = '#FFF';

  for(var i = 0; i < battleData.players.length; ++i){
    ctx.fillRect(
      -(playerWidth) + 48, 
      (canvas.height / (battleData.players.length + 1)) * (i + 1), 
      playerWidth, 
      30
    );
  }
}

function drawEnemiesBattle(){

  var enemyWidth = 20;
  ctx.fillStyle = '#000';

  for(var i = 0; i < battleData.enemies.length; ++i){
    ctx.fillRect(
      canvas.width - 48, 
      (canvas.height / (battleData.enemies.length + 1)) * (i + 1), 
      enemyWidth, 
      30
    );
  }
}

function drawCursor(){
  ctx.fillStyle = '#F00';

  var thisX = UISpacing.displayBorders + ((canvas.width / 4) * battleData.selStage),
      thisY = canvas.height - UISpacing.displayHeight + UISpacing.displayBorders + (fontSize * battleData.selSlot) + (fontSize / 2);

  ctx.fillRect(thisX, thisY, 2, 2);
}