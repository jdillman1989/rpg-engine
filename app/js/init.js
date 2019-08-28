window.onload = function(){

  testMap();
  
  canvas = document.getElementById('save');
  ctx = canvas.getContext("2d");

  selectedTile = coordsToTile(player.x + (player.width / 2), player.y + (tileSize / 2));

  window.onkeydown = function(e) {
    switch(e.which) {

      case 87: // W
        keys.up = true;
        break;

      case 65: // A
        keys.left = true;
        break;

      case 83: // S
        keys.down = true;
        break;

      case 68: // D
        keys.right = true;
        break;
    };
  };

  window.onkeyup = function(e) {
    switch(e.which) {

      case 87: // W
        keys.up = false;
        break;

      case 65: // A
        keys.left = false;
        break;

      case 83: // S
        keys.down = false;
        break;

      case 68: // D
        keys.right = false;
        break;
    };
  };

  for(var i = 0; i < map.length; ++i){
    if(map[i].render.sprite){
      if(map[i].render.sprite.data.loop){
        spriteLoop(i, map[i].render.sprite.data.render, map[i].render.sprite.data.loop);
      }
    }
  }

  drawGame(map);
  window.requestAnimationFrame(function(){
    animateMove();
  });

  var fpsMonitor = setInterval(function(){
    $('.message').text(fps);
  }, 700);
};
