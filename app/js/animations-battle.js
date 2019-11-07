function battleIntro(step, players, enemies){

  screen = 'battle';

  step = step + 4;

  // ctx.fillStyle = '#FF0';
  // ctx.fillRect(0, step + 4, canvas.width, step + 4);

  // ctx.fillStyle = '#F00';
  // ctx.fillRect(0, step, canvas.width, step + 4);

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, step);

  if(step >= canvas.height){
    battleBg(60, players, enemies);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleIntro(step, players, enemies);
    });
  }
}

function battleBg(step, players, enemies){

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step - 2;

  ctx.globalAlpha = 1;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = (step / 60).toFixed(2);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if(step <= 0){
    ctx.globalAlpha = 1;
    battleSet(0, players, enemies);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleBg(step, players, enemies);
    });
  }
}

function battleSet(step, players, enemies){
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
  for(var i = 0; i < players.length; ++i){
    ctx.fillRect(-(playerWidth) + (step * 1.5), (canvas.height / (players.length + 1)) * (i + 1), playerWidth, 30);
  }


  // Draw enemies
  var enemyWidth = 20;
  ctx.fillStyle = '#000';
  for(var i = 0; i < enemies.length; ++i){
    ctx.fillRect(canvas.width - (step * 1.5), (canvas.height / (enemies.length + 1)) * (i + 1), enemyWidth, 30);
  }


  if(step >= UISpacing.displayHeight){
    battleDataInit(players);
    var keyState = JSON.parse(JSON.stringify(keys));
    battleLoop(players, enemies, keyState);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleSet(step, players, enemies);
    });
  }
}

function battleEnd(step){
  return;
}

function battleSelect(players, enemies, prevKeyState){

  var currentPlayer = battleUI.stack.length;

  // Cursor up
  if(keys.up && !prevKeyState.up){
    battleUI.selSlot = ((battleUI.selSlot - 1) < 0) ? battleUI.selSlot : battleUI.selSlot - 1;
  }

  // Cursor down
  else if(keys.down && !prevKeyState.down){
    battleUI.selSlot = ((battleUI.selSlot + 1) >= battleUI.bottom[battleUI.selStage].length) ? battleUI.selSlot : battleUI.selSlot + 1;
  }

  // Next selection
  else if(keys.enter && !prevKeyState.enter && battleUI.selStage <= 4){
    battleUI.selStage = battleUI.selStage + 1;

    var options = [];

    if(battleUI.selStage == 2){

      switch(battleUI.selSlot) {

        case 0:
          options = ['Aggressive', 'Precise', 'Fancy'];
          break;

        case 1:
          options = ['Fire', 'Heal'];
          break;

        case 2:
          options = ['Defend'];
          break;

        case 3:
          options = ['Escape'];
          break;
      };
    } else if(battleUI.selStage == 3){
      for(var i = 0; i < enemies.length; ++i){
        options.push(enemies[i].name);
      }
    }

    battleUI.bottom[battleUI.selStage] = options;
    battleTurnStack(players, battleUI.selStage, battleUI.selSlot, true);
  }

  // Go back a selection
  else if(keys.shift && !prevKeyState.shift && battleUI.selStage - 1 >= 1){
    battleUI.bottom[battleUI.selStage] = [];
    battleUI.selStage = battleUI.selStage - 1;
    battleTurnStack(players, battleUI.selStage, battleUI.selSlot, false);
  }
}









