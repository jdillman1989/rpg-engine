function setUIData(players, enemies){
  for(var i = 0; i < players.length; ++i){

    var selected = i ? false : true;

    var act = [];
    for(var j = 0; j < players[i].abilities.length; ++j){

      var thistargets = [];

      switch(players[i].abilities[j].targets) {

        case 'player':
          for(var k = 0; k < players.length; ++k){
            thistargets.push(players[k].name);
          }
          break;

        case 'players':
          // All players
          break;

        case 'enemy':
          for(var k = 0; k < enemies.length; ++k){
            thistargets.push(enemies[k].name);
          }
          break;

        case 'enemies':
          // All enemies
          break;
      };

      var abilityData = {};
      abilityData[players[i].abilities[j].name] = thistargets;
      act.push(abilityData);
    }

    battleUI.push(
      {
        sel: selected,
        name: players[i].name,
        act: act,
        def: false,
        run: false
      }
    );
  }
}

function checkBounding(id, cornerA, cornerB, xPolarity, yPolarity, axis, loop){

  var tileA = map[coordsToTile(cornerA.x + xPolarity, cornerA.y + yPolarity)];
  var tileB = map[coordsToTile(cornerB.x + xPolarity, cornerB.y + yPolarity)];

  if(
    !tileA.state.passable || 
    !tileB.state.passable
  ){
    entities[id][axis] = 0;
  }

  else if(
    !id && (
      tileA.state.battle || 
      tileB.state.battle
    )
  ){
    entities[id][axis] = 0;

    var players = stats[0];
    var enemies = stats[tileA.render.object] ? stats[tileA.render.object] : stats[tileB.render.object];

    battleIntro(0, players, enemies);
  }

  else{
    entities[id][axis] = xPolarity ? xPolarity : yPolarity;
    walkLoop(id, loop);
  }
}

function canvasWrite(posX, posY, text){

  ctx.font = "9px Courier";
  ctx.fillStyle = "white";
  var lines = text.split('\n');
  var lineHeight = 9;

  for (var i = 0; i<lines.length; i++){
    ctx.fillText(lines[i], posX, posY + (i*lineHeight) + lineHeight);
  }
}

function toColor(colorObj){
  return 'rgb(' + colorValLimit(colorObj.r) + ',' + colorValLimit(colorObj.g) + ',' + colorValLimit(colorObj.b) + ')';
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
    b:color.b - 10
  };

  var colorWarm = {
    r:color.r - 10,
    g:color.g - 20,
    b:color.b - 90
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

    // Edges

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
            object: false,
            sprite: false
          },
          state: {
            passable: false
          }
        },
      );

    }
    else{

      // Grass

      map.push(
        {
          id: i,
          render: {
            base: '#0C3',
            object: false,
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