function drawGame(map){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(var y = 0; y < mapH; ++y){
    for(var x = 0; x < mapW; ++x){
      var currentPos = ((y*mapW)+x);
      ctx.fillStyle = map[currentPos].render.base;
      if(currentPos == selectedTile){
        ctx.fillStyle = '#FF0';
      }
      ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);

      var thisSprite = map[currentPos].render.sprite;

      if(thisSprite){
        drawSprite(x*tileSize, y*tileSize, thisSprite.width, thisSprite.height, thisSprite.render[0]);
      }

      if(currentPos == selectedTile){
        drawPlayer(player.x, player.y, player.width, player.height, player.sprite.render, 0);
      }
    }
  }
}

function drawSprite(posX, posY, sizeX, sizeY, thisSprite){
  var k = 0;

  for(var y = posY; y < posY + sizeY; ++y){
    for(var x = posX; x < posX + sizeX; ++x){

      if(thisSprite[k]){
        ctx.fillStyle = thisSprite[k];
        ctx.fillRect(x, y, 1, 1);
      }
      k++;
    }
  }
}

function drawPlayer(posX, posY, sizeX, sizeY, thisSprite, frame){

  var offX = posX + speedX;
  var offY = posY + speedY;

  drawSprite(offX, offY, sizeX, sizeY, thisSprite[frame]);

  player.x = offX;
  player.y = offY;
}
