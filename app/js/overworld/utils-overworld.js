// Check collision between two entities
// id (int): array id reference for an overworld entity
// cornerA, cornerB (obj): x/y coordinates of a forward moving corner taken from the entity's position
// xPolarity, yPolarity (int): determines how the entity is moving horizontally or vertically (0, 1, -1)
// axis (str): speedX or speedY corresponds to an entity obj key to set its vertical or horizontal speed
// loop (array): ints that determine the sprite frames to loop over
function checkBounding(id, cornerA, cornerB, xPolarity, yPolarity, axis, loop) {
  const tileA = map[coordsToTile(cornerA.x + xPolarity, cornerA.y + yPolarity)];
  const tileB = map[coordsToTile(cornerB.x + xPolarity, cornerB.y + yPolarity)];

  // if either of the dest tiles aren't passable, stop movement
  if (!tileA.state.passable || !tileB.state.passable) {
    entities[id][axis] = 0;
  }

  // if the entity id is the player (0) and either of the dest tiles have enemies, start battle
  else if (!id && (tileA.state.battle || tileB.state.battle)) {
    entities[id][axis] = 0;

    const players = stats[0];
    const enemies = stats[tileA.render.object]
      ? stats[tileA.render.object]
      : stats[tileB.render.object];
    const enemiesID = tileA.render.object
      ? tileA.render.object
      : tileB.render.object;

    battleIntro(0);
    battleDataInit(players, enemies, enemiesID);
  }

  // if the entity id is NOT the player (1+) and either of the dest tiles have the player, start battle
  else if (id && (tileA.state.player || tileB.state.player)) {
    entities[id][axis] = 0;

    const players = stats[0];
    const enemies = stats[id];
    const enemiesID = id;

    battleIntro(0);
    battleDataInit(players, enemies, enemiesID);
  }

  // set the entity's speed and start the animation
  else {
    entities[id][axis] = xPolarity ? xPolarity : yPolarity;
    walkLoop(id, loop);
  }
}

// convert a tile ID to screen coordinates
// tile (int): ID of an overworld tile
function tileToCoords(tile) {
  const yIndex = Math.floor(tile / mapW);
  const xIndex = tile - yIndex * mapW;

  const y = yIndex * tileSize;
  const x = xIndex * tileSize;
  return { x, y };
}

// convert screen coordinates to a tile ID
// x, y (int): horizontal and vertical lines of pixels that define a single pixel on the screen
function coordsToTile(x, y) {
  const tile = Math.floor(y / tileSize) * mapW + Math.floor(x / tileSize);
  return tile;
}

// Get an object of all cardinal and diagonal tiles adjacent to a given tile
// tile (int): ID of an overworld tile
function adjacentTiles(tile) {
  const obj = { far: {}, close: {}, all: {} };

  const adj = {
    nw: tile - (mapW + 1),
    ne: tile - (mapW - 1),
    sw: tile + (mapW - 1),
    se: tile + (mapW + 1),
    n: tile - mapW,
    e: tile - 1,
    w: tile + 1,
    s: tile + mapW,
  };

  const bounds = Object.values(adj);
  const dir = Object.keys(adj);

  for (let i = 0; i < bounds.length; i++) {
    if (bounds[i] > -1 && bounds[i] <= mapW * mapH) {
      if (dir[i].length > 1) {
        obj["far"][dir[i]] = bounds[i];
      } else {
        obj["close"][dir[i]] = bounds[i];
      }
      obj["all"][dir[i]] = bounds[i];
    }
  }

  return obj;
}

// Generate a map object for a simple room to debug in
function testMap() {
  for (let i = 0; i < mapH * mapW; ++i) {
    // Edges

    if (
      // top
      i < mapW ||
      // left
      i % mapW == 0 ||
      // right
      (i + 1) % mapW == 0 ||
      // bottom
      i > mapW * mapH - mapW
    ) {
      map.push({
        id: i,
        render: {
          base: "#D35",
          object: false,
          sprite: false,
        },
        state: {
          passable: false,
        },
      });
    } else {
      // Grass

      map.push({
        id: i,
        render: {
          base: "#0C3",
          object: false,
          sprite: false,
        },
        state: {
          passable: true,
        },
      });
    }
  }
}

// Check entity AI view and make any needed changes its currentAction
// id (int): array id reference for an overworld entity
// dir (str): direction the entity is facing (up, down, left, right)
function checkAI(id, dir) {
  const adjacent = adjacentTiles(entities[id].tile).close;
  let originViewTile = 0;
  switch (dir) {
    case "up":
      originViewTile = adjacentTiles(adjacent.n).close.n;
      break;

    case "down":
      originViewTile = adjacentTiles(adjacent.s).close.s;
      break;

    case "left":
      originViewTile = adjacentTiles(adjacent.w).close.w;
      break;

    case "right":
      originViewTile = adjacentTiles(adjacent.e).close.e;
      break;

    default:
      return;
  }
  const fieldOfViewObj = adjacentTiles(originViewTile).all;
  const fieldOfViewArr = Object.values(fieldOfViewObj);
  fieldOfViewArr.push(originViewTile);
  if (fieldOfViewArr.includes(entities[0].tile)) {
    if (entities[id].ai.canChase) {
      entities[id].currentAction = "chase";
    } else if (entities[id].ai.canFlee) {
      entities[id].currentAction = "flee";
    }
  }
}
