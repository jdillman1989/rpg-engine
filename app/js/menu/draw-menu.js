function drawMenu(){

  ctx.clearRect(
    (canvas.width / 2) - menuData.size, 
    (canvas.height / 2) - menuData.size, 
    menuData.size * 2, 
    menuData.size * 2
  );

  var menuText = menuData.head + "\n" + menuData.body;
  var boxX = (canvas.width / 2) - menuData.size;
  var boxY = (canvas.height / 2) - menuData.size;

  centeredBox(menuData.size);

  canvasWrite(
    boxX + UISpacing.displayBorders + UISpacing.displayPadding, 
    boxY + UISpacing.displayBorders + UISpacing.displayPadding, 
    menuText
  );

  drawOptions();
  drawMenuCursor();
}

function drawOptions(){
  for(var i = 0; i < menuData.options.length; i++){
    if(menuData.options[i].effects){
      window[menuData.options[i].effects.func].apply(null, menuData.options[i].effects.data);
    }
  }
  for(var i = 0; i < menuData.options.length; i++){
    canvasWrite(
      menuData.options[i].x, 
      menuData.options[i].y, 
      menuData.options[i].text
    );
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

function statHighlight(color, optionID){
  ctx.fillStyle = color;

  var thisX = menuData.options[optionID].x,
      thisY = menuData.options[optionID].y;

  ctx.fillRect(
    menuData.options[optionID].x,
    menuData.options[optionID].y,
    fontCharWidth * 3,
    fontSize
  );
}