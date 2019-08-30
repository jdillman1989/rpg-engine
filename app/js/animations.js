function mainLoop(){
  drawGame(map);

  animateMove(0, keys.up, keys.down, keys.left, keys.right);

  window.requestAnimationFrame(function(){

    var now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;

    mainLoop();
  });
}

function animateMove(id, up, down, left, right){

  var prevTile = entities[id].tile;

  if(up){

    var topLeft = {x: entities[id].xy.x, y: entities[id].xy.y};
    var topRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y};

    if(!map[coordsToTile(topLeft.x, topLeft.y - 1)].state.passable || !map[coordsToTile(topRight.x, topRight.y - 1)].state.passable){
      entities[id].speedY = 0;
    }
    else{
      entities[id].speedY = -1;
      walkLoop(id, [2,3]);
    }
  }
  else if(down){

    var bottomLeft = {x: entities[id].xy.x, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var bottomRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y + entities[id].sprite.width - 1};

    if(!map[coordsToTile(bottomLeft.x, bottomLeft.y + 1)].state.passable || !map[coordsToTile(bottomRight.x, bottomRight.y + 1)].state.passable){
      entities[id].speedY = 0;
    }
    else{
      entities[id].speedY = 1;
      walkLoop(id, [0,1]);
    }
  }
  else{
    entities[id].speedY = 0;
  }

  if(left){

    var bottomLeft = {x: entities[id].xy.x, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var topLeft = {x: entities[id].xy.x, y: entities[id].xy.y};

    if(!map[coordsToTile(bottomLeft.x - 1, bottomLeft.y)].state.passable || !map[coordsToTile(topLeft.x - 1, topLeft.y)].state.passable){
      entities[id].speedX = 0;
    }
    else{
      entities[id].speedX = -1;
      walkLoop(id, [4,5]);
    }
  }
  else if(right){

    var bottomRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var topRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y};

    if(!map[coordsToTile(bottomRight.x + 1, bottomRight.y)].state.passable || !map[coordsToTile(topRight.x + 1, topRight.y)].state.passable){
      entities[id].speedX = 0;
    }
    else{
      entities[id].speedX = 1;
      walkLoop(id, [6,7]);
    }
  }
  else{
    entities[id].speedX = 0;
  }

  entities[id].tile = coordsToTile(entities[id].xy.x + (entities[id].sprite.width / 2), entities[id].xy.y + (tileSize / 2));
  map[entities[id].tile].render.object = id;

  if(prevTile !== entities[id].tile){
    map[prevTile].render.object = false;
  }
}

function spriteLoop(id, frames, rate){
  var i = 0;
  var thisAnim = setInterval(function(){

    entities[id].frame = i;
    i++;
    if(i >= frames.length){
      i = 0;
    }
  }, rate);
}

function setPath(id, path, rate){

  return;
}

function walkLoop(id, frames){

  var i = 1;

  if(entities[id].interval == 0){

    entities[id].frame = frames[0];
    entities[id].interval = setInterval(function(){
      entities[id].frame = frames[i];
      i++;
      if(i >= frames.length){
        i = 0;
      }
    }, 200);
  }
}