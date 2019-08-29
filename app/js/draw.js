function drawGame(map){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var spriteData = [];

  for(var y = 0; y < mapH; ++y){
    for(var x = 0; x < mapW; ++x){

      var currentPos = ((y*mapW)+x);

      ctx.fillStyle = map[currentPos].render.base;
      if(currentPos == selectedTile){
        ctx.fillStyle = '#FF0';
      }
      ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);

      var thisObj = map[currentPos].render.object;

      if(currentPos == selectedTile){
        spriteData.push({player: true});
      }

      if(thisObj){
        var originX = (x*tileSize);
        var originY = ((y*tileSize) + tileSize) - thisObj.sprite.height;
        spriteData.push(
          {
            player: false,
            originX: originX, 
            originY: originY, 
            width: thisObj.sprite.width, 
            height: thisObj.sprite.height,
            render: thisObj.sprite.render[thisObj.frame]
          }
        );
      }
    }
  }

  for(var i = 0; i < spriteData.length; ++i){
    if(spriteData[i].player){
      drawPlayer(player.x, player.y, player.width, player.height, player.sprite.render, player.frame);
    }
    else{
      drawSprite(spriteData[i].originX, spriteData[i].originY, spriteData[i].width, spriteData[i].height, spriteData[i].render);
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

  drawSprite(offX, offY + sizeX - sizeY, sizeX, sizeY, thisSprite[frame]);

  player.x = offX;
  player.y = offY;
}
