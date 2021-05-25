function getBonusedStats(playerID) {
  const playerBonuses = stats[0][playerID].experience.bonuses;
  const statsSorted = Object.keys(playerBonuses).sort((a, b) => {
    return playerBonuses[a] - playerBonuses[b];
  });

  let result = {};
  result.primary = statsSorted[statsSorted.length - 1];
  result.secondary = statsSorted[statsSorted.length - 2];

  return result;
}

function abbrevs(text) {
  switch (text) {
    case "Str":
      return "strength";
      break;

    case "Agl":
      return "agility";
      break;

    case "Int":
      return "intuition";
      break;

    case "Foc":
      return "focus";
      break;

    case "strength":
      return "Str";
      break;

    case "agility":
      return "Agl";
      break;

    case "intuition":
      return "Int";
      break;

    case "focus":
      return "Foc";
      break;
  }
}

function canvasWrite(posX, posY, text) {
  ctx.font = fontSize + "px Courier";
  ctx.fillStyle = "white";
  const lines = text.split("\n");

  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], posX, posY + i * fontSize + fontSize);
  }
}

// textData: [{text, disabled, id}, {text, disabled, id}, ...]
function canvasWriteData(posX, posY, textData) {
  ctx.font = fontSize + "px Courier";
  for (let i = 0; i < textData.length; i++) {
    ctx.fillStyle = textData[i].disabled ? "gray" : "white";
    ctx.fillText(textData[i].text, posX, posY + i * fontSize + fontSize);
  }
}

function toColor(colorObj) {
  return (
    "rgb(" +
    colorValLimit(colorObj.r) +
    "," +
    colorValLimit(colorObj.g) +
    "," +
    colorValLimit(colorObj.b) +
    ")"
  );
}

function colorValLimit(color) {
  if (color >= 255) {
    color = 255;
  }

  if (color <= 0) {
    color = 0;
  }

  return Math.round(color);
}

function colorSet(color) {
  const colorCool = {
    r: color.r - 90,
    g: color.g - 20,
    b: color.b - 10,
  };

  const colorWarm = {
    r: color.r - 10,
    g: color.g - 20,
    b: color.b - 90,
  };

  const colorObj = {
    base: color,
    cool: colorCool,
    warm: colorWarm,
  };

  return colorObj;
}
