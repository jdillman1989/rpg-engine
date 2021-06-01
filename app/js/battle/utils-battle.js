// Set up the current battle data state object using existing player/enemy data
// players (array): player objects
// enemies (array): enemy objects
// enemiesID (int): ID for the overworld object representing enemies in this battle
function battleDataInit(players, enemies, enemiesID) {
  let currentStack = {}; // Shows if an action can be added to the stack for a given player (ie are the alive and has their turn action been chosen yet)
  const thesePlayersNames = [];
  const thesePlayersHealth = [];

  // Set up Top UI player text
  for (let i = 0; i < players.length; ++i) {
    if (!players[i].currentHP) {
      currentStack[players[i].name] = false;
      thesePlayersNames.push({
        text: players[i].name,
        disabled: true,
        id: players[i].id,
      });
    } else {
      thesePlayersNames.push({
        text: players[i].name,
        disabled: false,
        id: players[i].id,
      });
    }
    thesePlayersHealth.push(
      `${players[i].name}: ${players[i].currentHP}/${players[i].maxHP}`
    );
  }

  const theseEnemiesHealth = [];
  let aliveEnemies = enemies.length;
  // Set up Top UI enemy text
  for (let i = 0; i < enemies.length; ++i) {
    theseEnemiesHealth.push(
      `${enemies[i].name}: ${enemies[i].currentHP}/${enemies[i].maxHP}`
    );
    if (!enemies[i].currentHP) {
      aliveEnemies--;
    }
  }

  battleData = {
    UI: {
      top: {
        left: thesePlayersHealth.join("\n"), // Top bar player side text
        right: theseEnemiesHealth.join("\n"), // Top bar enemy side text
      },
      bottom: [
        // Bottom bar turn selection flow
        thesePlayersNames, // Stage 1: select player
        [
          // Stage 2: select action
          { text: "Attack", disabled: false, id: 0 },
          { text: "Magic", disabled: false, id: 1 },
          { text: "Defense", disabled: false, id: 2 },
        ],
        [], // Stage 3: select action options
        [], // Stage 4: select target
      ],
    },
    players: players, // Array of player objects
    enemies: enemies, // Array of enemy objects
    enemiesID: enemiesID, // ID of overworld object representing enemies in this battle
    selStage: 1, // X Cursor position for the current stage
    selSlot: 0, // Y Cursor position for the slot
    currentSel: [], // Transient state of the current bottom menu
    stack: currentStack, // Object of all participants and their complete set of turn actions
  };

  if (!aliveEnemies) {
    setTimeout(function () {
      battleEnd(0);
    }, 500);
  }
}

// Set bottom UI cursor position and battle data state from key input
// prevKeyState (obj): Keys pressed from the last animation frame. Comparison prevents state change every frame
function battleSelect(prevKeyState) {
  if (screen == "battle") {
    // Cursor up
    if (keys.up && !prevKeyState.up) {
      const prevSlot =
        battleData.selSlot - 1 < 0
          ? battleData.selSlot
          : battleData.selSlot - 1;
      for (let i = prevSlot; i >= 0; i--) {
        if (!battleData.UI.bottom[battleData.selStage][i].disabled) {
          battleData.selSlot = i;
          break;
        }
      }
    }

    // Cursor down
    else if (keys.down && !prevKeyState.down) {
      const nextSlot =
        battleData.selSlot + 1 >=
        battleData.UI.bottom[battleData.selStage].length
          ? battleData.selSlot
          : battleData.selSlot + 1;
      for (
        let i = nextSlot;
        i < battleData.UI.bottom[battleData.selStage].length;
        i++
      ) {
        if (!battleData.UI.bottom[battleData.selStage][i].disabled) {
          battleData.selSlot = i;
          break;
        }
      }
    }

    // Next selection
    else if (keys.enter && !prevKeyState.enter && battleData.selStage <= 4) {
      battleData.selStage = battleData.selStage + 1;

      let options = [];

      if (battleData.selStage == 2) {
        switch (battleData.selSlot) {
          case 0:
            const attackNames = Object.keys(battleAttackMenu);
            for (let i = 0; i < attackNames.length; ++i) {
              options.push({ text: attackNames[i], disabled: false, id: i });
            }
            break;

          case 1:
            options = [
              { text: "Fire", disabled: false, id: 0 },
              { text: "Heal", disabled: false, id: 1 },
            ];
            break;

          case 2:
            const defenseNames = Object.keys(battleDefenseMenu);
            for (let i = 0; i < defenseNames.length; ++i) {
              options.push({ text: defenseNames[i], disabled: false, id: i });
            }
            break;
        }
      } else if (battleData.selStage == 3) {
        for (let i = 0; i < battleData.enemies.length; ++i) {
          if (battleData.enemies[i].currentHP) {
            options.push({
              text: battleData.enemies[i].name,
              disabled: false,
              id: battleData.enemies[i].id,
            });
          } else {
            options.push({
              text: battleData.enemies[i].name,
              disabled: true,
              id: battleData.enemies[i].id,
            });
          }
        }
      }

      battleData.UI.bottom[battleData.selStage] = options;
      battleTurnStack(battleData.selStage, battleData.selSlot, true);
      battleData.selSlot = getFirstAvailableSlot();
    }

    // Go back a selection
    else if (
      keys.shift &&
      !prevKeyState.shift &&
      battleData.selStage - 1 >= 1
    ) {
      battleData.UI.bottom[battleData.selStage] = [];
      battleData.selStage = battleData.selStage - 1;
      battleTurnStack(battleData.selStage, battleData.selSlot, false);
      battleData.selSlot = getFirstAvailableSlot();
    }
  }

  // End of battle button state
  else {
    if (keys.enter && !prevKeyState.enter) {
      stopBattle(true);
    }
  }
}

// Provides default cursor position at the top of a list
function getFirstAvailableSlot() {
  for (let i = 0; i < battleData.UI.bottom[battleData.selStage].length; i++) {
    if (!battleData.UI.bottom[battleData.selStage][i].disabled) {
      return i;
    }
  }
}

// Add or remove player turn flow selections to the transient currentSel state. Copy the currentSel transient over to the stack for processing once a turn flow selection is complete
// stage (int): Battle menu stage ID (cursor X pos)
// slot (int): Battle menu stage slot ID (cursore Y pos)
// advance (bool): Add selection to currentSel (Enter). Remove the last entry on currentSel (Shift).
function battleTurnStack(stage, slot, advance) {
  const currentPlayer = getCurrentPlayer();

  // Enter key: selected slot confirmed for the current stage
  if (advance) {
    // Is this the last stage that needs a slot confirmation?
    if (battleData.currentSel.length < 2) {
      battleData.currentSel.push(slot);
    } else {
      battleData.currentSel.push(slot);

      // Push the full turn selection flow to the final turn stack for this player
      battleData.stack[battleData.players[currentPlayer].name] =
        battleData.currentSel;
      // reset the currentSel transient for the next turn or player
      battleData.currentSel = [];

      // Is this the last player that needs a turn stack confirmed?
      if (Object.keys(battleData.stack).length >= battleData.players.length) {
        initiateTurn();
      } else {
        // reset the bottom UI box
        battleData.UI.bottom[2] = [];
        battleData.UI.bottom[3] = [];
        battleData.selStage = 1;
        battleData.selSlot = getFirstAvailableSlot();
      }
    }
  } else {
    // Shift key: selected slot deconfirmed for the current stage
    battleData.currentSel.pop();
  }
}

// Process the results of battleData.stack object. Converts battleData.stack to an array to loop over in order
function initiateTurn() {
  const turnStack = [];
  const playerTargets = [];

  // set up unordered player actions
  for (let i = 0; i < battleData.players.length; ++i) {
    // Check if the player can take action (not 0 currentHP)
    if (battleData.stack[battleData.players[i].name]) {
      turnStack.push({
        id: battleData.players[i].id,
        action: [
          battleData.stack[battleData.players[i].name][0],
          battleData.stack[battleData.players[i].name][1],
        ],
        target: battleData.stack[battleData.players[i].name][2],
        type: "players",
        agility: battleData.players[i].agility,
      });
      playerTargets.push(battleData.players[i].id);
    }
  }

  const aiAtkOptions = Object.keys(battleAttackMenu);
  // set up unordered enemy actions
  for (let i = 0; i < battleData.enemies.length; ++i) {
    // Check if the enemy has currentHP
    if (battleData.enemies[i].currentHP) {
      turnStack.push({
        id: battleData.enemies[i].id,
        action: [0, Math.floor(Math.random() * aiAtkOptions.length)],
        target: playerTargets[Math.floor(Math.random() * playerTargets.length)],
        type: "enemies",
        agility: battleData.enemies[i].agility,
      });
    }
  }

  // Order turn stack based on agility stat
  turnStack
    .sort(function (a, b) {
      return a.agility - b.agility;
    })
    .reverse();

  battleData.stack = turnStack;
  executeTurn();
}

// Execute the results of a turn based on the processed battleData.stack array
function executeTurn() {
  for (let i = 0; i < battleData.stack.length; ++i) {
    // Does current actor (type and id) have HP
    if (
      battleData[battleData.stack[i].type][battleData.stack[i].id].currentHP
    ) {
      switch (battleData.stack[i].action[0]) {
        case 0:
          executeAttack(i);
          break;

        case 1:
          // Magic stuff
          break;

        case 2:
          // Defense stuff
          break;
      }
    }
  }

  // Reset menu selections at end of all turns
  battleDataInit(battleData.players, battleData.enemies, battleData.enemiesID);
}

// Starts an attack in a turn
// stackIndex (int): array key of battleData.stack processed array
function executeAttack(stackIndex) {
  const current = battleData.stack[stackIndex];
  const attacks = Object.keys(battleAttackMenu);
  let targetType = "players";
  const attackingStat = battleAttackMenu[attacks[current.action[1]]];
  if (current.type == "players") {
    targetType = "enemies";

    // Add experience bonuses for using a stat
    stats[0][current.id].experience.bonuses[attackingStat]++;
  }

  dealPhysicalDamage(
    current.type,
    current.id,
    current.type == "players" ? "enemies" : "players",
    current.target,
    battleAttackMenu[attacks[current.action[1]]]
  );
}

// Search for a given state value for a name of any current battle participant
// name (str): name of the battle participant
// stat (str): name of the stat to return a value for
function findCharacterStat(name, stat) {
  const battlers = battleData.players.concat(battleData.enemies);
  for (let i = 0; i < battlers.length; i++) {
    if (battlers[i].name == name) {
      return battlers[i][stat];
    }
  }
  return false;
}

// Calculate damage and apply to target HP
// attackerType (str): battleData key, either players or enemies
// attackerID (int): array index of battleData.{{attackerType}}
// targetType (str): battleData key, either players or enemies
// targetID (int): array index of battleData.{{targetType}}
// stat (str): object key for atk stat
function dealPhysicalDamage(
  attackerType,
  attackerID,
  targetType,
  targetID,
  stat
) {
  const atkStat = battleData[attackerType][attackerID][stat];
  const defenseStat = 0;
  const weapon = 0;
  const dmgFormulaRaw = atkStat * 0.5 + weapon - defenseStat;
  const dmgFormula = dmgFormulaRaw <= 0 ? 1 : Math.round(dmgFormulaRaw);

  battleData[targetType][targetID].currentHP =
    battleData[targetType][targetID].currentHP - dmgFormula < 0
      ? 0
      : battleData[targetType][targetID].currentHP - dmgFormula;
}

// Get the first player in battle that has HP and is not completed on the current turn stack
function getCurrentPlayer() {
  for (
    let playerIndex = 0;
    playerIndex < battleData.players.length;
    ++playerIndex
  ) {
    if (
      !battleData.stack.hasOwnProperty(battleData.players[playerIndex].name) &&
      battleData.players[playerIndex].currentHP
    ) {
      return playerIndex;
    }
  }
}

// End the battle state and apply the results to the overworld
// win (bool): if all enemies were defeated
function stopBattle(win) {
  if (win) {
    // remove the stats data for the enemies references by the overworld ID
    delete stats[battleData.enemiesID];

    //
    for (let i = 0; i < entities.length; ++i) {
      if (entities[i].type && entities[i].id == battleData.enemiesID) {
        entities[i] = { type: false, tile: entities[i].tile };
      }
    }

    // apply XP earned in this battle to the player state and prep for a possible levelup
    const battleXP = xpEarned();
    for (let i = 0; i < battleData.players.length; ++i) {
      battleData.players[i].experience.points += battleXP;
    }
    checkXP = true;
  }

  // apply all stats from the battle state to the stats state
  stats[0] = battleData.players;

  // reset battle state
  battleData = {};

  // redraw entity state to the overworld and apply their AI
  entityDataToMap();

  // return to rendering the overworld
  overworldLoop();
}

// Calculate XP earned from this battle
function xpEarned() {
  let battleXP = 0;
  for (let i = 0; i < battleData.enemies.length; ++i) {
    battleXP += battleData.enemies[i].maxHP;
  }
  return battleXP;
}
