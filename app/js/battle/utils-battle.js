function battleDataInit(players, enemies, enemiesID){

  var thesePlayersNames = [];
  var thesePlayersHealth = [];
  var currentStack = {};
  for(var i = 0; i < players.length; ++i){
    if(!players[i].currentHP){
      currentStack[players[i].name] = false;
      thesePlayersNames.push({text: players[i].name, disabled: true, id: players[i].id});
    }
    else{
      thesePlayersNames.push({text: players[i].name, disabled: false, id: players[i].id});
    }
    thesePlayersHealth.push(players[i].name + ': ' + players[i].currentHP + '/' + players[i].maxHP);
  }

  var theseEnemiesHealth = [];
  var aliveEnemies = enemies.length;
  for(var i = 0; i < enemies.length; ++i){
    theseEnemiesHealth.push(enemies[i].name + ': ' + enemies[i].currentHP + '/' + enemies[i].maxHP);
    if(!enemies[i].currentHP){
      aliveEnemies--;
    }
  }

  battleData = {
    UI:{
      top: {
        left: thesePlayersHealth.join('\n'),
        right: theseEnemiesHealth.join('\n')
      },
      bottom: [
        thesePlayersNames,
        [
          {text: 'Attack', disabled: false, id: 0},
          {text: 'Magic', disabled: false, id: 1},
          {text: 'Defense', disabled: false, id: 2}
        ],
        [],
        [],
      ],
    },
    players: players,
    enemies: enemies,
    enemiesID: enemiesID,
    selStage: 1,
    selSlot: 0,
    currentSel: [],
    stack: currentStack
  };

  if(!aliveEnemies){
    setTimeout(function(){
      battleEnd(0);
    }, 500);
  }
}

function battleSelect(prevKeyState){

  if (screen == 'battle') {

    // Cursor up
    if(keys.up && !prevKeyState.up){
      var prevSlot = ((battleData.selSlot - 1) < 0) ? battleData.selSlot : battleData.selSlot - 1;
      for(var i = prevSlot; i >= 0; i--){
        if(!battleData.UI.bottom[battleData.selStage][i].disabled){
          battleData.selSlot = i;
          break;
        }
      }
    }

    // Cursor down
    else if(keys.down && !prevKeyState.down){
      var nextSlot = ((battleData.selSlot + 1) >= battleData.UI.bottom[battleData.selStage].length) ? battleData.selSlot : battleData.selSlot + 1;
      for(var i = nextSlot; i < battleData.UI.bottom[battleData.selStage].length; i++){
        if(!battleData.UI.bottom[battleData.selStage][i].disabled){
          battleData.selSlot = i;
          break;
        }
      }
    }

    // Next selection
    else if(keys.enter && !prevKeyState.enter && battleData.selStage <= 4){
      battleData.selStage = battleData.selStage + 1;

      var options = [];

      if(battleData.selStage == 2){

        switch(battleData.selSlot){

          case 0:
            var attackNames = Object.keys(battleAttackMenu);
            for(var i = 0; i < attackNames.length; ++i){
              options.push({text: attackNames[i], disabled: false, id: i});
            }
            break;

          case 1:
            options = [
              {text: 'Fire', disabled: false, id: 0},
              {text: 'Heal', disabled: false, id: 1}
            ];
            break;

          case 2:
            var defenseNames = Object.keys(battleDefenseMenu);
            for(var i = 0; i < defenseNames.length; ++i){
              options.push({text: defenseNames[i], disabled: false, id: i});
            }
            break;
        };
      } else if(battleData.selStage == 3){
        for(var i = 0; i < battleData.enemies.length; ++i){
          if(battleData.enemies[i].currentHP){
            options.push({
              text: battleData.enemies[i].name, 
              disabled: false, 
              id: battleData.enemies[i].id
            });
          }
          else{
            options.push({
              text: battleData.enemies[i].name, 
              disabled: true, 
              id: battleData.enemies[i].id
            });
          }
        }
      }

      battleData.UI.bottom[battleData.selStage] = options;
      battleTurnStack(battleData.selStage, battleData.selSlot, true);
      battleData.selSlot = getFirstAvailableSlot();
    }

    // Go back a selection
    else if(keys.shift && !prevKeyState.shift && battleData.selStage - 1 >= 1){
      battleData.UI.bottom[battleData.selStage] = [];
      battleData.selStage = battleData.selStage - 1;
      battleTurnStack(battleData.selStage, battleData.selSlot, false);
      battleData.selSlot = getFirstAvailableSlot();
    }
  }

  // End of battle button state
  else {
    if(keys.enter && !prevKeyState.enter){

      stopBattle(true);
    }
  }
}

function getFirstAvailableSlot(){
  for(var i = 0; i < battleData.UI.bottom[battleData.selStage].length; i++){
    if(!battleData.UI.bottom[battleData.selStage][i].disabled){
      return i;
    }
  }
}

function battleTurnStack(stage, slot, advance){

  var currentPlayer = getCurrentPlayer();

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
        battleData.selSlot = getFirstAvailableSlot();
      }
    }
  }
  else{
    battleData.currentSel.pop();
  }
}

function initiateTurn(){

  var turnStack = [];
  var playerTargets = [];
  for(var i = 0; i < battleData.players.length; ++i){

    // Check if the player can take action (not 0 currentHP)
    if(battleData.stack[battleData.players[i].name]){
      turnStack.push(
        {
          id: battleData.players[i].id,
          action: [
            battleData.stack[battleData.players[i].name][0],
            battleData.stack[battleData.players[i].name][1]
          ],
          target: battleData.stack[battleData.players[i].name][2],
          type: 'players',
          agility: battleData.players[i].agility
        }
      );
      playerTargets.push(battleData.players[i].id);
    }
  }

  var aiAtkOptions = Object.keys(battleAttackMenu);
  for(var i = 0; i < battleData.enemies.length; ++i){

    // Check if the enemy has currentHP
    if(battleData.enemies[i].currentHP){
      turnStack.push(
        {
          id: battleData.enemies[i].id,
          action: [
            0,
            Math.floor(Math.random() * aiAtkOptions.length)
          ],
          target: playerTargets[Math.floor(Math.random() * playerTargets.length)],
          type: 'enemies',
          agility: battleData.enemies[i].agility
        }
      );
    }
  }

  turnStack.sort(function(a,b){
    return a.agility - b.agility;
  }).reverse();

  battleData.stack = turnStack;
  executeTurn();
}

function executeTurn(){

  for(var i = 0; i < battleData.stack.length; ++i){
    if(battleData[battleData.stack[i].type][battleData.stack[i].id].currentHP){
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
  }

  battleDataInit(battleData.players, battleData.enemies, battleData.enemiesID);
}

function executeAttack(stackIndex){

  var current = battleData.stack[stackIndex];
  var attacks = Object.keys(battleAttackMenu);
  var targetType = 'players';
  var attackingStat = battleAttackMenu[attacks[current.action[1]]];
  if(current.type == 'players'){
    targetType = 'enemies';

    // Add experience bonuses for using a stat
    stats[0][current.id].experience.bonuses[attackingStat]++;
  }

  dealPhysicalDamage(
    current.type, 
    current.id, 
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
  var dmgFormula = (dmgFormulaRaw <= 0) ? 1 : Math.round(dmgFormulaRaw);

  battleData[targetType][targetID].currentHP = (
    (battleData[targetType][targetID].currentHP - dmgFormula) < 0
  ) ? 0 : battleData[targetType][targetID].currentHP - dmgFormula;
}

function getCurrentPlayer(){
  for(var playerIndex = 0; playerIndex < battleData.players.length; ++playerIndex){
    if(
      !battleData.stack.hasOwnProperty(battleData.players[playerIndex].name) && 
      battleData.players[playerIndex].currentHP
    ){
      return playerIndex;
    }
  }
}

function stopBattle(win){

  if(win){
    delete stats[battleData.enemiesID];
    for(var i = 0; i < entities.length; ++i){
      if(entities[i].type && entities[i].id == battleData.enemiesID){
        entities[i] = {type: false, tile: entities[i].tile};
      }
    }

    var battleXP = xpEarned();
    for(var i = 0; i < battleData.players.length; ++i){
      battleData.players[i].experience.points += battleXP;
    }
    checkXP = true;
  }

  stats[0] = battleData.players;
  battleData = {};
  entityDataToMap();

  overworldLoop();
}

function xpEarned(){
  var battleXP = 0;
  for(var i = 0; i < battleData.enemies.length; ++i){
    battleXP += battleData.enemies[i].maxHP;
  }
  return battleXP;
}
