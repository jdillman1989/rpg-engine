function xpCheck(){
  var playerParty = stats[0];
  for(var i = 0; i < playerParty.length; i++){
    var levelUp = baseXP * (playerParty[i].experience.level / 10);
    if(playerParty[i].experience.points >= levelUp){
      screen = 'levelup';
      centeredBoxAnimate(0, 50, 'levelUpUI', [i]);
    }
  }
}

function recalcMaxHP(statsID){
  stats[0][statsID].maxHP = stats[0][statsID].strength * 3;
}