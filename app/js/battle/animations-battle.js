function battleIntro(step){

  screen = 'battle';

  step = step + 4;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, step);

  if(step >= canvas.height){
    battleBg(60);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleIntro(step);
    });
  }
}

function battleBg(step){

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step - 2;

  ctx.globalAlpha = 1;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = (step / 60).toFixed(2);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if(step <= 0){
    ctx.globalAlpha = 1;
    battleSet(0);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleBg(step);
    });
  }
}

function battleSet(step){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step + 2;

  // Draw BG
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Draw top display
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, -(UISpacing.displayHeight) + step, canvas.width, UISpacing.displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(UISpacing.displayBorders, (-(UISpacing.displayHeight) + step) + UISpacing.displayBorders, canvas.width - (UISpacing.displayBorders * 2), UISpacing.displayHeight - (UISpacing.displayBorders * 2));

  // Draw bottom display
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, canvas.height - step, canvas.width, UISpacing.displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(UISpacing.displayBorders, canvas.height - step + UISpacing.displayBorders, canvas.width - (UISpacing.displayBorders * 2), UISpacing.displayHeight - (UISpacing.displayBorders * 2));

  // Draw player
  var playerWidth = 20;
  ctx.fillStyle = '#FFF';
  for(var i = 0; i < battleData.players.length; ++i){
    ctx.fillRect(-(playerWidth) + (step * 1.5), (canvas.height / (battleData.players.length + 1)) * (i + 1), playerWidth, 30);
  }

  // Draw enemies
  var enemyWidth = 20;
  ctx.fillStyle = '#000';
  for(var i = 0; i < battleData.enemies.length; ++i){
    ctx.fillRect(canvas.width - (step * 1.5), (canvas.height / (battleData.enemies.length + 1)) * (i + 1), enemyWidth, 30);
  }

  if(step >= UISpacing.displayHeight){
    var keyState = JSON.parse(JSON.stringify(keys));
    battleLoop(keyState);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleSet(step);
    });
  }
}

function battleEnd(step){
  screen = 'overworld'; // start listening for OK button confirmation
  centeredBoxAnimate(step, 40, 'battleEndText');
}

function battleEndText(){

  var battleXP = xpEarned();
  var displaySize = 40;

  centeredBox(displaySize);

  canvasWrite(
    (canvas.width / 2) - displaySize + UISpacing.displayBorders + UISpacing.displayPadding, 
    (canvas.height / 2) - displaySize + UISpacing.displayBorders + UISpacing.displayPadding, 
    "You win!\nRewards\nXP:    " + battleXP
  );

  var buttonWidth = 20;
  ctx.fillStyle = '#F00';
  ctx.fillRect(
    (canvas.width / 2) - (buttonWidth / 2), 
    (canvas.height / 2) + displaySize - fontSize - UISpacing.displayBorders - UISpacing.displayPadding, 
    buttonWidth, 
    fontSize
  );

  canvasWrite(
    (canvas.width / 2) - 6, 
    (canvas.height / 2) + displaySize - fontSize - UISpacing.displayBorders - UISpacing.displayPadding, 
    "OK"
  );
}