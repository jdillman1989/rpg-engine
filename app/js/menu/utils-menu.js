// Check all player party members in the stats table for their experience value greater than their levelup value and start a new menu if they levelup
function xpCheck() {
  const playerParty = stats[0];
  for (let i = 0; i < playerParty.length; i++) {
    const levelUp = baseXP * (playerParty[i].experience.level / 10);
    if (playerParty[i].experience.points >= levelUp) {
      stats[0][i].experience.points =
        playerParty[i].experience.points - levelUp;
      screen = "menu";
      centeredBoxAnimate(0, 48, "levelUpUI", [i]);
    }
  }
}

// Reset the max HP value of a given player based on their current strength stat
// statsID (int): ID of an individual player in the first entry of the stats table
function recalcMaxHP(statsID) {
  stats[0][statsID].maxHP = stats[0][statsID].strength * 3;
}

// Menu callback that sets the menu state for a level up UI and starts the main draw loop
// statsID (int): ID of an individual player in the first entry of the stats table
function levelUpUI(statsID) {
  const statPointsOnLvl =
    Math.floor(stats[0][statsID].experience.level / 2) < 2
      ? 2
      : Math.floor(stats[0][statsID].experience.level / 2);
  const boxSize = 50;
  const pointBonuses = getBonusedStats(statsID);

  // set the state for the menu box
  menuData = {
    playerID: statsID,
    size: boxSize,
    currentSel: 0,
    head: stats[0][statsID].name + " levels up!",
    body: "Points: " + statPointsOnLvl,
    enter: {
      func: "xpMenuAdd",
      data: [0],
    },
    shift: {
      func: "xpMenuSubtract",
      data: [0],
    },
    returnScreen: "overworld",
    options: [
      {
        id: 0,
        text: "Str:" + stats[0][statsID].strength + "+0",
        x: 0,
        y: 0,
        effects: false,
      },
      {
        id: 1,
        text: "Agl:" + stats[0][statsID].agility + "+0",
        x: 0,
        y: 0,
        effects: false,
      },
      {
        id: 2,
        text: "Int:" + stats[0][statsID].intuition + "+0",
        x: 0,
        y: 0,
        effects: false,
      },
      {
        id: 3,
        text: "Foc:" + stats[0][statsID].focus + "+0",
        x: 0,
        y: 0,
        effects: false,
      },
    ],
    extra: pointBonuses,
  };

  // Set the positioning for the menu options draw
  const boxX = canvas.width / 2 - boxSize;
  const boxY = canvas.height / 2 - boxSize;
  let optionsY =
    boxY + fontSize + UISpacing.displayBorders + UISpacing.displayPadding * 2;
  const optionsX = boxX + UISpacing.displayBorders + UISpacing.displayPadding;

  if (menuData.body.length) {
    const lines = menuData.body.split("\n");
    for (let i = 0; i < lines.length; i++) {
      optionsY += fontSize;
    }
  }

  // render the effects for each menu option
  for (let i = 0; i < menuData.options.length; i++) {
    const uiBonusedStat = menuData.options[i].text.split(":");
    const bonusedStat = abbrevs(uiBonusedStat[0]);
    if (menuData.extra.primary == bonusedStat) {
      menuData.options[i].effects = {
        func: "statHighlight",
        data: ["#193", menuData.options[i].id],
      };
    }
    if (menuData.extra.secondary == bonusedStat) {
      menuData.options[i].effects = {
        func: "statHighlight",
        data: ["#A05", menuData.options[i].id],
      };
    }

    // Calc text placements (2 columns)
    const row = i % 2 ? fontSize * ((i - 1) / 2) : fontSize * (i / 2);
    const col = i % 2 ? menuData.size : 0;

    menuData.options[i].x = optionsX + col;
    menuData.options[i].y = optionsY + row;
  }

  const keyState = JSON.parse(JSON.stringify(keys));
  menuLoop(keyState);
}

// Set the cursor state from key input
// prevKeyState (obj): Keys pressed from the last animation frame. Comparison prevents state change every frame
function menuSelect(prevKeyState) {
  if (screen == "menu") {
    // Cursor up
    if (keys.up && !prevKeyState.up) {
      menuData.currentSel =
        menuData.currentSel - 2 >= 0
          ? menuData.currentSel - 2
          : menuData.currentSel;
    }

    // Cursor down
    else if (keys.down && !prevKeyState.down) {
      menuData.currentSel =
        menuData.currentSel + 2 < menuData.options.length
          ? menuData.currentSel + 2
          : menuData.currentSel;
    }

    // Cursor left
    else if (keys.left && !prevKeyState.left) {
      menuData.currentSel =
        menuData.currentSel - 1 >= 0
          ? menuData.currentSel - 1
          : menuData.currentSel;
    }

    // Cursor right
    else if (keys.right && !prevKeyState.right) {
      menuData.currentSel =
        menuData.currentSel + 1 < menuData.options.length
          ? menuData.currentSel + 1
          : menuData.currentSel;
    }

    // Next selection
    else if (keys.enter && !prevKeyState.enter) {
      window[menuData.enter.func].apply(null, menuData.enter.data);
    }

    // Go back a selection
    else if (keys.shift && !prevKeyState.shift) {
      window[menuData.shift.func].apply(null, menuData.shift.data);
    }
  }
}

// Sets up the Enter key functionality for a levelup UI. Adds 1 point to the selected stat from the pool of remaining points.
// data (obj): placeholder for the menu state data key
function xpMenuAdd(data) {
  // points left to allocate
  const uiRemaining = menuData.body.split(": ");
  const remaining = parseInt(uiRemaining[1]);

  // if there are points left to allocate
  if (remaining) {
    // clone the previous menu state so it could be reapplied on a future deconfirm
    const prevMenuData = JSON.parse(JSON.stringify(menuData));

    // allocate a point by removing one from remaining and adding to the option text
    const newRemaining = remaining - 1;
    const uiAdded = menuData.options[menuData.currentSel].text.split("+");
    const added = parseInt(uiAdded[1]);
    const newAdded = added + 1;

    menuData.options[menuData.currentSel].text = uiAdded[0] + "+" + newAdded;
    menuData.body = uiRemaining[0] + ": " + newRemaining;

    // Are there any points left after allocating?
    if (!newRemaining) {
      // Set up a new menu for confirmation
      let selections = "";
      const selectedPoints = [];
      for (let i = 0; i < menuData.options.length; i++) {
        const uiSelected = menuData.options[i].text.split("+");
        const selected = parseInt(uiSelected[1]);
        if (selected) {
          const uiSelectedStat = menuData.options[i].text.split(":");
          const uiCurrentPoints = uiSelectedStat[1].split("+");
          const selectedStat = abbrevs(uiSelectedStat[0]);

          // Add Bonus Multiplier
          let bonusMultiplier = 1;
          if (menuData.extra.primary == selectedStat) {
            bonusMultiplier = 1.5;
          }
          if (menuData.extra.secondary == selectedStat) {
            bonusMultiplier = 1.2;
          }

          const finalStat =
            parseInt(uiCurrentPoints[0]) +
            Math.ceil(selected * bonusMultiplier);
          selections += selectedStat + ":" + finalStat + "\n";
          selectedPoints.push({
            stat: selectedStat,
            points: finalStat,
          });
        }
      }

      menuData.currentSel = 0;
      menuData.body = selections;
      menuData.enter.func = "xpMenuClose";
      menuData.enter.data = [selectedPoints];
      menuData.shift.func = "xpMenuReturn";
      menuData.shift.data = [prevMenuData];
      menuData.options = [
        {
          id: 0,
          text: "OK",
          x:
            canvas.width / 2 -
            menuData.size +
            UISpacing.displayBorders +
            UISpacing.displayPadding,
          y:
            canvas.height / 2 +
            menuData.size -
            UISpacing.displayBorders -
            UISpacing.displayPadding -
            fontSize * 2,
        },
      ];
    }
  }
}

// Sets up the Shift key functionality for a levelup UI. Subtracts 1 point from the selected stat and returns it to the remaining pool.
// data (obj): placeholder for the menu state data key
function xpMenuSubtract(data) {
  const uiAdded = menuData.options[menuData.currentSel].text.split("+");
  const added = parseInt(uiAdded[1]);

  if (added) {
    const uiRemaining = menuData.body.split(": ");
    const remaining = parseInt(uiRemaining[1]);
    const newRemaining = remaining + 1;
    const newAdded = added - 1;

    menuData.options[menuData.currentSel].text = uiAdded[0] + "+" + newAdded;
    menuData.body = uiRemaining[0] + ": " + newRemaining;
  }
}

// Sets up the Enter key functionality for a levelup confirmation UI. Applies point allocations to the stats table
// points (array): objects that have the name of a stat and its new value
function xpMenuClose(points) {
  for (let i = 0; i < points.length; i++) {
    stats[0][menuData.playerID][points[i].stat] = points[i].points;
  }

  recalcMaxHP(menuData.playerID);

  // reset the player experience points and accumulated bonuses
  stats[0][menuData.playerID].experience.level =
    stats[0][menuData.playerID].experience.level + 1;
  stats[0][menuData.playerID].experience.bonuses.strength = 0;
  stats[0][menuData.playerID].experience.bonuses.agility = 0;
  stats[0][menuData.playerID].experience.bonuses.focus = 0;
  stats[0][menuData.playerID].experience.bonuses.intuition = 0;

  // Reset the main draw loop to the overworld
  screen = menuData.returnScreen;
  menuData = {};
  overworldLoop();
}

// Sets up the Shift key functionality for a levelup confirmation UI. Returns the menu to the levelup UI
// prevData (obj): the state of the levelup UI just before the last point was allocated
function xpMenuReturn(prevData) {
  menuData = prevData;
}
