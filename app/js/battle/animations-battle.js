// Wipe-to-black animation from overworld
// step (int): height of the black square being drawn
function battleIntro(step) {
  screen = "battle";

  step = step + 4;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, step);

  if (step >= canvas.height) {
    battleBg(60);
    return;
  } else {
    window.requestAnimationFrame(() => {
      battleIntro(step);
    });
  }
}

// Fade-in-background animation for battle scene
// step (int): transparency of the black background
function battleBg(step) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step - 2;

  ctx.globalAlpha = 1;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = (step / 60).toFixed(2);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (step <= 0) {
    ctx.globalAlpha = 1;
    battleSet(0);
    return;
  } else {
    window.requestAnimationFrame(() => {
      battleBg(step);
    });
  }
}

// Battle menu and characters slide-in animation
// step (int): vertical postions of the menus and horizontal positions of the characters
function battleSet(step) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step + 2;

  // Draw BG
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Draw top display
  ctx.fillStyle = "#FFF";
  ctx.fillRect(
    0,
    -UISpacing.displayHeight + step,
    canvas.width,
    UISpacing.displayHeight
  );
  ctx.fillStyle = "#225";
  ctx.fillRect(
    UISpacing.displayBorders,
    -UISpacing.displayHeight + step + UISpacing.displayBorders,
    canvas.width - UISpacing.displayBorders * 2,
    UISpacing.displayHeight - UISpacing.displayBorders * 2
  );

  // Draw bottom display
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, canvas.height - step, canvas.width, UISpacing.displayHeight);
  ctx.fillStyle = "#225";
  ctx.fillRect(
    UISpacing.displayBorders,
    canvas.height - step + UISpacing.displayBorders,
    canvas.width - UISpacing.displayBorders * 2,
    UISpacing.displayHeight - UISpacing.displayBorders * 2
  );

  // Draw player
  const playerWidth = 20;
  ctx.fillStyle = "#FFF";
  for (let i = 0; i < battleData.players.length; ++i) {
    ctx.fillRect(
      -playerWidth + step * 1.5,
      (canvas.height / (battleData.players.length + 1)) * (i + 1),
      playerWidth,
      30
    );
  }

  // Draw enemies
  const enemyWidth = 20;
  ctx.fillStyle = "#000";
  for (let i = 0; i < battleData.enemies.length; ++i) {
    ctx.fillRect(
      canvas.width - step * 1.5,
      (canvas.height / (battleData.enemies.length + 1)) * (i + 1),
      enemyWidth,
      30
    );
  }

  if (step >= UISpacing.displayHeight) {
    const keyState = JSON.parse(JSON.stringify(keys));
    battleLoop(keyState);
    return;
  } else {
    window.requestAnimationFrame(() => {
      battleSet(step);
    });
  }
}

// Queue overworld map and animate the end results of the battle
// step (int): size of the battle results UI box
function battleEnd(step) {
  screen = "overworld"; // start listening for OK button confirmation
  centeredBoxAnimate(step, 40, "battleEndText");
}

// Instructions for battle end results box content
function battleEndText() {
  const battleXP = xpEarned();
  const displaySize = 40;

  centeredBox(displaySize);

  canvasWrite(
    canvas.width / 2 -
      displaySize +
      UISpacing.displayBorders +
      UISpacing.displayPadding,
    canvas.height / 2 -
      displaySize +
      UISpacing.displayBorders +
      UISpacing.displayPadding,
    `You win!\nRewards\nXP:    ${battleXP}`
  );

  const buttonWidth = 20;
  const positionBottomCenter =
    canvas.height / 2 +
    displaySize -
    fontSize -
    UISpacing.displayBorders -
    UISpacing.displayPadding;
  ctx.fillStyle = "#F00";
  ctx.fillRect(
    canvas.width / 2 - buttonWidth / 2,
    positionBottomCenter,
    buttonWidth,
    fontSize
  );

  canvasWrite(canvas.width / 2 - 6, positionBottomCenter, "OK");
}
