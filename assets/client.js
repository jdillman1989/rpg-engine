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
var enemy = { // 16 x 24
  width: 16,
  height: 24,
  render: [

    //////////
    // Down //
    //////////

    [ // 0
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,r2,r2,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,k3,r2,r2,k3,r2,r2,k3,0, 0, 0, 
      0, 0, 0, 0, k3,r2,k3,r2,r2,k3,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,k3,r2,r2,r2,r2,k3,r2,k3,0, 0, 0, 
      0, 0, k3,r2,r2,r2,k3,k3,k3,k3,r2,r2,r2,k3,0, 0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, k3,r2,r2,k3,k3,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, k3,r2,r2,r2,r2,k3,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, 0, k3,r2,r2,r2,k3,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, 0, 0, k3,k3,k3,r2,r2,r2,r2,k3,0, k3,k3,0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k3,k3,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [ // 1
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,r2,r2,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,k3,r2,r2,k3,r2,r2,k3,0, 0, 0, 
      0, 0, 0, 0, k3,r2,k3,r2,r2,k3,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,k3,r2,r2,r2,r2,k3,r2,k3,0, 0, 0, 
      0, 0, k3,r2,r2,r2,k3,k3,k3,k3,r2,r2,r2,k3,0, 0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,k3,k3,r2,r2,k3,0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,k3,r2,r2,r2,r2,k3,0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,k3,r2,r2,r2,k3,0, 0, 
      0, 0, k3,k3,0, k3,r2,r2,r2,r2,k3,k3,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,k3,k3,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],

    ////////
    // Up //
    ////////

    [ // 2
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,r2,r2,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, 0, k3,r2,k3,k3,k3,k3,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,r2,r2,r2,r2,k3,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, 0, k3,k3,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,r2,k3,0, k3,k3,0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,k3,k3,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [ // 3
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,r2,r2,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, 0, k3,r2,k3,k3,k3,k3,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,r2,r2,r2,r2,k3,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,r2,r2,k3,0, 
      0, k3,r2,r2,k3,r2,r2,r2,r2,r2,r2,k3,k3,k3,0, 0, 
      0, 0, k3,k3,0, k3,r2,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k3,k3,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],

    //////////
    // Left //
    //////////

    [ // 4
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,r2,r2,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,k3,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,k3,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,k3,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,k3,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,k3,k3,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,r2,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, 0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,0, 0, 0, 0, k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [ // 5
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,r2,r2,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,k3,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,k3,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,k3,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,r2,r2,k3,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,k3,r2,r2,k3,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,k3,r2,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,k3,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,r1,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, 0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,0, 0, 0, 0, k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],

    ///////////
    // Right //
    ///////////

    [ // 6
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,r2,r2,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,r2,k3,0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,k3,r2,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,k3,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,k3,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,k3,k3,r2,r2,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,r2,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,r1,k3,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, 0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,0, 0, 0, 0, k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [ // 7
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,r2,r2,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,r2,r2,k3,0, 0, 0, 
      0, 0, 0, k3,r2,r2,r2,r2,r2,r2,k3,r2,k3,0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,r2,r2,k3,r2,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,r2,r2,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,r2,r2,r2,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,r2,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,k3,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,k3,r2,r2,r2,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,k3,r2,r2,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r2,r2,k3,r2,r2,k3,r2,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,r2,k3,r2,r2,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,r2,r2,r2,k3,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, 0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,0, 0, 0, 0, k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
  ]
};
var playerSprite = { // 16 x 24
  width: 16,
  height: 24,
  render: [

    //////////
    // Down //
    //////////

    [ // 0
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,g1,g1,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,k3,g1,g1,k3,g1,g1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,g1,k3,g1,g1,k3,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,b1,k3,g1,g1,g1,g1,k3,b1,k3,0, 0, 0, 
      0, 0, k3,b1,b1,b1,k3,k3,k3,k3,b1,b1,b1,k3,0, 0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, k3,b1,b1,k3,k3,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, k3,b1,b1,b1,b1,k3,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, 0, k3,b1,b1,b1,k3,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, 0, 0, k3,k3,k3,b1,b1,b1,b1,k3,0, k3,k3,0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k3,k3,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [ // 1
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,g1,g1,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,k3,g1,g1,k3,g1,g1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,g1,k3,g1,g1,k3,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,b1,k3,g1,g1,g1,g1,k3,b1,k3,0, 0, 0, 
      0, 0, k3,b1,b1,b1,k3,k3,k3,k3,b1,b1,b1,k3,0, 0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,k3,k3,b1,b1,k3,0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,k3,b1,b1,b1,b1,k3,0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,k3,b1,b1,b1,k3,0, 0, 
      0, 0, k3,k3,0, k3,b1,b1,b1,b1,k3,k3,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,k3,k3,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],

    ////////
    // Up //
    ////////

    [ // 2
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,g1,g1,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,g1,k3,k3,k3,k3,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,b1,b1,b1,b1,k3,k3,0, 0, 0, 0, 
      0, 0, 0, k3,b1,b1,b1,b1,b1,b1,b1,b1,k3,0, 0, 0, 
      0, 0, k3,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,k3,0, 0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, 0, k3,k3,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,b1,k3,0, k3,k3,0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,k3,k3,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [ // 3
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,g1,g1,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,g1,k3,k3,k3,k3,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,b1,b1,b1,b1,k3,k3,0, 0, 0, 0, 
      0, 0, 0, k3,b1,b1,b1,b1,b1,b1,b1,b1,k3,0, 0, 0, 
      0, 0, k3,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,k3,0, 0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,b1,b1,k3,0, 
      0, k3,b1,b1,k3,b1,b1,b1,b1,b1,b1,k3,k3,k3,0, 0, 
      0, 0, k3,k3,0, k3,b1,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k3,k3,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],

    //////////
    // Left //
    //////////

    [ // 4
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,g1,g1,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,k3,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,b1,b1,b1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,b1,b1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,k3,b1,b1,b1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,k3,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, k3,b1,b1,b1,b1,k3,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, k3,b1,b1,k3,k3,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,b1,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, 0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,0, 0, 0, 0, k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [ // 5
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,g1,g1,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,k3,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,b1,b1,b1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,k3,b1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,k3,b1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,b1,b1,k3,b1,b1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,b1,k3,b1,b1,k3,b1,b1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,b1,b1,k3,b1,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,k3,k3,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, k3,k3,k3,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,r1,r1,r1,k3,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,r1,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, 0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,0, 0, 0, 0, k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],

    ///////////
    // Right //
    ///////////

    [ // 6
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,g1,g1,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,g1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,k3,g1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,b1,b1,b1,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,b1,b1,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,b1,b1,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,k3,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,k3,b1,b1,b1,b1,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,k3,k3,b1,b1,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,b1,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,r1,k3,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, 0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,0, 0, 0, 0, k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [ // 7
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, k3,k3,0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,g1,g1,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,g1,g1,k3,0, 0, 0, 
      0, 0, 0, k3,g1,g1,g1,g1,g1,g1,k3,g1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,g1,g1,g1,g1,g1,k3,g1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,g1,g1,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,g1,g1,g1,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,b1,b1,b1,k3,k3,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,b1,k3,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,b1,k3,b1,b1,b1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,b1,b1,k3,b1,b1,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,b1,b1,k3,b1,b1,k3,b1,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,k3,k3,b1,k3,b1,b1,k3,0, 0, 0, 
      0, 0, 0, 0, 0, k3,b1,b1,b1,k3,k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,k3,k3,k3,0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 0, 
      0, 0, 0, 0, k3,r1,r1,k3,r1,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, k3,r1,r1,k3,0, 0, 0, 0, 
      0, 0, 0, k3,r1,r1,k3,0, 0, k3,r1,r1,k3,0, 0, 0, 
      0, 0, 0, 0, k3,k3,0, 0, 0, 0, k3,k3,0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
  ]
};
var tree = { // 16 x 32
  width: 16,
  height: 32,
  render: [
    [
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
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,b1,b1,g1,g1,g1,g1,g1,0, 0,
      0, g1,g1,g1,g1,g1,g1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, g1,g1,g1,g1,g1,g1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, g1,g1,g1,g1,g1,g1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, b1,b1,b1,b1,0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
  ]
};
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
      stance: 0,
      maxHP: 100,
      currentHP: 100,
      strength: 20,
      agility: 80,
      intuition: 50,
      focus: 30
    },
    {
      name: 'Idle',
      stance: 0,
      maxHP: 100,
      currentHP: 100,
      strength: 20,
      agility: 70,
      intuition: 50,
      focus: 30
    }
  ],
  3: [
    {
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
      name: 'Imp 2',
      stance: 0,
      maxHP: 15,
      currentHP: 15,
      strength: 20,
      agility: 50,
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

window.onload = function(){

  testMap();
  
  canvas = document.getElementById('save');
  ctx = canvas.getContext("2d");

  window.onkeydown = function(e) {
    switch(e.which) {

      case 87: // W
        keysState('up', true);
        break;

      case 65: // A
        keysState('left', true);
        break;

      case 83: // S
        keysState('down', true);
        break;

      case 68: // D
        keysState('right', true);
        break;

      case 13: // Enter
        keysState('enter', true);
        break;

      case 16: // Shift
        keysState('shift', true);
        break;
    };
  };

  window.onkeyup = function(e) {
    switch(e.which) {

      case 87: // W
        keysState('up', false);
        break;

      case 65: // A
        keysState('left', false);
        break;

      case 83: // S
        keysState('down', false);
        break;

      case 68: // D
        keysState('right', false);
        break;

      case 13: // Enter
        keysState('enter', false);
        break;

      case 16: // Shift
        keysState('shift', false);
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

  img = document.createElement('img');
  img.src = '/rpg-engine/assets/images/bg.png';

  window.requestAnimationFrame(function(){
    overworldLoop();
  });

  var fpsMonitor = setInterval(function(){
    document.getElementById('message').innerHTML = fps;
  }, 700);
};

function keysState(key, down){
  if(down){
    keys[key] = true;
  }
  else{
    keys[key] = false;

    if(screen == 'overworld'){
      clearInterval(entities[0].interval);
      entities[0].interval = 0;
    }
  }
}

function overworldLoop(){

  if (screen == 'overworld') {
    drawGame(map);

    animateMove(0, keys.up, keys.down, keys.left, keys.right);

    for(var i = 0; i < entities.length; ++i){
      if(i && entities[i].type == 'mobile'){
        animateMove(i, entities[i].dir.up, entities[i].dir.down, entities[i].dir.left, entities[i].dir.right);
      }
    }
    window.requestAnimationFrame(function(){

      var now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      overworldLoop();
    });
  }
}

function battleLoop(prevKeyState){

  if (screen == 'battle') {
    drawBattle();

    battleSelect(prevKeyState);

    var thisPrevKeyState = JSON.parse(JSON.stringify(keys));

    window.requestAnimationFrame(function(){

      var now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      battleLoop(thisPrevKeyState);
    });
  }
  else{
    battleEnd(0);
  }
}

function canvasWrite(posX, posY, text){

  ctx.font = fontSize + "px Courier";
  ctx.fillStyle = "white";
  var lines = text.split('\n');

  for (var i = 0; i<lines.length; i++){
    ctx.fillText(lines[i], posX, posY + (i*fontSize) + fontSize);
  }
}

function toColor(colorObj){
  return 'rgb(' + colorValLimit(colorObj.r) + ',' + colorValLimit(colorObj.g) + ',' + colorValLimit(colorObj.b) + ')';
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
    b:color.b - 10
  };

  var colorWarm = {
    r:color.r - 10,
    g:color.g - 20,
    b:color.b - 90
  };

  var colorObj = {
    base: color,
    cool: colorCool,
    warm: colorWarm
  };

  return colorObj;
}
function battleIntro(step){

  screen = 'battle';

  step = step + 4;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, step);

  if(step >= canvas.height){
    battleBg(60);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleIntro(step);
    });
  }
}

function battleBg(step){

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step - 2;

  ctx.globalAlpha = 1;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = (step / 60).toFixed(2);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if(step <= 0){
    ctx.globalAlpha = 1;
    battleSet(0);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleBg(step);
    });
  }
}

function battleSet(step){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step + 2;

  // Draw BG
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Draw top display
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, -(UISpacing.displayHeight) + step, canvas.width, UISpacing.displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(UISpacing.displayBorders, (-(UISpacing.displayHeight) + step) + UISpacing.displayBorders, canvas.width - (UISpacing.displayBorders * 2), UISpacing.displayHeight - (UISpacing.displayBorders * 2));

  // Draw bottom display
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, canvas.height - step, canvas.width, UISpacing.displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(UISpacing.displayBorders, canvas.height - step + UISpacing.displayBorders, canvas.width - (UISpacing.displayBorders * 2), UISpacing.displayHeight - (UISpacing.displayBorders * 2));

  // Draw player
  var playerWidth = 20;
  ctx.fillStyle = '#FFF';
  for(var i = 0; i < battleData.players.length; ++i){
    ctx.fillRect(-(playerWidth) + (step * 1.5), (canvas.height / (battleData.players.length + 1)) * (i + 1), playerWidth, 30);
  }


  // Draw enemies
  var enemyWidth = 20;
  ctx.fillStyle = '#000';
  for(var i = 0; i < battleData.enemies.length; ++i){
    ctx.fillRect(canvas.width - (step * 1.5), (canvas.height / (battleData.enemies.length + 1)) * (i + 1), enemyWidth, 30);
  }


  if(step >= UISpacing.displayHeight){
    var keyState = JSON.parse(JSON.stringify(keys));
    battleLoop(keyState);
    return;
  }
  else{
    window.requestAnimationFrame(function(){
      battleSet(step);
    });
  }
}

function battleEnd(step){
  return;
}

function drawBattle(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  drawTopDisplay();
  drawBottomDisplay();
  drawPlayerBattle();
  drawEnemiesBattle();
  drawCursor();
}

function drawTopDisplay(){

  // [Jadle 100/100] -> [ATK or target desc]
  var charText = battleData.UI.top.left;
  var descriptionText = battleData.UI.top.right;

  // Borders
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 0, canvas.width, UISpacing.displayHeight);

  // Box
  ctx.fillStyle = '#225';
  ctx.fillRect(
    UISpacing.displayBorders, 
    UISpacing.displayBorders, 
    canvas.width - (UISpacing.displayBorders * 2), 
    UISpacing.displayHeight - (UISpacing.displayBorders * 2)
  );

  // Left Text
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding, 
    UISpacing.displayBorders, 
    charText
  );

  // Right Text
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + (canvas.width / 3), 
    UISpacing.displayBorders, 
    descriptionText
  );
}

function drawBottomDisplay(){

  var currentPlayer = Object.keys(battleData.stack).length;

  var playersText = battleData.UI.bottom[0].join('\n');
  var actionText = battleData.UI.bottom[1].join('\n');
  var optionsText = battleData.UI.bottom[2].join('\n');
  var targetText = battleData.UI.bottom[3].join('\n');

  // Borders
  ctx.fillStyle = '#FFF';
  ctx.fillRect(
    0, 
    canvas.height - UISpacing.displayHeight, 
    canvas.width, 
    UISpacing.displayHeight
  );

  // Box
  ctx.fillStyle = '#225';
  ctx.fillRect(
    UISpacing.displayBorders, 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    canvas.width - (UISpacing.displayBorders * 2), 
    UISpacing.displayHeight - (UISpacing.displayBorders * 2)
  );

  // Highlight current player selection
  ctx.fillStyle = '#F00';
  ctx.fillRect(
    UISpacing.displayBorders + UISpacing.displayPadding, 
    (canvas.height - UISpacing.displayHeight + UISpacing.displayBorders) + (currentPlayer * fontSize), 
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4)), 
    fontSize
  );

  // Player names
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding, 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    playersText
  );

  // Player actions
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) * 1),
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    actionText
  );

  // Contextual options
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) * 2), 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    optionsText
  );

  // Contextual targets
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + ((canvas.width / 4) * 3), 
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders, 
    targetText
  );
}

function drawPlayerBattle(){

  var playerWidth = 20;
  ctx.fillStyle = '#FFF';

  for(var i = 0; i < battleData.players.length; ++i){
    ctx.fillRect(
      -(playerWidth) + 48, 
      (canvas.height / (battleData.players.length + 1)) * (i + 1), 
      playerWidth, 
      30
    );
  }
}

function drawEnemiesBattle(){

  var enemyWidth = 20;
  ctx.fillStyle = '#000';

  for(var i = 0; i < battleData.enemies.length; ++i){
    ctx.fillRect(
      canvas.width - 48, 
      (canvas.height / (battleData.enemies.length + 1)) * (i + 1), 
      enemyWidth, 
      30
    );
  }
}

function drawCursor(){
  ctx.fillStyle = '#F00';

  var thisX = UISpacing.displayBorders + ((canvas.width / 4) * battleData.selStage),
      thisY = canvas.height - UISpacing.displayHeight + UISpacing.displayBorders + (fontSize * battleData.selSlot) + (fontSize / 2);

  ctx.fillRect(thisX, thisY, 2, 2);
}
function battleDataInit(players, enemies){
  var thesePlayersNames = [];
  var thesePlayersHealth = [];
  for(var i = 0; i < players.length; ++i){
    players[i]['id'] = i;
    thesePlayersNames.push(players[i].name);
    thesePlayersHealth.push(players[i].name + ': ' + players[i].currentHP + '/' + players[i].maxHP);
  }
  for(var i = 0; i < enemies.length; ++i){
    enemies[i]['id'] = i;
  }
  battleData = {
    UI:{
      top: {
        left: thesePlayersHealth.join('\n'),
        right: ''
      },
      bottom: [
        thesePlayersNames,
        ['Attack','Magic','Defense'],
        [],
        [],
      ],
    },
    players: players,
    enemies: enemies,
    selStage: 1,
    selSlot: 1,
    currentSel: [],
    stack: {}
  };
}

function battleSelect(prevKeyState){

  // Cursor up
  if(keys.up && !prevKeyState.up){
    battleData.selSlot = ((battleData.selSlot - 1) < 0) ? battleData.selSlot : battleData.selSlot - 1;
  }

  // Cursor down
  else if(keys.down && !prevKeyState.down){
    battleData.selSlot = ((battleData.selSlot + 1) >= battleData.UI.bottom[battleData.selStage].length) ? battleData.selSlot : battleData.selSlot + 1;
  }

  // Next selection
  else if(keys.enter && !prevKeyState.enter && battleData.selStage <= 4){
    battleData.selStage = battleData.selStage + 1;

    var options = [];

    if(battleData.selStage == 2){

      switch(battleData.selSlot) {

        case 0:
          options = Object.keys(battleAttackMenu);
          break;

        case 1:
          options = ['Fire', 'Heal'];
          break;

        case 2:
          options = Object.keys(battleDefenseMenu);
          break;
      };
    } else if(battleData.selStage == 3){
      for(var i = 0; i < battleData.enemies.length; ++i){
        options.push(battleData.enemies[i].name);
      }
    }

    battleData.UI.bottom[battleData.selStage] = options;
    battleTurnStack(battleData.selStage, battleData.selSlot, true);
    battleData.selSlot = 0;
  }

  // Go back a selection
  else if(keys.shift && !prevKeyState.shift && battleData.selStage - 1 >= 1){
    battleData.UI.bottom[battleData.selStage] = [];
    battleData.selStage = battleData.selStage - 1;
    battleTurnStack(battleData.selStage, battleData.selSlot, false);
    battleData.selSlot = 0;
  }
}

function battleTurnStack(stage, slot, advance){

  var currentPlayer = Object.keys(battleData.stack).length;

  if(advance){
    if(battleData.currentSel.length < 2){
      battleData.currentSel.push(slot);
    }
    else{
      battleData.currentSel.push(slot);

      battleData.stack[battleData.players[currentPlayer].name] = battleData.currentSel;
      battleData.currentSel = [];

      if(Object.keys(battleData.stack).length >= battleData.players.length){
        initiateTurn();
      }
      else {
        battleData.UI.bottom[2] = [];
        battleData.UI.bottom[3] = [];
        battleData.selStage = 1;
        battleData.selSlot = 1;
      }
    }
  }
  else{
    battleData.currentSel.pop();
  }
}

function initiateTurn(){
  
  var aiAtkOptions = Object.keys(battleAttackMenu);

  var battlers = battleData.players.concat(battleData.enemies);
  battlers.sort(function(a,b){
    return a.agility - b.agility;
  }).reverse();

  var turnStack = [];
  for(var i = 0; i < battlers.length; ++i){

    if(isBattlerPlayer(battlers[i])){
      turnStack.push(
        {
          name: battlers[i],
          action: [
            battleData.stack[battlers[i].name][0],
            battleData.stack[battlers[i].name][1]
          ],
          target: battleData.stack[battlers[i].name][2],
          type: 'players'
        }
      );
    }
    else {
      turnStack.push(
        {
          name: battlers[i],
          action: [
            0,
            Math.floor(Math.random() * aiAtkOptions.length)
          ],
          target: Math.floor(Math.random() * battleData.players.length),
          type: 'enemies'
        }
      );
    }

  }
  battleData.stack = turnStack;
  executeTurn();
}

function executeTurn(){

  console.log(battleData.stack);

  for(var i = 0; i < battleData.stack.length; ++i){

    switch(battleData.stack[i].action[0]) {

      case 0:
        executeAttack(i);
        break;

      case 1:
        // Magic stuff
        break;

      case 2:
        // Defense stuff
        break;
    };
  }

  battleDataInit(battleData.players, battleData.enemies);
}

function executeAttack(stackIndex){

  var current = battleData.stack[stackIndex];
  var attacks = Object.keys(battleAttackMenu);

  dealPhysicalDamage(
    current.type, 
    current.name.id, 
    (current.type == 'players') ? 'enemies' : 'players',
    current.target,
    battleAttackMenu[attacks[current.action[1]]]
  );
}

function findCharacterStat(name, stat) {
  var battlers = battleData.players.concat(battleData.enemies);
  for (var i = 0; i < battlers.length; i++) {
    if(battlers[i].name == name){
      return battlers[i][stat];
    }
  }
  return false;
}

function checkDeath(){

}

// attackerType: string, battleData key, either players or enemies
// attackerID: int, array index of battleData.{{attackerType}}
// targetType: string, battleData key, either players or enemies
// targetID: int, array index of battleData.{{targetType}}
// stat: string, object key for atk stat

function dealPhysicalDamage(attackerType, attackerID, targetType, targetID, stat){
  var atkStat = battleData[attackerType][attackerID][stat];
  var defenseStat = 0;
  var weapon = 0;
  var dmgFormulaRaw = ((atkStat * 0.5) + (weapon)) - (defenseStat);
  var dmgFormula = (dmgFormulaRaw <= 0) ? 1 : dmgFormulaRaw;

  battleData[targetType][targetID].currentHP = (
    (battleData[targetType][targetID].currentHP - dmgFormula) < 0
  ) ? 0 : battleData[targetType][targetID].currentHP - dmgFormula;
}

function isBattlerPlayer(battler){
  for(var i = 0; i < battleData.players.length; ++i){
    if(battler.name == battleData.players[i].name){
      return true;
    }
  }
  return false;
}

function animateMove(id, up, down, left, right){

  var prevTile = entities[id].tile;

  if(up){

    var topLeft = {x: entities[id].xy.x, y: entities[id].xy.y};
    var topRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y};

    checkBounding(id, topLeft, topRight, 0, -1, 'speedY', [2,3]);
  }
  else if(down){

    var bottomLeft = {x: entities[id].xy.x, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var bottomRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y + entities[id].sprite.width - 1};

    checkBounding(id, bottomLeft, bottomRight, 0, 1, 'speedY', [0,1]);
  }
  else{
    entities[id].speedY = 0;
  }

  if(left){

    var bottomLeft = {x: entities[id].xy.x, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var topLeft = {x: entities[id].xy.x, y: entities[id].xy.y};

    checkBounding(id, bottomLeft, topLeft, -1, 0, 'speedX', [4,5]);
  }
  else if(right){

    var bottomRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var topRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y};

    checkBounding(id, bottomRight, topRight, 1, 0, 'speedX', [6,7]);
  }
  else{
    entities[id].speedX = 0;
  }

  entities[id].tile = coordsToTile(entities[id].xy.x + (entities[id].sprite.width / 2), entities[id].xy.y + (tileSize / 2));
  map[entities[id].tile].render.object = id;
  if(entities[id].logic.state){
    map[entities[id].tile].state = entities[id].logic.state;
  }

  if(prevTile !== entities[id].tile){
    map[prevTile].render.object = false;
    map[prevTile].state = {passable: true};
  }
}

function spriteLoop(id, frames, rate){
  var i = 0;
  var thisAnim = setInterval(function(){

    entities[id].frame = i;
    i++;
    if(i >= frames.length){
      i = 0;
    }
  }, rate);
}

function setPath(id, path, originPoint, originTime, step){

  if (path[step] != 'wait' && path[step] != 'stop') {

    var destX = Math.abs(entities[id].xy.x - originPoint.x);
    var destY = Math.abs(entities[id].xy.y - originPoint.y);

    if (destX >= tileSize || destY >= tileSize) {

      step = step + 1;
      if(step >= path.length){
        step = 0;
      }

      originPoint = JSON.parse(JSON.stringify(entities[id].xy));
      clearInterval(entities[id].interval);
      entities[id].interval = 0;
    }
  }
  else{
    originTime = originTime + 1;
    if(originTime == 60){
      originTime = 0;
      step = step + 1;
      if(step >= path.length){
        step = 0;
      }
      clearInterval(entities[id].interval);
      entities[id].interval = 0;
    }
  }

  switch(path[step]) {

    case 'up':
      entities[id].dir.up = true;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break;

    case 'down':
      entities[id].dir.up = false;
      entities[id].dir.down = true;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break;

    case 'left':
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = true;
      entities[id].dir.right = false;
      break;

    case 'right':
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = true;
      break;

    case 'wait':
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break

    case 'stop':
      return;
      break
  };

  window.requestAnimationFrame(function(){
    setPath(id, path, originPoint, originTime, step);
  });
}

function walkLoop(id, frames){

  var i = 1;

  if(entities[id].interval == 0){

    entities[id].frame = frames[0];
    entities[id].interval = setInterval(function(){
      entities[id].frame = frames[i];
      i++;
      if(i >= frames.length){
        i = 0;
      }
    }, 200);
  }
}

function drawGame(map){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var tileObjData = [];

  for(var y = 0; y < mapH; ++y){
    for(var x = 0; x < mapW; ++x){

      var currentPos = ((y*mapW)+x);

      ctx.fillStyle = map[currentPos].render.base;

      var thisObj = map[currentPos].render.object;

      if(thisObj !== false){

        ctx.fillStyle = '#00F';

        thisObj = entities[thisObj];
        var originX = (x*tileSize);
        var originY = ((y*tileSize) + tileSize) - thisObj.sprite.height;
        if(thisObj.type == 'mobile'){
          originX = thisObj.xy.x;
          originY = thisObj.xy.y;
        }
        tileObjData.push(
          {
            id: thisObj.id,
            type: thisObj.type,
            originX: originX, 
            originY: originY, 
            width: thisObj.sprite.width, 
            height: thisObj.sprite.height,
            render: thisObj.sprite.render[thisObj.frame]
          }
        );
      }

      if(currentPos == entities[0].tile){
        ctx.fillStyle = '#FF0';
      }

      ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);

    }
  }

  for(var i = 0; i < tileObjData.length; ++i){
    if(tileObjData[i].type == 'mobile'){
      drawEntity(tileObjData[i].id, tileObjData[i].originX, tileObjData[i].originY, tileObjData[i].width, tileObjData[i].height, tileObjData[i].render);
    }
    else{
      drawSprite(tileObjData[i].originX, tileObjData[i].originY, tileObjData[i].width, tileObjData[i].height, tileObjData[i].render);
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

function drawEntity(id, posX, posY, sizeX, sizeY, thisSprite){

  var offX = posX + entities[id].speedX;
  var offY = posY + entities[id].speedY;

  drawSprite(offX, offY + sizeX - sizeY, sizeX, sizeY, thisSprite);

  entities[id].xy.x = offX;
  entities[id].xy.y = offY;
}

function checkBounding(id, cornerA, cornerB, xPolarity, yPolarity, axis, loop){

  var tileA = map[coordsToTile(cornerA.x + xPolarity, cornerA.y + yPolarity)];
  var tileB = map[coordsToTile(cornerB.x + xPolarity, cornerB.y + yPolarity)];

  if(
    !tileA.state.passable || 
    !tileB.state.passable
  ){
    entities[id][axis] = 0;
  }

  else if(
    !id && (
      tileA.state.battle || 
      tileB.state.battle
    )
  ){
    entities[id][axis] = 0;

    var players = stats[0];
    var enemies = stats[tileA.render.object] ? stats[tileA.render.object] : stats[tileB.render.object];

    battleIntro(0);
    battleDataInit(players, enemies);
  }

  else{
    entities[id][axis] = xPolarity ? xPolarity : yPolarity;
    walkLoop(id, loop);
  }
}

function tileToCoords(tile){

  var yIndex = Math.floor(tile / mapW);
  var xIndex = tile - (yIndex * mapW);

  var y = yIndex * tileSize;
  var x = xIndex * tileSize;
  return {x:x, y:y};
}

function coordsToTile(x, y){

  var tile = ((Math.floor(y / tileSize)) * mapW) + (Math.floor(x / tileSize));
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

    // Edges

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
            object: false,
            sprite: false
          },
          state: {
            passable: false
          }
        },
      );

    }
    else{

      // Grass

      map.push(
        {
          id: i,
          render: {
            base: '#0C3',
            object: false,
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