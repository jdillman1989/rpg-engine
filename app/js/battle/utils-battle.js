function battleDataInit(players, enemies){
  var thesePlayersNames = [];
  var thesePlayersHealth = [];
  for(var i = 0; i < players.length; ++i){
    thesePlayersNames.push(players[i].name);
    thesePlayersHealth.push(players[i].name + ': ' + players[i].currentHP + '/' + players[i].maxHP);
  }
  battleData = {
    UI:{
      top: {
        left: thesePlayersHealth.join('\n'),
        right: ''
      },
      bottom: [
        thesePlayersNames,
        ['Attack','Magic','Defense'],
        [],
        [],
      ],
    },
    players: players,
    enemies: enemies,
    selStage: 1,
    selSlot: 1,
    currentSel: [],
    stack: {}
  };
}

function battleSelect(prevKeyState){

  // Cursor up
  if(keys.up && !prevKeyState.up){
    battleData.selSlot = ((battleData.selSlot - 1) < 0) ? battleData.selSlot : battleData.selSlot - 1;
  }

  // Cursor down
  else if(keys.down && !prevKeyState.down){
    battleData.selSlot = ((battleData.selSlot + 1) >= battleData.UI.bottom[battleData.selStage].length) ? battleData.selSlot : battleData.selSlot + 1;
  }

  // Next selection
  else if(keys.enter && !prevKeyState.enter && battleData.selStage <= 4){
    battleData.selStage = battleData.selStage + 1;

    var options = [];

    if(battleData.selStage == 2){

      switch(battleData.selSlot) {

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
    } else if(battleData.selStage == 3){
      for(var i = 0; i < battleData.enemies.length; ++i){
        options.push(battleData.enemies[i].name);
      }
    }

    battleData.UI.bottom[battleData.selStage] = options;
    battleTurnStack(battleData.selStage, battleData.selSlot, true);
    battleData.selSlot = 0;
  }

  // Go back a selection
  else if(keys.shift && !prevKeyState.shift && battleData.selStage - 1 >= 1){
    battleData.UI.bottom[battleData.selStage] = [];
    battleData.selStage = battleData.selStage - 1;
    battleTurnStack(battleData.selStage, battleData.selSlot, false);
    battleData.selSlot = 0;
  }
}

function battleTurnStack(stage, slot, advance){

  var currentPlayer = Object.keys(battleData.stack).length;

  if(advance){
    if(battleData.currentSel.length < 2){
      battleData.currentSel.push(
        battleData.UI.bottom[stage - 1][slot]
      );
    }
    else{
      battleData.currentSel.push(
        battleData.UI.bottom[stage - 1][slot]
      );

      battleData.stack[battleData.players[currentPlayer].name] = battleData.currentSel;
      battleData.currentSel = [];

      if(Object.keys(battleData.stack).length >= battleData.players.length){
        initiateTurn();
      }
      else {
        battleData.UI.bottom[2] = [];
        battleData.UI.bottom[3] = [];
        battleData.selStage = 1;
        battleData.selSlot = 1;
      }
    }
  }
  else{
    battleData.currentSel.pop();
  }
}

function initiateTurn(){
  
  var aiAtkOptions = ['Aggressive', 'Precise', 'Fancy'];

  var battlers = battleData.players.concat(battleData.enemies);
  battlers.sort(function(a,b){
    return a.agility - b.agility;
  });

  var turnStack = [];
  for(var i = 0; i < battlers.length; ++i){

    if(isBattlerPlayer(battlers[i])){
      turnStack.push(
        {
          name: battlers[i].name,
          action: [
            battleData.stack[battlers[i].name][0],
            battleData.stack[battlers[i].name][1]
          ],
          target: battleData.stack[battlers[i].name][2]
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
          target: battleData.players[Math.floor(Math.random() * battleData.players.length)].name
        }
      );
    }

  }
  battleData.stack = turnStack;
  executeTurn();
}

function executeTurn(){

  console.log(battleData.stack);

  for(var i = 0; i < battleData.stack.length; ++i){

    switch(battleData.stack[i].action[0]) {

      case 'Attack':
        executeAttack(i);
        break;

      case 'Magic':
        // Magic stuff
        break;

      case 'Defense':
        // Defense stuff
        break;
    };
  }

  battleDataInit(battleData.players, battleData.enemies);
}

function executeAttack(stackIndex){
  var atkStat = '';

  switch(battleData.stack[stackIndex].action[1]) {
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

  var damage = findCharacterStat(battleData.stack[stackIndex].name, atkStat);
  if(isBattlerPlayer(battleData.stack[stackIndex])){
    for(var i = 0; i < battleData.enemies.length; ++i){
      if(battleData.enemies[i].name == battleData.stack[stackIndex].target){
        battleData.enemies[i].currentHP = ((battleData.enemies[i].currentHP - damage) < 0) ? 0 : battleData.enemies[i].currentHP - damage;
      }
    }
  }
  else{
    for(var i = 0; i < battleData.players.length; ++i){
      if(battleData.players[i].name == battleData.stack[stackIndex].target){
        battleData.players[i].currentHP = ((battleData.players[i].currentHP - damage) < 0) ? 0 : battleData.players[i].currentHP - damage;
      }
    }
  }
}

function findCharacterStat(name, stat) {
  var battlers = battleData.players.concat(battleData.enemies);
  for (var i = 0; i < battlers.length; i++) {
    if(battlers[i].name == name){
      return battlers[i][stat];
    }
  }
  return false;
}

function checkDeath(){

}

function dealDamage(attacker, target){

}

function isBattlerPlayer(battler){
  for(var i = 0; i < battleData.players.length; ++i){
    if(battler.name == battleData.players[i].name){
      return true;
    }
  }
  return false;
}
