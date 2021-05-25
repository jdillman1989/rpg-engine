window.onload = () => {
  testMap();

  canvas = document.getElementById("save");
  ctx = canvas.getContext("2d");

  window.onkeydown = (e) => {
    switch (e.which) {
      case 87: // W
        keysState("up", true);
        break;

      case 65: // A
        keysState("left", true);
        break;

      case 83: // S
        keysState("down", true);
        break;

      case 68: // D
        keysState("right", true);
        break;

      case 13: // Enter
        keysState("enter", true);
        break;

      case 16: // Shift
        keysState("shift", true);
        break;
    }
  };

  window.onkeyup = (e) => {
    switch (e.which) {
      case 87: // W
        keysState("up", false);
        break;

      case 65: // A
        keysState("left", false);
        break;

      case 83: // S
        keysState("down", false);
        break;

      case 68: // D
        keysState("right", false);
        break;

      case 13: // Enter
        keysState("enter", false);
        break;

      case 16: // Shift
        keysState("shift", false);
        break;
    }
  };

  entityDataToMap();

  img = document.createElement("img");
  img.src = "/rpg-engine/assets/images/bg.png";

  window.requestAnimationFrame(() => {
    overworldLoop();
  });

  const fpsMonitor = setInterval(() => {
    document.getElementById("message").innerHTML = fps;
  }, 700);
};

var entityDataToMap = () => {
  for (let i = 0; i < entities.length; ++i) {
    if (entities[i].type) {
      map[entities[i].tile].render.object = entities[i].id;

      if (entities[i].logic) {
        if (entities[i].logic.func) {
          window[entities[i].logic.func].apply(null, entities[i].logic.data);
        }

        if (entities[i].logic.state) {
          map[entities[i].tile].state = entities[i].logic.state;
        }
      }
    } else {
      map[entities[i].tile].render.object = false;
      map[entities[i].tile].state = { passable: true };
    }
  }
};

var keysState = (key, down) => {
  if (down) {
    keys[key] = true;
  } else {
    keys[key] = false;

    if (screen == "overworld") {
      clearInterval(entities[0].interval);
      entities[0].interval = 0;
    }
  }
};

var overworldLoop = () => {
  if (screen == "overworld") {
    drawGame(map);

    animateMove(0, keys.up, keys.down, keys.left, keys.right);

    for (let i = 0; i < entities.length; ++i) {
      if (i && entities[i].type == "mobile") {
        animateMove(
          i,
          entities[i].dir.up,
          entities[i].dir.down,
          entities[i].dir.left,
          entities[i].dir.right
        );
      }
    }

    if (checkXP) {
      xpCheck();
      checkXP = false;
    }

    window.requestAnimationFrame(() => {
      var now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      overworldLoop();
    });
  }
};

var battleLoop = (prevKeyState) => {
  if (screen == "battle") {
    drawBattle();

    battleSelect(prevKeyState);

    const thisPrevKeyState = JSON.parse(JSON.stringify(keys));

    window.requestAnimationFrame(() => {
      var now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      battleLoop(thisPrevKeyState);
    });
  } else {
    battleSelect(prevKeyState);
    const thisPrevKeyState = JSON.parse(JSON.stringify(keys));

    if (battleData.players.length) {
      window.requestAnimationFrame(() => {
        battleLoop(thisPrevKeyState);
      });
    }
  }
};

var menuLoop = (prevKeyState) => {
  if (screen == "menu") {
    drawMenu();

    menuSelect(prevKeyState);

    const thisPrevKeyState = JSON.parse(JSON.stringify(keys));

    window.requestAnimationFrame(() => {
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      menuLoop(thisPrevKeyState);
    });
  }
};
