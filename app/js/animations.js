function animateMove(){

  if(keys.up){

    var topLeft = {x: player.x, y: player.y};
    var topRight = {x: player.x + player.width - 1, y: player.y};

    if(!map[coordsToTile(topLeft.x, topLeft.y - 1)].state.passable || !map[coordsToTile(topRight.x, topRight.y - 1)].state.passable){
      speedY = 0;
    }
    else{
      speedY = -1;
    }
  }
  else if(keys.down){

    var bottomLeft = {x: player.x, y: player.y + player.width - 1};
    var bottomRight = {x: player.x + player.width - 1, y: player.y + player.width - 1};

    if(!map[coordsToTile(bottomLeft.x, bottomLeft.y + 1)].state.passable || !map[coordsToTile(bottomRight.x, bottomRight.y + 1)].state.passable){
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

    if(!map[coordsToTile(bottomLeft.x - 1, bottomLeft.y)].state.passable || !map[coordsToTile(topLeft.x - 1, topLeft.y)].state.passable){
      speedX = 0;
    }
    else{
      speedX = -1;
    }
  }
  else if(keys.right){

    var bottomRight = {x: player.x + player.width - 1, y: player.y + player.width - 1};
    var topRight = {x: player.x + player.width - 1, y: player.y};

    if(!map[coordsToTile(bottomRight.x + 1, bottomRight.y)].state.passable || !map[coordsToTile(topRight.x + 1, topRight.y)].state.passable){
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

function spriteLoop(spriteID, frames, rate){
  var i = 0;
  var thisAnim = setInterval(function(){

    map[spriteID].render.sprite.frame = i;
    i++;
    if(i >= frames.length){
      i = 0;
    }
  }, rate);
}