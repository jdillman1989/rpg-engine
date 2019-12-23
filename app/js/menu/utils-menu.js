function xpCheck(){
  var playerParty = stats[0];
  for(var i = 0; i < playerParty.length; i++){
    var levelUp = baseXP * (playerParty[i].experience.level / 10);
    if(playerParty[i].experience.points >= levelUp){
      screen = 'menu';
      centeredBoxAnimate(0, 50, 'levelUpUI', [i]);
    }
  }
}

function recalcMaxHP(statsID){
  stats[0][statsID].maxHP = stats[0][statsID].strength * 3;
}

function levelUpUI(statsID){
  var statPointsOnLvl = (Math.floor(stats[0][statsID].experience.level / 2) < 2) ? 2 : Math.floor(stats[0][statsID].experience.level / 2);
  var boxSize = 50;

  menuData = {
    size: boxSize,
    currentSel: 0,
    head: stats[0][statsID].name + " levels up!",
    body: "Points: " + statPointsOnLvl,
    options: [
      {
        id: 0,
        text: "Str: " + stats[0][statsID].strength,
        x: 0,
        y: 0
      },
      {
        id: 1,
        text: "Agl: " + stats[0][statsID].agility,
        x: 0,
        y: 0
      },
      {
        id: 2,
        text: "Int: " + stats[0][statsID].intuition,
        x: 0,
        y: 0
      },
      {
        id: 3,
        text: "Foc: " + stats[0][statsID].focus,
        x: 0,
        y: 0
      }
    ]
  };

  var boxX = (canvas.width / 2) - boxSize;
  var boxY = (canvas.height / 2) - boxSize;
  var optionsY = boxY + fontSize + UISpacing.displayBorders + (UISpacing.displayPadding * 2);
  var optionsX = boxX + UISpacing.displayBorders + UISpacing.displayPadding;

  if(menuData.body.length){
    var lines = menuData.body.split('\n');
    for (var i = 0; i < lines.length; i++){
      optionsY += fontSize;
    }
  }

  for(var i = 0; i < menuData.options.length; i++){
    var row = (i % 2) ? (fontSize * ((i - 1) / 2)) : (fontSize * (i / 2));
    var col = (i % 2) ? menuData.size : 0;

    menuData.options[i].x = optionsX + col;
    menuData.options[i].y = optionsY + row;
  }

  var keyState = JSON.parse(JSON.stringify(keys));
  menuLoop(keyState);
}

function menuSelect(prevKeyState){

  if (screen == 'menu') {

    // Cursor up
    if(keys.up && !prevKeyState.up){
      menuData.currentSel = (menuData.currentSel - 2 >= 0) ? menuData.currentSel - 2 : menuData.currentSel;
    }

    // Cursor down
    else if(keys.down && !prevKeyState.down){
      menuData.currentSel = (menuData.currentSel + 2 < menuData.options.length) ? menuData.currentSel + 2 : menuData.currentSel;
    }

    // Cursor left
    else if(keys.left && !prevKeyState.left){
      menuData.currentSel = (menuData.currentSel - 1 >= 0) ? menuData.currentSel - 1 : menuData.currentSel;
    }

    // Cursor right
    else if(keys.right && !prevKeyState.right){
      menuData.currentSel = (menuData.currentSel + 1 < menuData.options.length) ? menuData.currentSel + 1 : menuData.currentSel;
    }

    // Next selection
    else if(keys.enter && !prevKeyState.enter){

    }

    // Go back a selection
    else if(keys.shift && !prevKeyState.shift){

    }
  }
}