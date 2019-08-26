// Canvas Element
var canvas = null;

// Canvas Draw
var ctx = null;

// Static Globals
var tileSize = 16,
    mapW = 15,
    mapH = 15;

var camera = {
  x: 0,
  y: 0,
  width: 10,
  height: 10
};

var keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

var player = {x:1, y:1, width: 16, height: 24, sprite: playerSprite};

var speedX = 0,
    speedY = 0;

var selectedTile;

var times = [];
var fps;

var map = [];
