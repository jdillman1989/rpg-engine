function battleDataInit(players){
  // setUIData(players, enemies);
  var thesePlayers = [];
  for(var i = 0; i < players.length; ++i){
    thesePlayers.push(players[i].name);
  }
  battleUI = {
    top: [
      players[0].name + '\n' + players[0].currentHP + '/' + players[0].maxHP,
      ''
    ],
    bottom: [
      thesePlayers,
      ['Attack','Magic','Defense'],
      [],
      [],
    ],
    selStage: 1,
    selSlot: 1,
    currentSel: [],
    stack: {}
  };
}

function drawBattle(players, enemies){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  var charText = battleUI.top[0],
      descriptionText = battleUI.top[1],
      playersText = battleUI.bottom[0].join('\n'),
      actionText = battleUI.bottom[1].join('\n'), 
      optionsText = battleUI.bottom[2].join('\n'), 
      targetText = battleUI.bottom[3].join('\n');

  drawTopDisplay(charText, descriptionText);
  drawBottomDisplay(playersText, actionText, optionsText, targetText);
  drawPlayerBattle(players);
  drawEnemiesBattle(enemies);
  drawCursor(battleUI.selStage, battleUI.selSlot);
}

function drawTopDisplay(charText, descriptionText){

  // [Jadle 100/100] -> [ATK or target desc]

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

function drawBottomDisplay(playersText, actionText, optionsText, targetText){

  var currentPlayer = Object.keys(battleUI.stack).length;

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

function drawPlayerBattle(players){

  var playerWidth = 20;
  ctx.fillStyle = '#FFF';

  for(var i = 0; i < players.length; ++i){
    ctx.fillRect(
      -(playerWidth) + 48, 
      (canvas.height / (players.length + 1)) * (i + 1), 
      playerWidth, 
      30
    );
  }
}

function drawEnemiesBattle(enemies){

  var enemyWidth = 20;
  ctx.fillStyle = '#000';

  for(var i = 0; i < enemies.length; ++i){
    ctx.fillRect(
      canvas.width - 48, 
      (canvas.height / (enemies.length + 1)) * (i + 1), 
      enemyWidth, 
      30
    );
  }
}

function drawCursor(selStage, selSlot){
  ctx.fillStyle = '#F00';

  var thisX = UISpacing.displayBorders + ((canvas.width / 4) * selStage),
      thisY = canvas.height - UISpacing.displayHeight + UISpacing.displayBorders + (fontSize * selSlot) + (fontSize / 2);

  ctx.fillRect(thisX, thisY, 2, 2);
}

function battleTurnStack(players, enemies, stage, slot, advance){

  var currentPlayer = Object.keys(battleUI.stack).length;

  if(advance){
    if(battleUI.currentSel.length < 2){
      battleUI.currentSel.push(
        battleUI.bottom[stage - 1][slot]
      );
    }
    else{
      battleUI.currentSel.push(
        battleUI.bottom[stage - 1][slot]
      );

      battleUI.stack[players[currentPlayer].name] = battleUI.currentSel;
      battleUI.currentSel = [];

      if(Object.keys(battleUI.stack).length >= players.length){
        initiateTurn(players, enemies);
      }
      else {
        battleUI.bottom[2] = [];
        battleUI.bottom[3] = [];
        battleUI.selStage = 1;
        battleUI.selSlot = 1;
      }
    }
  }
  else{
    battleUI.currentSel.pop();
  }
}

function initiateTurn(players, enemies){
  
  var aiAtkOptions = ['Aggressive', 'Precise', 'Fancy'];

  var battlers = players.concat(enemies);
  battlers.sort(function(a,b){
    return a.agility - b.agility;
  });

  var turnStack = [];
  for(var i = 0; i < battlers.length; ++i){

    if(
      battleUI.stack.hasOwnProperty(
        battlers[i].name
      )
    ){
      turnStack.push(
        {
          name: battlers[i].name,
          action: [
            battleUI.stack[battlers[i].name][0],
            battleUI.stack[battlers[i].name][1]
          ],
          target: battleUI.stack[battlers[i].name][2],
          player: true
        }
      );
    }
    else {
      turnStack.push(
        {
          name: battlers[i].name,
          action: [
            "Attack",
            aiAtkOptions[Math.floor(Math.random() * aiAtkOptions.length)]
          ],
          target: players[Math.floor(Math.random() * players.length)].name,
          player: false
        }
      );
    }

  }
  battleUI.stack = turnStack;
  executeTurn(players, enemies);
}

function executeTurn(players, enemies){

  console.log(battleUI.stack);

  for(var i = 0; i < battleUI.stack.length; ++i){

    switch(battleUI.stack[i].action[0]) {

      case 'Attack':
        executeAttack(players, enemies, i);
        break;

      case 'Magic':
        // Magic stuff
        break;

      case 'Defense':
        // Defense stuff
        break;
    };
  }

  battleDataInit(players);
}

function executeAttack(players, enemies, stackIndex){
  var atkStat = '';

  switch(battleUI.stack[stackIndex].action[1]) {
    case 'Aggressive':
      atkStat = 'strength';
      break;
    case 'Precise':
      atkStat = 'intuition';
      break;
    case 'Fancy':
      atkStat = 'agility';
      break;
  }

  var damage = findCharacterStat(players, enemies, battleUI.stack[stackIndex].name, atkStat);
  if(battleUI.stack[stackIndex].player){
    for(var i = 0; i < enemies.length; ++i){
      if(enemies[i].name == battleUI.stack[stackIndex].target){
        enemies[i].currentHP = enemies[i].currentHP - damage;
      }
    }
  }
  else{
    for(var i = 0; i < players.length; ++i){
      if(players[i].name == battleUI.stack[stackIndex].target){
        players[i].currentHP = players[i].currentHP - damage;
      }
    }
  }
}
