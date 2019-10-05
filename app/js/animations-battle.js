function battleIntro(step, players, enemies){

  screen = 'battle';

  step = step + 4;

  // ctx.fillStyle = '#FF0';
  // ctx.fillRect(0, step + 4, canvas.width, step + 4);

  // ctx.fillStyle = '#F00';
  // ctx.fillRect(0, step, canvas.width, step + 4);

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, step);

  if(step >= canvas.height){
    battleBg(60, players, enemies);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleIntro(step, players, enemies);
    });
  }
}

function battleBg(step, players, enemies){

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step - 2;

  ctx.globalAlpha = 1;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = (step / 60).toFixed(2);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if(step <= 0){
    ctx.globalAlpha = 1;
    battleSet(0, players, enemies);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleBg(step, players, enemies);
    });
  }
}

function battleSet(step, players, enemies){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step + 2;
  var displayBorders = 1;
  var displayHeight = 32;

  // Draw BG
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Draw top display
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, -(displayHeight) + step, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, (-(displayHeight) + step) + displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));

  // Draw bottom display
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, canvas.height - step, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, canvas.height - step + displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));

  // Draw player
  var playerWidth = 20;
  ctx.fillStyle = '#FFF';
  ctx.fillRect(-(playerWidth) + (step * 1.5), canvas.height / 2, playerWidth, 30);


  // Draw enemies
  var enemyWidth = 20;
  ctx.fillStyle = '#000';
  ctx.fillRect(canvas.width - (step * 1.5), canvas.height / 2, enemyWidth, 30);


  if(step >= displayHeight){
    battleLoop(players, enemies);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleSet(step, players, enemies);
    });
  }
}

function battleEnd(step){
  return;
}









