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
      data: [2, tree.render, 1500],
      state: {passable: false}
    },
    dir: false
  },
  {
    id: 3,
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
      data: [3, ['wait', 'down', 'wait', 'down', 'wait', 'left', 'wait', 'left', 'wait', 'up', 'wait', 'up', 'wait', 'right', 'wait', 'right'], tileToCoords(28), 0, 0],
      state: {passable: true, battle: true}
    },
    dir: {up:false, down:false, left:false, right:false}
  }
];

var stats = {
  0: [
    {
      name: 'Jadle',
      maxHP: 100,
      currentHP: 100,
      off: 10,
      def: 5,
      spd: 10,
      abilities: [
        {
          name: 'fire', 
          desc: 'strike an enemy with a stream of flames.',
          targets: 'enemy'
        },
        {
          name: 'heal',
          desc: 'restore an ally\'s health.',
          targets: 'player'
        }
      ]
    },
    {
      name: 'Idle',
      maxHP: 100,
      currentHP: 100,
      off: 10,
      def: 5,
      spd: 9,
      abilities: [
        {
          name: 'fire', 
          desc: 'strike an enemy with a stream of flames.',
          targets: 'enemy'
        },
        {
          name: 'heal',
          desc: 'restore an ally\'s health.',
          targets: 'player'
        }
      ]
    }
  ],
  3: [
    {
      name: 'Imp 1',
      maxHP: 15,
      currentHP: 15,
      off: 10,
      def: 5,
      spd: 8
    },
    {
      name: 'Imp 2',
      maxHP: 15,
      currentHP: 15,
      off: 10,
      def: 5,
      spd: 7
    }
  ]
}

var map = [];

var img;

var times = [];
var fps;

var battleUI = {};
var UISpacing = {
  displayBorders: 1,
  displayHeight: 32,
  displayPadding: 3
};
var fontSize = 9;
