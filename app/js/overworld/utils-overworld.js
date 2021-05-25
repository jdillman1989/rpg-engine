// Check collision between two entities
// id: int value of entities table id
// cornerA: obj of x and y values from entities table, calculated to a current moving bounding corner
// cornerB: obj of x and y values from entities table, calculated to a current moving bounding corner
// xPolarity: int that determines how the entity is moving horizontally (0, 1, -1)
// yPolarity: int that determines how the entity is moving vertically (0, 1, -1)
// axis: string that corresponds to an obj key from the entity to set it's vertical or horizontal speed ('speedX', or 'speedY')
// loop: array of ints that determine the sprite frames to pass to walkLoop() for animation
var checkBounding = (
  id,
  cornerA,
  cornerB,
  xPolarity,
  yPolarity,
  axis,
  loop
) => {
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
};

var tileToCoords = (tile) => {
  const yIndex = Math.floor(tile / mapW);
  const xIndex = tile - yIndex * mapW;

  const y = yIndex * tileSize;
  const x = xIndex * tileSize;
  return { x, y };
};

var coordsToTile = (x, y) => {
  const tile = Math.floor(y / tileSize) * mapW + Math.floor(x / tileSize);
  return tile;
};

var adjacentTiles = (tile) => {
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
};

var testMap = () => {
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
};
