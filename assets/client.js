// Black
var k1 = "#BBBBBB";
var k2 = "#7C7C7C";
var k3 = "#000000";

// Brown
var b1 = "#F0A357";
var b2 = "#D5642E";
var b3 = "#7D2010";

// Green
var g1 = "#C6F452";
var g2 = "#7CD466";
var g3 = "#49A42F";

// Yellow
var y1 = "#EFB740";
var y2 = "#A57D28";
var y3 = "#4C310B";

// Blue
var l1 = "#72F8FA";
var l2 = "#61BBF6";
var l3 = "#2E7CF0";

// Red
var r1 = "#F85998";
var r2 = "#D12E59";
var r3 = "#9A1E26";
var playerSprite = { // 16 x 24
  loop: false,
  render: {
    0:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,g1,g1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,k1,g1,g1,k1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, 0, k1,g1,k1,g1,g1,k1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,b1,k1,g1,g1,g1,g1,k1,b1,k1,0, 0, 0, 
      0, 0, k1,b1,b1,b1,k1,k1,k1,k1,b1,b1,b1,k1,0, 0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,k1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,b1,b1,k1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, 0, k1,b1,b1,b1,k1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, 0, 0, k1,k1,k1,b1,b1,b1,b1,k1,0, k1,k1,0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,k1,k1,k1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k1,k1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    1:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,g1,g1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,k1,g1,g1,k1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, 0, k1,g1,k1,g1,g1,k1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,b1,k1,g1,g1,g1,g1,k1,b1,k1,0, 0, 0, 
      0, 0, k1,b1,b1,b1,k1,k1,k1,k1,b1,b1,b1,k1,0, 0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,k1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,k1,b1,b1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,k1,b1,b1,b1,k1,0, 0, 
      0, 0, k1,k1,0, k1,b1,b1,b1,b1,k1,k1,k1,0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,k1,k1,k1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,r1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,k1,k1,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    2:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,g1,g1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, 0, k1,g1,k1,k1,k1,k1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,b1,b1,b1,b1,k1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,b1,b1,b1,b1,b1,b1,b1,b1,k1,0, 0, 0, 
      0, 0, k1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,k1,0, 0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, 0, k1,k1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,b1,k1,0, k1,k1,0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,k1,k1,k1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,r1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,k1,k1,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    3:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,g1,g1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, 0, k1,g1,k1,k1,k1,k1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,b1,b1,b1,b1,k1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,b1,b1,b1,b1,b1,b1,b1,b1,k1,0, 0, 0, 
      0, 0, k1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,k1,0, 0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,b1,b1,k1,0, 
      0, k1,b1,b1,k1,b1,b1,b1,b1,b1,b1,k1,k1,k1,0, 0, 
      0, 0, k1,k1,0, k1,b1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,k1,k1,k1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k1,k1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    4:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,g1,g1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,k1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,k1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,k1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,k1,b1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,k1,b1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,k1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, k1,b1,b1,b1,b1,k1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, k1,b1,b1,k1,k1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,b1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k1,k1,k1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,r1,k1,r1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,0, k1,r1,r1,k1,0, 0, 0, 
      0, 0, 0, k1,r1,r1,k1,0, 0, k1,r1,r1,k1,0, 0, 0, 
      0, 0, 0, 0, k1,k1,0, 0, 0, 0, k1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    5:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,g1,g1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,k1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,k1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,k1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,k1,b1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,k1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,k1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,b1,b1,k1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,b1,k1,b1,b1,k1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,b1,b1,k1,b1,k1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,k1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k1,k1,k1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,r1,r1,r1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,0, k1,r1,r1,k1,0, 0, 0, 
      0, 0, 0, k1,r1,r1,k1,0, 0, k1,r1,r1,k1,0, 0, 0, 
      0, 0, 0, 0, k1,k1,0, 0, 0, 0, k1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    6:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,g1,g1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,k1,k1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,k1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,k1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,k1,b1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,k1,b1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,k1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, k1,b1,b1,b1,b1,k1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, k1,b1,b1,k1,k1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,b1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k1,k1,k1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,r1,k1,r1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,0, k1,r1,r1,k1,0, 0, 0, 
      0, 0, 0, k1,r1,r1,k1,0, 0, k1,r1,r1,k1,0, 0, 0, 
      0, 0, 0, 0, k1,k1,0, 0, 0, 0, k1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    7:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k1,k1,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,g1,g1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,g1,g1,g1,g1,g1,g1,g1,k1,0, 0, 0, 
      0, 0, 0, k1,g1,k1,k1,g1,g1,g1,g1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,g1,g1,k1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,g1,g1,g1,k1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,k1,k1,b1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,k1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,b1,b1,b1,k1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,b1,b1,k1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,b1,k1,b1,b1,k1,b1,b1,k1,0, 0, 0, 0, 
      0, 0, 0, k1,b1,b1,k1,b1,k1,k1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k1,k1,k1,b1,b1,b1,k1,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k1,k1,k1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k1,r1,r1,r1,k1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,r1,k1,r1,r1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, k1,r1,r1,k1,0, k1,r1,r1,k1,0, 0, 0, 
      0, 0, 0, k1,r1,r1,k1,0, 0, k1,r1,r1,k1,0, 0, 0, 
      0, 0, 0, 0, k1,k1,0, 0, 0, 0, k1,k1,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
  }
};
var tree = { // 16 x 32
  loop: false,
  width: 16,
  height: 32,
  render: {
    0:[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,b1,g1,0, 0, 0, 0, 0, 0, 0,
      0, g1,g1,g1,g1,g1,g1,b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, g1,g1,g1,g1,g1,g1,b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, b1,b1,0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]
  }
};
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

function drawGame(map){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(var y = 0; y < mapH; ++y){
    for(var x = 0; x < mapW; ++x){
      var currentPos = ((y*mapW)+x);
      ctx.fillStyle = map[currentPos].render.base;
      if(currentPos == selectedTile){
        ctx.fillStyle = '#FF0';
      }
      ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);

      var thisSprite = map[currentPos].render.sprite;

      if(thisSprite){
        drawSprite(x*tileSize, y*tileSize, thisSprite.width, thisSprite.height, thisSprite.render[0]);
      }

      if(currentPos == selectedTile){
        drawPlayer(player.x, player.y, player.width, player.height, player.sprite.render, 0);
      }
    }
  }
}

function drawSprite(posX, posY, sizeX, sizeY, thisSprite){
  var k = 0;

  for(var y = posY; y < posY + sizeY; ++y){
    for(var x = posX; x < posX + sizeX; ++x){

      if(thisSprite[k]){
        ctx.fillStyle = thisSprite[k];
        ctx.fillRect(x, y, 1, 1);
      }
      k++;
    }
  }
}

function drawPlayer(posX, posY, sizeX, sizeY, thisSprite, frame){

  var offX = posX + speedX;
  var offY = posY + speedY;

  drawSprite(offX, offY, sizeX, sizeY, thisSprite[frame]);

  player.x = offX;
  player.y = offY;
}

window.onload = function(){

  testMap();
  
  canvas = document.getElementById('save');
  ctx = canvas.getContext("2d");

  selectedTile = coordsToTile(player.x, player.y);

  console.log(selectedTile);

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

  drawGame(map);
  window.requestAnimationFrame(function(){
    animateMove();
  });

  var fpsMonitor = setInterval(function(){
    $('.message').text(fps);
  }, 700);
};

function animateMove(){

  if(keys.up){
    speedY = -1;
  }
  else if(keys.down){
    speedY = 1;
  }
  else{
    speedY = 0;
  }

  if(keys.left){
    speedX = -1;
  }
  else if(keys.right){
    speedX = 1;
  }
  else{
    speedX = 0;
  }

  var tile = coordsToTile(player.x, player.y);
  selectedTile = tile;

  drawGame(map);
  window.requestAnimationFrame(function(){

    var now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;

    animateMove();
  });
}

function toColor(colorObj){
  return 'rgba(' + colorValLimit(colorObj.r) + ',' + colorValLimit(colorObj.g) + ',' + colorValLimit(colorObj.b) + ',' + colorObj.a + ')';
}

function colorValLimit(color){
  if(color >= 255){
    color = 255;
  }

  if(color <= 0){
    color = 0;
  }

  return Math.round(color);
}

function colorSet(color){

  var colorCool = {
    r:color.r - 90,
    g:color.g - 20,
    b:color.b - 10,
    a:color.a
  };

  var colorWarm = {
    r:color.r - 10,
    g:color.g - 20,
    b:color.b - 90,
    a:color.a
  };

  var colorObj = {
    base: color,
    cool: colorCool,
    warm: colorWarm
  };

  return colorObj;
}

function tileToCoords(tile){

  var yIndex = Math.floor(tile / mapW);
  var xIndex = tile - (yIndex * mapW);

  var y = yIndex * tileSize;
  var x = xIndex * tileSize;
  return {x:x, y:y};
}

function coordsToTile(x, y){
  var tile = ((Math.ceil(y / tileSize)) * mapW) + (Math.ceil(x / tileSize));
  return tile;
}

function adjacentTiles(tile){

  var obj = { "far":{}, "close":{}, "all":{} };

  var adj = {
    nw: (tile - (mapW + 1)),
    ne: (tile - (mapW - 1)),
    sw: (tile + (mapW - 1)),
    se: (tile + (mapW + 1)),
    n: (tile - mapW),
    e: (tile - 1),
    w: (tile + 1),
    s: (tile + mapW)
  };

  var bounds = Object.values(adj);
  var dir = Object.keys(adj);

  for (var i = 0; i < bounds.length; i++) {
    if (bounds[i] > -1 && bounds[i] <= (mapW * mapH)) {
      if (dir[i].length > 1) {
        obj["far"][dir[i]] = bounds[i];
      }
      else{
        obj["close"][dir[i]] = bounds[i];
      }
      obj["all"][dir[i]] = bounds[i];
    }
  }

  return obj;
}

function testMap(){
  for(var i = 0; i < (mapH * mapW); ++i){
    if (
      // top
      i < mapW || 
      // left
      (i % mapW) == 0 || 
      // right
      ((i + 1) % mapW) == 0 || 
      // bottom
      i > ((mapW * mapH) - mapW)
    ) {

      map.push(
        {
          id: i,
          render: {
            base: '#D35',
            sprite: false
          },
          state: {
            passable: false
          }
        },
      );

    }
    else{

      if(i == (mapW * 4) + 4){

        map.push(
          {
            id: i,
            render: {
              base: '#0C3',
              sprite: tree
            },
            state: {
              passable: false
            }
          },
        );

      }
      else{

        map.push(
          {
            id: i,
            render: {
              base: '#0C3',
              sprite: false
            },
            state: {
              passable: true
            }
          },
        );

      }

    }
  }
}