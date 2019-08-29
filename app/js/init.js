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
        clearInterval(playerInterval);
        playerInterval = 0;
        break;

      case 65: // A
        keys.left = false;
        clearInterval(playerInterval);
        playerInterval = 0;
        break;

      case 83: // S
        keys.down = false;
        clearInterval(playerInterval);
        playerInterval = 0;
        break;

      case 68: // D
        keys.right = false;
        clearInterval(playerInterval);
        playerInterval = 0;
        break;
    };
  };

  for(var i = 0; i < map.length; ++i){
    if(map[i].render.object){
      if(map[i].render.object.logic){

        window[map[i].render.object.logic.func].apply(null, map[i].render.object.logic.data);
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
