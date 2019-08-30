window.onload = function(){

  testMap();
  
  canvas = document.getElementById('save');
  ctx = canvas.getContext("2d");

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
        clearInterval(entities[0].interval);
        entities[0].interval = 0;
        break;

      case 65: // A
        keys.left = false;
        clearInterval(entities[0].interval);
        entities[0].interval = 0;
        break;

      case 83: // S
        keys.down = false;
        clearInterval(entities[0].interval);
        entities[0].interval = 0;
        break;

      case 68: // D
        keys.right = false;
        clearInterval(entities[0].interval);
        entities[0].interval = 0;
        break;
    };
  };

  for(var i = 0; i < entities.length; ++i){

    map[entities[i].tile].render.object = entities[i].id;

    if(entities[i].logic){        

      window[entities[i].logic.func].apply(null, entities[i].logic.data);

      if(entities[i].logic.state){
        map[entities[i].tile].state = entities[i].logic.state;
      }
    }
  }

  drawGame(map);
  window.requestAnimationFrame(function(){
    mainLoop();
  });

  var fpsMonitor = setInterval(function(){
    $('.message').text(fps);
  }, 700);
};
