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
  right: false
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
      hp: 100,
      off: 10,
      def: 5
    }
  ],
  3: [
    {
      name: 'Imp',
      hp: 15,
      off: 10,
      def: 5
    },
    {
      name: 'Imp',
      hp: 15,
      off: 10,
      def: 5
    }
  ]
}

var map = [];

var img;

var times = [];
var fps;

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










function animateMove(id, up, down, left, right){

  var prevTile = entities[id].tile;

  if(up){

    var topLeft = {x: entities[id].xy.x, y: entities[id].xy.y};
    var topRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y};

    checkBounding(id, topLeft, topRight, -1, 'speedY', [2,3]);
  }
  else if(down){

    var bottomLeft = {x: entities[id].xy.x, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var bottomRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y + entities[id].sprite.width - 1};

    checkBounding(id, bottomLeft, bottomRight, 1, 'speedY', [0,1]);
  }
  else{
    entities[id].speedY = 0;
  }

  if(left){

    var bottomLeft = {x: entities[id].xy.x, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var topLeft = {x: entities[id].xy.x, y: entities[id].xy.y};

    checkBounding(id, bottomLeft, topLeft, -1, 'speedX', [4,5]);
  }
  else if(right){

    var bottomRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y + entities[id].sprite.width - 1};
    var topRight = {x: entities[id].xy.x + entities[id].sprite.width - 1, y: entities[id].xy.y};

    checkBounding(id, bottomRight, topRight, 1, 'speedX', [6,7]);
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

function drawBattle(players, enemies){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  var topText = enemies[0].name + '\n';
      topText += 'HP: ' + enemies[0].hp + ', ATK: ' + enemies[0].off + ', DEF: ' + enemies[0].def;

  var bottomText = players[0].name + '\n';
      bottomText += 'HP: ' + players[0].hp + ', ATK: ' + players[0].off + ', DEF: ' + players[0].def;

  drawTopDisplay(topText);
  drawBottomDisplay(bottomText);
  drawPlayerBattle();
  drawEnemiesBattle();
}

function drawBottomDisplay(text){

  var displayBorders = 1;
  var displayHeight = 32;
  var displayPadding = 2;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, canvas.height - displayHeight, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, canvas.height - displayHeight + displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));
  canvasWrite(displayBorders + displayPadding, canvas.height - displayHeight + displayBorders + displayPadding, 10, text);
}

function drawTopDisplay(text){

  var displayBorders = 1;
  var displayHeight = 32;
  var displayPadding = 2;

  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 0, canvas.width, displayHeight);
  ctx.fillStyle = '#225';
  ctx.fillRect(displayBorders, displayBorders, canvas.width - (displayBorders * 2), displayHeight - (displayBorders * 2));

  canvasWrite(displayBorders + displayPadding, displayBorders + displayPadding, 10, text);
}

function drawPlayerBattle(){
  var playerWidth = 20;
  ctx.fillStyle = '#FFF';
  ctx.fillRect(-(playerWidth) + 48, canvas.height / 2, playerWidth, 30);
}

function drawEnemiesBattle(){
  var enemyWidth = 20;
  ctx.fillStyle = '#000';
  ctx.fillRect(canvas.width - 48, canvas.height / 2, enemyWidth, 30);
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

  img = document.createElement('img');
  img.src = '/rpg-engine/assets/images/bg.png';

  window.requestAnimationFrame(function(){
    overworldLoop();
  });

  var fpsMonitor = setInterval(function(){
    document.getElementById('message').innerHTML = fps;
  }, 700);
};

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

function battleLoop(players, enemies){

  if (screen == 'battle') {
    drawBattle(players, enemies);

    window.requestAnimationFrame(function(){

      var now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      battleLoop(players, enemies);
    });
  }
  else{
    battleEnd(0);
  }
}

function checkBounding(id, cornerA, cornerB, polarity, axis, loop){

  var tileA = map[coordsToTile(cornerA.x, cornerA.y + polarity)];
  var tileB = map[coordsToTile(cornerB.x, cornerB.y + polarity)];

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

    battleIntro(0, players, enemies);
  }

  else{
    entities[id][axis] = polarity;
    walkLoop(id, loop);
  }
}

function canvasWrite(posX, posY, lineHeight, text){

  ctx.font = "9px Courier";
  ctx.fillStyle = "white";
  var lines = text.split('\n');

  for (var i = 0; i<lines.length; i++){
    ctx.fillText(lines[i], posX, posY + (i*lineHeight) + lineHeight);
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