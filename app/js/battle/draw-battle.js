function drawBattle(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBattleBG();
  drawTopDisplay();
  drawBottomDisplay();
  drawPlayerBattle();
  drawEnemiesBattle();
  drawBattleCursor();
}

function drawBattleBG(){
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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

  var currentPlayer = getCurrentPlayer();

  function drawBottomDisplayTextData(data){
    var returnData = '';
    if(data.length){
      for(var i = 0; i < data.length; ++i){
        returnData += data.text + '\n';
      }
    }
    return returnData;
  }

  var playersText = battleData.UI.bottom[0];
  var actionText = battleData.UI.bottom[1];
  var optionsText = battleData.UI.bottom[2];
  var targetText = battleData.UI.bottom[3];

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
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) - 10), 
    fontSize
  );

  // Player names
  canvasWriteData(
    UISpacing.displayBorders + UISpacing.displayPadding, 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    playersText
  );

  // Player actions
  canvasWriteData(
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) * 1),
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    actionText
  );

  // Contextual options
  canvasWriteData(
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) * 2), 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    optionsText
  );

  // Contextual targets
  canvasWriteData(
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
    if (battleData.enemies[i].currentHP) {
      ctx.fillRect(
        canvas.width - 48, 
        (canvas.height / (battleData.enemies.length + 1)) * (i + 1), 
        enemyWidth, 
        30
      );
    }
  }
}

function drawBattleCursor(){
  ctx.fillStyle = '#F00';

  var thisX = UISpacing.displayBorders + ((canvas.width / 4) * battleData.selStage),
      thisY = canvas.height - UISpacing.displayHeight + UISpacing.displayBorders + (fontSize * battleData.selSlot) + (fontSize / 2);

  ctx.fillRect(thisX, thisY, 2, 2);
}