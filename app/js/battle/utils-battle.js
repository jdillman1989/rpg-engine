function battleDataInit(players, enemies){
  var thesePlayersNames = [];
  var thesePlayersHealth = [];
  for(var i = 0; i < players.length; ++i){
    players[i]['id'] = i;
    thesePlayersNames.push(players[i].name);
    thesePlayersHealth.push(players[i].name + ': ' + players[i].currentHP + '/' + players[i].maxHP);
  }
  for(var i = 0; i < enemies.length; ++i){
    enemies[i]['id'] = i;
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
          options = Object.keys(battleAttackMenu);
          break;

        case 1:
          options = ['Fire', 'Heal'];
          break;

        case 2:
          options = Object.keys(battleDefenseMenu);
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
      battleData.currentSel.push(slot);
    }
    else{
      battleData.currentSel.push(slot);

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
  
  var aiAtkOptions = Object.keys(battleAttackMenu);

  var battlers = battleData.players.concat(battleData.enemies);
  battlers.sort(function(a,b){
    return a.agility - b.agility;
  }).reverse();

  var turnStack = [];
  for(var i = 0; i < battlers.length; ++i){

    if(isBattlerPlayer(battlers[i])){
      turnStack.push(
        {
          name: battlers[i],
          action: [
            battleData.stack[battlers[i].name][0],
            battleData.stack[battlers[i].name][1]
          ],
          target: battleData.stack[battlers[i].name][2],
          type: 'players'
        }
      );
    }
    else {
      turnStack.push(
        {
          name: battlers[i],
          action: [
            0,
            Math.floor(Math.random() * aiAtkOptions.length)
          ],
          target: Math.floor(Math.random() * battleData.players.length),
          type: 'enemies'
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

      case 0:
        executeAttack(i);
        break;

      case 1:
        // Magic stuff
        break;

      case 2:
        // Defense stuff
        break;
    };
  }

  battleDataInit(battleData.players, battleData.enemies);
}

function executeAttack(stackIndex){

  var current = battleData.stack[stackIndex];
  var attacks = Object.keys(battleAttackMenu);

  dealPhysicalDamage(
    current.type, 
    current.name.id, 
    (current.type == 'players') ? 'enemies' : 'players',
    current.target,
    battleAttackMenu[attacks[current.action[1]]]
  );
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

// attackerType: string, battleData key, either players or enemies
// attackerID: int, array index of battleData.{{attackerType}}
// targetType: string, battleData key, either players or enemies
// targetID: int, array index of battleData.{{targetType}}
// stat: string, object key for atk stat

function dealPhysicalDamage(attackerType, attackerID, targetType, targetID, stat){
  var atkStat = battleData[attackerType][attackerID][stat];
  var defenseStat = 0;
  var weapon = 0;
  var dmgFormulaRaw = ((atkStat * 0.5) + (weapon)) - (defenseStat);
  var dmgFormula = (dmgFormulaRaw <= 0) ? 1 : dmgFormulaRaw;

  battleData[targetType][targetID].currentHP = (
    (battleData[targetType][targetID].currentHP - dmgFormula) < 0
  ) ? 0 : battleData[targetType][targetID].currentHP - dmgFormula;
}

function isBattlerPlayer(battler){
  for(var i = 0; i < battleData.players.length; ++i){
    if(battler.name == battleData.players[i].name){
      return true;
    }
  }
  return false;
}
