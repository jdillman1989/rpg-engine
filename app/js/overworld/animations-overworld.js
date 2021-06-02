// Move an entity across tiles according to their movement and speed properties
// id (int): array id reference for an overworld entity
// up, down, left, right (bool): directions that the entity should move
function animateMove(id, up, down, left, right) {
  const prevTile = entities[id].tile;

  if (up) {
    const topLeft = { x: entities[id].xy.x, y: entities[id].xy.y };
    const topRight = {
      x: entities[id].xy.x + entities[id].sprite.width - 1,
      y: entities[id].xy.y,
    };

    checkBounding(id, topLeft, topRight, 0, -1, "speedY", [2, 3]);
  } else if (down) {
    const bottomLeft = {
      x: entities[id].xy.x,
      y: entities[id].xy.y + entities[id].sprite.width - 1,
    };
    const bottomRight = {
      x: entities[id].xy.x + entities[id].sprite.width - 1,
      y: entities[id].xy.y + entities[id].sprite.width - 1,
    };

    checkBounding(id, bottomLeft, bottomRight, 0, 1, "speedY", [0, 1]);
  } else {
    entities[id].speedY = 0;
  }

  if (left) {
    const bottomLeft = {
      x: entities[id].xy.x,
      y: entities[id].xy.y + entities[id].sprite.width - 1,
    };
    const topLeft = { x: entities[id].xy.x, y: entities[id].xy.y };

    checkBounding(id, bottomLeft, topLeft, -1, 0, "speedX", [4, 5]);
  } else if (right) {
    const bottomRight = {
      x: entities[id].xy.x + entities[id].sprite.width - 1,
      y: entities[id].xy.y + entities[id].sprite.width - 1,
    };
    const topRight = {
      x: entities[id].xy.x + entities[id].sprite.width - 1,
      y: entities[id].xy.y,
    };

    checkBounding(id, bottomRight, topRight, 1, 0, "speedX", [6, 7]);
  } else {
    entities[id].speedX = 0;
  }

  entities[id].tile = coordsToTile(
    entities[id].xy.x + entities[id].sprite.width / 2,
    entities[id].xy.y + tileSize / 2
  );
  map[entities[id].tile].render.object = id;
  if (entities[id].logic.state) {
    map[entities[id].tile].state = entities[id].logic.state;
  }

  if (prevTile !== entities[id].tile) {
    map[prevTile].render.object = false;
    map[prevTile].state = { passable: true };
  }
}

// Entity callback to redraw sprite frames at a given rate
// id (int): array id reference for an overworld entity
// frames (array): sprite draw data
// rate (int): number of milliseconds between redraws
function spriteLoop(id, frames, rate) {
  let i = 0;
  const thisAnim = setInterval(() => {
    entities[id].frame = i;
    i++;
    if (i >= frames.length) {
      i = 0;
    }
  }, rate);
}

// Entity callback to set its move state
// id (int): array id reference for an overworld entity
// path (array): strings that determine ordered directions to take (up, down, left, right, wait, or stop)
// originPoint (obj): x/y coordinates of where the current step should start
// originTime (int): tracks the time spent for wait or stop commands
// step (int): index of the current path array command
function setPath(id, path, originPoint, originTime, step) {
  if (
    entities[id].currentAction !== "chase" ||
    entities[id].currentAction !== "flee"
  ) {
    if (path[step] != "wait" && path[step] != "stop") {
      const destX = Math.abs(entities[id].xy.x - originPoint.x);
      const destY = Math.abs(entities[id].xy.y - originPoint.y);

      if (destX >= tileSize || destY >= tileSize) {
        step = step + 1;
        if (step >= path.length) {
          step = 0;
        }

        originPoint = JSON.parse(JSON.stringify(entities[id].xy));
        clearInterval(entities[id].interval);
        entities[id].interval = 0;
      }
    } else {
      originTime = originTime + 1;
      if (originTime == 60) {
        originTime = 0;
        step = step + 1;
        if (step >= path.length) {
          step = 0;
        }
        clearInterval(entities[id].interval);
        entities[id].interval = 0;
      }
    }

    switch (path[step]) {
      case "up":
        entities[id].dir.up = true;
        entities[id].dir.down = false;
        entities[id].dir.left = false;
        entities[id].dir.right = false;
        break;

      case "down":
        entities[id].dir.up = false;
        entities[id].dir.down = true;
        entities[id].dir.left = false;
        entities[id].dir.right = false;
        break;

      case "left":
        entities[id].dir.up = false;
        entities[id].dir.down = false;
        entities[id].dir.left = true;
        entities[id].dir.right = false;
        break;

      case "right":
        entities[id].dir.up = false;
        entities[id].dir.down = false;
        entities[id].dir.left = false;
        entities[id].dir.right = true;
        break;

      case "wait":
        entities[id].dir.up = false;
        entities[id].dir.down = false;
        entities[id].dir.left = false;
        entities[id].dir.right = false;
        break;

      case "stop":
        return;
    }

    if (entities[id].ai.canChase || entities[id].ai.canFlee) {
      checkAI(id, path[step]);
    }

    window.requestAnimationFrame(() => {
      setPath(id, path, originPoint, originTime, step);
    });
  } else {
    window.requestAnimationFrame(() => {
      chasePath(id);
    });
  }
}

// Set entity pathing toward the player when its currentAction is chase
// id (int): array id reference for an overworld entity
// originPoint (obj): x/y coordinates of where the current step should start
function chasePath(id) {
  if (entities[id].currentAction === "chase") {
    entities[id].dir.up = entities[0].xy.y <= entities[id].xy.y;
    entities[id].dir.down = entities[0].xy.y > entities[id].xy.y;
    entities[id].dir.left = entities[0].xy.x <= entities[id].xy.x;
    entities[id].dir.right = entities[0].xy.x > entities[id].xy.x;

    window.requestAnimationFrame(() => {
      chasePath(id);
    });
  } else {
    window.requestAnimationFrame(() => {
      returnEntityPath(id);
    });
  }
}

// Set a given entity's animation loop interval and loop through its frames for redraw
// id (int): array id reference for an overworld entity
// frames (array): ints that determine the sprite frames to loop over
function walkLoop(id, frames) {
  let i = 1;

  if (entities[id].interval == 0) {
    entities[id].frame = frames[0];
    entities[id].interval = setInterval(() => {
      entities[id].frame = frames[i];
      i++;
      if (i >= frames.length) {
        i = 0;
      }
    }, 200);
  }
}
