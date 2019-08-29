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
            object: false
          },
          state: {
            passable: false
          }
        },
      );

    }
    else{

      // Tree 1

      if(i == (mapW * 4) + 4){

        map.push(
          {
            id: i,
            render: {
              base: '#0C3',
              object: {
                sprite: tree,
                frame: 1,
                logic: {
                  func: 'spriteLoop',
                  data: [i, tree.render, 1500]
                }
              }
            },
            state: {
              passable: false
            }
          },
        );

      }

      // Enemy

      else if(i == (mapW * 1) + 8){

        map.push(
          {
            id: i,
            render: {
              base: '#0C3',
              object: {
                sprite: enemy, 
                frame: 1,
                logic: {
                  func: 'spritePath',
                  data: []
                }
              }
            },
            state: {
              passable: true
            }
          },
        );

      }

      // Tree 2

      else if(i == (mapW * 4) + 3){

        map.push(
          {
            id: i,
            render: {
              base: '#0C3',
              object: {
                sprite: tree,
                frame: 1,
                logic: {
                  func: 'spriteLoop',
                  data: [i, tree.render, 1000]
                }
              }
            },
            state: {
              passable: false
            }
          },
        );

      }

      // Grass

      else{

        map.push(
          {
            id: i,
            render: {
              base: '#0C3',
              object: false
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