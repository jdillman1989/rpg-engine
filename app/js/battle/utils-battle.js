function battleSelect(players, enemies, prevKeyState){

  var currentPlayer = Object.keys(battleUI.stack).length;

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
          options = ['Defend', 'Escape'];
          break;
      };
    } else if(battleUI.selStage == 3){
      for(var i = 0; i < enemies.length; ++i){
        options.push(enemies[i].name);
      }
    }

    battleUI.bottom[battleUI.selStage] = options;
    battleTurnStack(players, enemies, battleUI.selStage, battleUI.selSlot, true);
    battleUI.selSlot = 0;
  }

  // Go back a selection
  else if(keys.shift && !prevKeyState.shift && battleUI.selStage - 1 >= 1){
    battleUI.bottom[battleUI.selStage] = [];
    battleUI.selStage = battleUI.selStage - 1;
    battleTurnStack(players, enemies, battleUI.selStage, battleUI.selSlot, false);
    battleUI.selSlot = 0;
  }
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

function findCharacterStat(players, enemies, name, stat) {
  var battlers = players.concat(enemies);
  for (var i = 0; i < battlers.length; i++) {
    if(battlers[i].name == name){
      return battlers[i][stat];
    }
  }
  return false;
}
