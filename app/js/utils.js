function animateMove(){

  if(keys.up){

    var topLeft = {x: player.x, y: player.y};
    var topRight = {x: player.x + player.width - 1, y: player.y};

    if(!map[coordsToTile(topLeft.x, topLeft.y)].state.passable || !map[coordsToTile(topRight.x, topRight.y)].state.passable){
      speedY = 0;
    }
    else{
      speedY = -1;
    }
  }
  else if(keys.down){

    var bottomLeft = {x: player.x, y: player.y + player.width - 1};
    var bottomRight = {x: player.x + player.width - 1, y: player.y + player.width - 1};

    if(!map[coordsToTile(bottomLeft.x, bottomLeft.y)].state.passable || !map[coordsToTile(bottomRight.x, bottomRight.y)].state.passable){
      speedY = 0;
    }
    else{
      speedY = 1;
    }
  }
  else{
    speedY = 0;
  }

  if(keys.left){

    var bottomLeft = {x: player.x, y: player.y + player.width - 1};
    var topLeft = {x: player.x, y: player.y};

    if(!map[coordsToTile(bottomLeft.x, bottomLeft.y)].state.passable || !map[coordsToTile(topLeft.x, topLeft.y)].state.passable){
      speedX = 0;
    }
    else{
      speedX = -1;
    }
  }
  else if(keys.right){

    var bottomRight = {x: player.x + player.width - 1, y: player.y + player.width - 1};
    var topRight = {x: player.x + player.width - 1, y: player.y};

    if(!map[coordsToTile(bottomRight.x, bottomRight.y)].state.passable || !map[coordsToTile(topRight.x, topRight.y)].state.passable){
      speedX = 0;
    }
    else{
      speedX = 1;
    }
  }
  else{
    speedX = 0;
  }

  selectedTile = coordsToTile(player.x + (player.width / 2), player.y + (tileSize / 2));

  drawGame(map);

  window.requestAnimationFrame(function(){

    var now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;

    animateMove();
  });
}

function toColor(colorObj){
  return 'rgba(' + colorValLimit(colorObj.r) + ',' + colorValLimit(colorObj.g) + ',' + colorValLimit(colorObj.b) + ',' + colorObj.a + ')';
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
    b:color.b - 10,
    a:color.a
  };

  var colorWarm = {
    r:color.r - 10,
    g:color.g - 20,
    b:color.b - 90,
    a:color.a
  };

  var colorObj = {
    base: color,
    cool: colorCool,
    warm: colorWarm
  };

  return colorObj;
}

function tileToCoords(tile){

  var yIndex = Math.floor(tile / mapW);
  var xIndex = tile - (yIndex * mapW);

  var y = yIndex * tileSize;
  var x = xIndex * tileSize;
  return {x:x, y:y};
}

function coordsToTile(x, y){

  var tile = ((Math.floor(y / tileSize)) * mapW) + (Math.floor(x / tileSize));
  return tile;
}

function adjacentTiles(tile){

  var obj = { "far":{}, "close":{}, "all":{} };

  var adj = {
    nw: (tile - (mapW + 1)),
    ne: (tile - (mapW - 1)),
    sw: (tile + (mapW - 1)),
    se: (tile + (mapW + 1)),
    n: (tile - mapW),
    e: (tile - 1),
    w: (tile + 1),
    s: (tile + mapW)
  };

  var bounds = Object.values(adj);
  var dir = Object.keys(adj);

  for (var i = 0; i < bounds.length; i++) {
    if (bounds[i] > -1 && bounds[i] <= (mapW * mapH)) {
      if (dir[i].length > 1) {
        obj["far"][dir[i]] = bounds[i];
      }
      else{
        obj["close"][dir[i]] = bounds[i];
      }
      obj["all"][dir[i]] = bounds[i];
    }
  }

  return obj;
}

function testMap(){
  for(var i = 0; i < (mapH * mapW); ++i){
    if (
      // top
      i < mapW || 
      // left
      (i % mapW) == 0 || 
      // right
      ((i + 1) % mapW) == 0 || 
      // bottom
      i > ((mapW * mapH) - mapW)
    ) {

      map.push(
        {
          id: i,
          render: {
            base: '#D35',
            sprite: false
          },
          state: {
            passable: false
          }
        },
      );

    }
    else{

      if(i == (mapW * 4) + 4){

        map.push(
          {
            id: i,
            render: {
              base: '#0C3',
              sprite: tree
            },
            state: {
              passable: false
            }
          },
        );

      }
      else{

        map.push(
          {
            id: i,
            render: {
              base: '#0C3',
              sprite: false
            },
            state: {
              passable: true
            }
          },
        );

      }

    }
  }
}