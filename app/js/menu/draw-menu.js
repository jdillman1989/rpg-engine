function drawMenu(displaySize){

  var menuText = menuData.head;
  var boxX = (canvas.width / 2) - displaySize;
  var boxY = (canvas.height / 2) - displaySize;
  var optionsY = boxY + fontSize + UISpacing.displayBorders + (UISpacing.displayPadding * 2);
  var optionsX = boxX + UISpacing.displayBorders + UISpacing.displayPadding;

  if(menuData.body.length){
    menuText += "\n" + menuData.body;
    var lines = menuData.body.split('\n');

    for (var i = 0; i < lines.length; i++){
      optionsY += fontSize;
    }
  }

  centeredBox(displaySize);

  canvasWrite(
    boxX + UISpacing.displayBorders + UISpacing.displayPadding, 
    boxY + UISpacing.displayBorders + UISpacing.displayPadding, 
    menuText
  );

  drawOptions(optionsX, optionsY);
  drawMenuCursor();
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
  drawMenu(boxSize);
}

function drawOptions(optionsX, optionY){
  for(var i = 0; i < menuData.options.length; i++){
    var row = (i % 2) ? (fontSize * ((i - 1) / 2)) : (fontSize * (i / 2)); // even=0, odd=1
    // 0:
    // 9 x 0/2 = 0

    // 1:
    // 9 x ((1-1)/2) = 0

    // 2:
    // 9 x 2/2 = 9

    // 3:
    // 9 x ((3-1)/2) = 9

    // 4:
    // 9 x 4/2 = 18

    // 5:
    // 9 x ((5-1)/2) = 18

    // 6:
    // 9 x 6/2 = 27

    // 7:
    // 9 x ((7-1)/2) = 27
    var col = (i % 2) ? menuData.size : 0; // even=0, odd=1
    canvasWrite(
      optionsX + col, 
      optionY + row, 
      menuData.options[i].text
    );
    menuData.options[i].x = optionsX + col;
    menuData.options[i].y = optionY + row;
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

function drawMenuCursor(){
  ctx.fillStyle = '#F00';

  var thisX = menuData.options[menuData.currentSel].x - 2,
      thisY = menuData.options[menuData.currentSel].y + (fontSize / 2) + 1;

  ctx.fillRect(thisX, thisY, 2, 2);
}