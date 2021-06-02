// Get the two highest experience allocation bonus multipliers for a given player from the stats table
// statsID (int): ID of an individual player in the first entry of the stats table
function getBonusedStats(statsID) {
  const playerBonuses = stats[0][statsID].experience.bonuses;
  const statsSorted = Object.keys(playerBonuses).sort((a, b) => {
    return playerBonuses[a] - playerBonuses[b];
  });

  let result = {};
  result.primary = statsSorted[statsSorted.length - 1];
  result.secondary = statsSorted[statsSorted.length - 2];

  return result;
}

// Map state names to abbreviations and abbreviations to stat names
// text (str): comparison text
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

// Write some given text to the screen at a given position
// posX, posY (int): screen x/y coordinates for where to start writing
// text (str): the text to write
function canvasWrite(posX, posY, text) {
  ctx.font = fontSize + "px Courier";
  ctx.fillStyle = "white";
  const lines = text.split("\n");

  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], posX, posY + i * fontSize + fontSize);
  }
}

// Write some given text with dynamic state to the screen at a given position
// posX, posY (int): screen x/y coordinates for where to start writing
// textData (obj): [{text, disabled, id}, {text, disabled, id}, ...]
function canvasWriteData(posX, posY, textData) {
  ctx.font = fontSize + "px Courier";
  for (let i = 0; i < textData.length; i++) {
    ctx.fillStyle = textData[i].disabled ? "gray" : "white";
    ctx.fillText(textData[i].text, posX, posY + i * fontSize + fontSize);
  }
}

// Return a given color in an object alongside a cooler and warmer version
// color (obj): rbg values for a base color
function createColorSet(color) {
  const colorCool = {
    r: colorValLimit(color.r - 90),
    g: colorValLimit(color.g - 20),
    b: colorValLimit(color.b - 10),
  };

  const colorWarm = {
    r: colorValLimit(color.r - 10),
    g: colorValLimit(color.g - 20),
    b: colorValLimit(color.b - 90),
  };

  const base = {
    r: colorValLimit(color.r),
    g: colorValLimit(color.g),
    b: colorValLimit(color.b),
  };

  return {
    base: {
      obj: base,
      str: `rgb(${base.r}, ${base.g}, ${base.b})`,
    },
    cool: {
      obj: colorCool,
      str: `rgb(${colorCool.r}, ${colorCool.g}, ${colorCool.b})`,
    },
    warm: {
      obj: colorWarm,
      str: `rgb(${colorWarm.r}, ${colorWarm.g}, ${colorWarm.b})`,
    },
  };
}

// Limit a given int to a range 0-255
// color (int): relates to a r, b, or g color value
function colorValLimit(color) {
  if (color >= 255) {
    color = 255;
  }

  if (color <= 0) {
    color = 0;
  }

  return Math.round(color);
}
