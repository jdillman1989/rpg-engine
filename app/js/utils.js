function xpCheck(){
  var playerParty = stats[0];
  for(var i = 0; i < playerParty.length; i++){
    var levelUp = baseXP * (playerParty[i].experience.level / 10);
    if(playerParty[i].experience.points >= levelUp){
      screen = 'levelup';
      centeredBoxAnimate(0, 40, 'levelUpUI', [i]);
    }
  }
}

function levelUpUI(statsID){

  var displaySize = 40;
  var statPointsOnLvl = (Math.floor(stats[0][statsID].experience.level / 2) < 2) ? 2 : Math.floor(stats[0][statsID].experience.level / 2);

  centeredBox(displaySize);

  canvasWrite(
    (canvas.width / 2) - displaySize + UISpacing.displayBorders + UISpacing.displayPadding, 
    (canvas.height / 2) - displaySize + UISpacing.displayBorders + UISpacing.displayPadding, 
    stats[0][statsID].name + " levels up!\nAvailable points:    " + statPointsOnLvl + "\nStrength: " + stats[0][statsID].strength + "\nAgility: " + stats[0][statsID].agility + "\nIntuition: " + stats[0][statsID].intuition + "\nFocus: " + stats[0][statsID].focus
  );
}

function recalcMaxHP(statsID){
  stats[0][statsID].maxHP = stats[0][statsID].strength * 3;
}

function centeredBoxAnimate(step, size, callback, callbackData){
  step = step + 4;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(
    (canvas.width / 2) - step, 
    (canvas.height / 2) - step, 
    step * 2, 
    step * 2
  );
  ctx.fillStyle = '#225';
  ctx.fillRect(
    (canvas.width / 2) - step + UISpacing.displayBorders, 
    (canvas.height / 2) - step + UISpacing.displayBorders, 
    (step * 2) - UISpacing.displayBorders, 
    (step * 2) - UISpacing.displayBorders
  );

  if(step >= size){
    window[callback].apply(null, callbackData);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      centeredBoxAnimate(step, size, callback, callbackData);
    });
  }
}

function centeredBox(size){

  var displaySize = size;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(
    (canvas.width / 2) - displaySize, 
    (canvas.height / 2) - displaySize, 
    displaySize * 2, 
    displaySize * 2
  );
  ctx.fillStyle = '#225';
  ctx.fillRect(
    (canvas.width / 2) - displaySize + UISpacing.displayBorders, 
    (canvas.height / 2) - displaySize + UISpacing.displayBorders, 
    (displaySize * 2) - (UISpacing.displayBorders * 2), 
    (displaySize * 2) - (UISpacing.displayBorders * 2)
  );
}

function canvasWrite(posX, posY, text){

  ctx.font = fontSize + "px Courier";
  ctx.fillStyle = "white";
  var lines = text.split('\n');

  for (var i = 0; i < lines.length; i++){
    ctx.fillText(lines[i], posX, posY + (i*fontSize) + fontSize);
  }
}

// textData: [{text, disabled, id}, {text, disabled, id}, ...]
function canvasWriteData(posX, posY, textData){
  ctx.font = fontSize + "px Courier";
  for (var i = 0; i < textData.length; i++){
    ctx.fillStyle = (textData[i].disabled) ? "gray" : "white";
    ctx.fillText(textData[i].text, posX, posY + (i*fontSize) + fontSize);
  }
}

function toColor(colorObj){
  return 'rgb(' + colorValLimit(colorObj.r) + ',' + colorValLimit(colorObj.g) + ',' + colorValLimit(colorObj.b) + ')';
}

function colorValLimit(color){
  if(color >= 255){
    color = 255;
  }

  if(color <= 0){
    color = 0;
  }

  return Math.round(color);
}

function colorSet(color){

  var colorCool = {
    r:color.r - 90,
    g:color.g - 20,
    b:color.b - 10
  };

  var colorWarm = {
    r:color.r - 10,
    g:color.g - 20,
    b:color.b - 90
  };

  var colorObj = {
    base: color,
    cool: colorCool,
    warm: colorWarm
  };

  return colorObj;
}