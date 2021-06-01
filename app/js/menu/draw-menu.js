// Main draw loop for a menu box in order from bottom to top layers
function drawMenu() {
  ctx.clearRect(
    canvas.width / 2 - menuData.size,
    canvas.height / 2 - menuData.size,
    menuData.size * 2,
    menuData.size * 2
  );

  const menuText = menuData.head + "\n" + menuData.body;
  const boxX = canvas.width / 2 - menuData.size;
  const boxY = canvas.height / 2 - menuData.size;

  centeredBox(menuData.size);

  canvasWrite(
    boxX + UISpacing.displayBorders + UISpacing.displayPadding,
    boxY + UISpacing.displayBorders + UISpacing.displayPadding,
    menuText
  );

  drawOptions();
  drawMenuCursor();
}

// Draw menu selection options to the screen from menuData state
function drawOptions() {
  for (let i = 0; i < menuData.options.length; i++) {
    if (menuData.options[i].effects) {
      window[menuData.options[i].effects.func].apply(
        null,
        menuData.options[i].effects.data
      );
    }
  }
  for (let i = 0; i < menuData.options.length; i++) {
    canvasWrite(
      menuData.options[i].x,
      menuData.options[i].y,
      menuData.options[i].text
    );
  }
}

// Draw centered box as a backround for the menu
// size (int): Width / Height of the box
function centeredBox(size) {
  ctx.fillStyle = "#FFF";
  ctx.fillRect(
    canvas.width / 2 - size,
    canvas.height / 2 - size,
    size * 2,
    size * 2
  );
  ctx.fillStyle = "#225";
  ctx.fillRect(
    canvas.width / 2 - size + UISpacing.displayBorders,
    canvas.height / 2 - size + UISpacing.displayBorders,
    size * 2 - UISpacing.displayBorders * 2,
    size * 2 - UISpacing.displayBorders * 2
  );
}

// Draw the cursor for the menu options
function drawMenuCursor() {
  ctx.fillStyle = "#F00";

  const thisX = menuData.options[menuData.currentSel].x - 2;
  const thisY = menuData.options[menuData.currentSel].y + fontSize / 2 + 1;

  ctx.fillRect(thisX, thisY, 2, 2);
}

// Draw a colored rectangle behind a given menu option
// color (str): hex code for the rectangle color
// optionID (int): menuData ID for the option to highlight
function statHighlight(color, optionID) {
  ctx.fillStyle = color;

  ctx.fillRect(
    menuData.options[optionID].x,
    menuData.options[optionID].y,
    fontCharWidth * 3,
    fontSize
  );
}
