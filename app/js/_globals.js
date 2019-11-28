// Canvas Element
var canvas = null;

// Canvas Draw
var ctx = null;

// Static Globals
var tileSize = 16,
    mapW = 10,
    mapH = 10;

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
  right: false,
  enter: false,
  shift: false
};

var screen = 'overworld';

var entities = [
  {
    id: 0,
    type: 'mobile',
    tile: 22,
    xy: tileToCoords(22),
    speedX: 0,
    speedY: 0,
    sprite: playerSprite,
    frame: 0,
    interval: 0,
    logic: false,
    dir: false
  },
  {
    id: 1,
    type: 'static',
    tile: 44,
    xy: tileToCoords(44),
    speedX: 0,
    speedY: 0,
    sprite: tree,
    frame: 0,
    interval: 0,
    logic: {
      func: 'spriteLoop',
      data: [1, tree.render, 1000],
      state: {passable: false}
    },
    dir: false
  },
  {
    id: 2,
    type: 'mobile',
    tile: 28,
    xy: tileToCoords(28),
    speedX: 0,
    speedY: 0,
    sprite: enemy,
    frame: 0,
    interval: 0,
    logic: {
      func: 'setPath',
      data: [2, ['wait', 'down', 'wait', 'down', 'wait', 'left', 'wait', 'left', 'wait', 'up', 'wait', 'up', 'wait', 'right', 'wait', 'right'], tileToCoords(28), 0, 0],
      state: {passable: true, battle: true}
    },
    dir: {up:false, down:false, left:false, right:false}
  },
  {
    id: 3,
    type: 'static',
    tile: 37,
    xy: tileToCoords(37),
    speedX: 0,
    speedY: 0,
    sprite: tree,
    frame: 0,
    interval: 0,
    logic: {
      func: 'spriteLoop',
      data: [3, tree.render, 1500],
      state: {passable: false}
    },
    dir: false
  },
  {
    id: 4,
    type: 'mobile',
    tile: 52,
    xy: tileToCoords(52),
    speedX: 0,
    speedY: 0,
    sprite: enemy,
    frame: 0,
    interval: 0,
    logic: {
      func: 'setPath',
      data: [4, ['left', 'wait', 'right', 'wait'], tileToCoords(28), 0, 0],
      state: {passable: true, battle: true}
    },
    dir: {up:false, down:false, left:false, right:false}
  }
];

var stats = {
  0: [
    {
      id: 0,
      name: 'Jadle',
      stance: 0,
      maxHP: 100,
      currentHP: 100,
      strength: 30,
      agility: 80,
      intuition: 50,
      focus: 30
    },
    {
      id: 1,
      name: 'Idle',
      stance: 0,
      maxHP: 100,
      currentHP: 10,
      strength: 20,
      agility: 70,
      intuition: 50,
      focus: 30
    }
  ],
  2: [
    {
      id: 0,
      name: 'Imp 1',
      stance: 0,
      maxHP: 15,
      currentHP: 15,
      strength: 20,
      agility: 60,
      intuition: 50,
      focus: 30
    },
    {
      id: 1,
      name: 'Imp 2',
      stance: 0,
      maxHP: 15,
      currentHP: 15,
      strength: 10,
      agility: 50,
      intuition: 50,
      focus: 30
    }
  ],
  4: [
    {
      id: 0,
      name: 'Imp',
      stance: 0,
      maxHP: 20,
      currentHP: 20,
      strength: 20,
      agility: 60,
      intuition: 50,
      focus: 30
    }
  ]
}

var map = [];

var img;

var times = [];
var fps;

var battleData = {};
var battleAttackMenu = {
  'Aggressive': 'strength',
  'Fancy': 'agility', 
  'Precise': 'intuition'
};
var battleDefenseMenu = {
  'Defend': 'self',
  'Escape': 'allies'
};

var UISpacing = {
  displayBorders: 1,
  displayHeight: 32,
  displayPadding: 3
};
var fontSize = 9;
