function drawGame(map){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var tileObjData = [];

  for(var y = 0; y < mapH; ++y){
    for(var x = 0; x < mapW; ++x){

      var currentPos = ((y*mapW)+x);

      ctx.fillStyle = map[currentPos].render.base;

      var thisObj = map[currentPos].render.object;

      if(thisObj !== false){

        ctx.fillStyle = '#00F';

        thisObj = entities[thisObj];
        var originX = (x*tileSize);
        var originY = ((y*tileSize) + tileSize) - thisObj.sprite.height;
        if(thisObj.type == 'mobile'){
          originX = thisObj.xy.x;
          originY = thisObj.xy.y;
        }
        tileObjData.push(
          {
            id: thisObj.id,
            type: thisObj.type,
            originX: originX, 
            originY: originY, 
            width: thisObj.sprite.width, 
            height: thisObj.sprite.height,
            render: thisObj.sprite.render[thisObj.frame]
          }
        );
      }

      if(currentPos == entities[0].tile){
        ctx.fillStyle = '#FF0';
      }

      ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);

    }
  }

  for(var i = 0; i < tileObjData.length; ++i){
    if(tileObjData[i].type == 'mobile'){
      drawEntity(tileObjData[i].id, tileObjData[i].originX, tileObjData[i].originY, tileObjData[i].width, tileObjData[i].height, tileObjData[i].render);
    }
    else{
      drawSprite(tileObjData[i].originX, tileObjData[i].originY, tileObjData[i].width, tileObjData[i].height, tileObjData[i].render);
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

function drawEntity(id, posX, posY, sizeX, sizeY, thisSprite){

  var offX = posX + entities[id].speedX;
  var offY = posY + entities[id].speedY;

  drawSprite(offX, offY + sizeX - sizeY, sizeX, sizeY, thisSprite);

  entities[id].xy.x = offX;
  entities[id].xy.y = offY;
}

function drawBattle(){
  return;
}
