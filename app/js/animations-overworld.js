function animateMove(id, up, down, left, right){

  var prevTile = entities[id].tile;

  if(up){

    var topLeft = {x: entities[id].xy.x, y: entities[id].xy.y};
    var topRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y};

    checkBounding(id, topLeft, topRight, -1, 'speedY', [2,3]);
  }
  else if(down){

    var bottomLeft = {x: entities[id].xy.x, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var bottomRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y + entities[id].sprite.width - 1};

    checkBounding(id, bottomLeft, bottomRight, 1, 'speedY', [0,1]);
  }
  else{
    entities[id].speedY = 0;
  }

  if(left){

    var bottomLeft = {x: entities[id].xy.x, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var topLeft = {x: entities[id].xy.x, y: entities[id].xy.y};

    checkBounding(id, bottomLeft, topLeft, -1, 'speedX', [4,5]);
  }
  else if(right){

    var bottomRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var topRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y};

    checkBounding(id, bottomRight, topRight, 1, 'speedX', [6,7]);
  }
  else{
    entities[id].speedX = 0;
  }

  entities[id].tile = coordsToTile(entities[id].xy.x + (entities[id].sprite.width / 2), entities[id].xy.y + (tileSize / 2));
  map[entities[id].tile].render.object = id;
  if(entities[id].logic.state){
    map[entities[id].tile].state = entities[id].logic.state;
  }

  if(prevTile !== entities[id].tile){
    map[prevTile].render.object = false;
    map[prevTile].state = {passable: true};
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

function setPath(id, path, originPoint, originTime, step){

  if (path[step] != 'wait' && path[step] != 'stop') {

    var destX = Math.abs(entities[id].xy.x - originPoint.x);
    var destY = Math.abs(entities[id].xy.y - originPoint.y);

    if (destX >= tileSize || destY >= tileSize) {

      step = step + 1;
      if(step >= path.length){
        step = 0;
      }

      originPoint = JSON.parse(JSON.stringify(entities[id].xy));
      clearInterval(entities[id].interval);
      entities[id].interval = 0;
    }
  }
  else{
    originTime = originTime + 1;
    if(originTime == 60){
      originTime = 0;
      step = step + 1;
      if(step >= path.length){
        step = 0;
      }
      clearInterval(entities[id].interval);
      entities[id].interval = 0;
    }
  }

  switch(path[step]) {

    case 'up':
      entities[id].dir.up = true;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break;

    case 'down':
      entities[id].dir.up = false;
      entities[id].dir.down = true;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break;

    case 'left':
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = true;
      entities[id].dir.right = false;
      break;

    case 'right':
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = true;
      break;

    case 'wait':
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break

    case 'stop':
      return;
      break
  };

  window.requestAnimationFrame(function(){

    setPath(id, path, originPoint, originTime, step);
  });
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
