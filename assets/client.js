// Black
const k1 = "#BBBBBB";
const k2 = "#7C7C7C";
const k3 = "#000000";

// Brown
const b1 = "#F0A357";
const b2 = "#D5642E";
const b3 = "#7D2010";

// Green
const g1 = "#C6F452";
const g2 = "#7CD466";
const g3 = "#49A42F";

// Yellow
const y1 = "#EFB740";
const y2 = "#A57D28";
const y3 = "#4C310B";

// Blue
const l1 = "#72F8FA";
const l2 = "#61BBF6";
const l3 = "#2E7CF0";

// Red
const r1 = "#F85998";
const r2 = "#D12E59";
const r3 = "#9A1E26";

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
let canvas = null;

// Canvas Draw
let ctx = null;

// Static Globals
const tileSize = 16,
  mapW = 10,
  mapH = 10;

let camera = {
  x: 0,
  y: 0,
  width: 10,
  height: 10,
};

let keys = {
  up: false,
  down: false,
  left: false,
  right: false,
  enter: false,
  shift: false,
};

let screen = "overworld";

let entities = [
  {
    id: 0,
    type: "mobile",
    tile: 22,
    xy: tileToCoords(22),
    speedX: 0,
    speedY: 0,
    sprite: playerSprite,
    frame: 0,
    interval: 0,
    logic: {
      func: false,
      data: false,
      state: { passable: true, player: true },
    },
    dir: false,
  },
  {
    id: 1,
    type: "static",
    tile: 44,
    xy: tileToCoords(44),
    speedX: 0,
    speedY: 0,
    sprite: tree,
    frame: 0,
    interval: 0,
    logic: {
      func: "spriteLoop",
      data: [1, tree.render, 1000],
      state: { passable: false },
    },
    dir: false,
  },
  {
    id: 2,
    type: "mobile",
    tile: 28,
    xy: tileToCoords(28),
    speedX: 0,
    speedY: 0,
    sprite: enemy,
    frame: 0,
    interval: 0,
    logic: {
      func: "setPath",
      data: [
        2,
        [
          "wait",
          "down",
          "wait",
          "down",
          "wait",
          "left",
          "wait",
          "left",
          "wait",
          "up",
          "wait",
          "up",
          "wait",
          "right",
          "wait",
          "right",
        ],
        tileToCoords(28),
        0,
        0,
      ],
      state: { passable: true, battle: true },
    },
    dir: { up: false, down: false, left: false, right: false },
  },
  {
    id: 3,
    type: "static",
    tile: 37,
    xy: tileToCoords(37),
    speedX: 0,
    speedY: 0,
    sprite: tree,
    frame: 0,
    interval: 0,
    logic: {
      func: "spriteLoop",
      data: [3, tree.render, 1500],
      state: { passable: false },
    },
    dir: false,
  },
  {
    id: 4,
    type: "mobile",
    tile: 52,
    xy: tileToCoords(52),
    speedX: 0,
    speedY: 0,
    sprite: enemy,
    frame: 0,
    interval: 0,
    logic: {
      func: "setPath",
      data: [4, ["left", "wait", "right", "wait"], tileToCoords(28), 0, 0],
      state: { passable: true, battle: true },
    },
    dir: { up: false, down: false, left: false, right: false },
  },
];

let stats = {
  0: [
    {
      id: 0,
      name: "Jadle",
      stance: 0,
      maxHP: 30,
      currentHP: 30,
      strength: 10,
      agility: 10,
      intuition: 10,
      focus: 10,
      experience: {
        level: 1,
        points: 0,
        bonuses: {
          strength: 0,
          agility: 0,
          intuition: 0,
          focus: 0,
        },
      },
    },
    {
      id: 1,
      name: "Idle",
      stance: 0,
      maxHP: 30,
      currentHP: 30,
      strength: 10,
      agility: 10,
      intuition: 10,
      focus: 10,
      experience: {
        level: 1,
        points: 0,
        bonuses: {
          strength: 0,
          agility: 0,
          intuition: 0,
          focus: 0,
        },
      },
    },
  ],
  2: [
    {
      id: 0,
      name: "Imp 1",
      stance: 0,
      maxHP: 5,
      currentHP: 5,
      strength: 7,
      agility: 8,
      intuition: 3,
      focus: 3,
    },
    {
      id: 1,
      name: "Imp 2",
      stance: 0,
      maxHP: 5,
      currentHP: 5,
      strength: 7,
      agility: 7,
      intuition: 3,
      focus: 3,
    },
  ],
  4: [
    {
      id: 0,
      name: "Imp",
      stance: 0,
      maxHP: 10,
      currentHP: 10,
      strength: 7,
      agility: 12,
      intuition: 3,
      focus: 3,
    },
  ],
};

const baseXP = 500; // 500
let checkXP = false;

let map = [];

let img;

let times = [];
let fps;

let battleData = {};
const battleAttackMenu = {
  Aggressive: "strength",
  Fancy: "agility",
  Precise: "intuition",
};
const battleDefenseMenu = {
  Defend: "self",
  Escape: "allies",
};

let menuData = {};

const UISpacing = {
  displayBorders: 1,
  displayHeight: 32,
  displayPadding: 3,
};
const fontSize = 9;
const fontCharWidth = 6;

window.onload = () => {
  testMap();

  canvas = document.getElementById("save");
  ctx = canvas.getContext("2d");

  window.onkeydown = (e) => {
    switch (e.which) {
      case 87: // W
        keysState("up", true);
        break;

      case 65: // A
        keysState("left", true);
        break;

      case 83: // S
        keysState("down", true);
        break;

      case 68: // D
        keysState("right", true);
        break;

      case 13: // Enter
        keysState("enter", true);
        break;

      case 16: // Shift
        keysState("shift", true);
        break;
    }
  };

  window.onkeyup = (e) => {
    switch (e.which) {
      case 87: // W
        keysState("up", false);
        break;

      case 65: // A
        keysState("left", false);
        break;

      case 83: // S
        keysState("down", false);
        break;

      case 68: // D
        keysState("right", false);
        break;

      case 13: // Enter
        keysState("enter", false);
        break;

      case 16: // Shift
        keysState("shift", false);
        break;
    }
  };

  entityDataToMap();

  img = document.createElement("img");
  img.src = "/rpg-engine/assets/images/bg.png";

  window.requestAnimationFrame(() => {
    overworldLoop();
  });

  const fpsMonitor = setInterval(() => {
    document.getElementById("message").innerHTML = fps;
  }, 700);
};

function entityDataToMap() {
  for (let i = 0; i < entities.length; ++i) {
    if (entities[i].type) {
      map[entities[i].tile].render.object = entities[i].id;

      if (entities[i].logic) {
        if (entities[i].logic.func) {
          window[entities[i].logic.func].apply(null, entities[i].logic.data);
        }

        if (entities[i].logic.state) {
          map[entities[i].tile].state = entities[i].logic.state;
        }
      }
    } else {
      map[entities[i].tile].render.object = false;
      map[entities[i].tile].state = { passable: true };
    }
  }
}

function keysState(key, down) {
  if (down) {
    keys[key] = true;
  } else {
    keys[key] = false;

    if (screen == "overworld") {
      clearInterval(entities[0].interval);
      entities[0].interval = 0;
    }
  }
}

function overworldLoop() {
  if (screen == "overworld") {
    drawGame(map);

    animateMove(0, keys.up, keys.down, keys.left, keys.right);

    for (let i = 0; i < entities.length; ++i) {
      if (i && entities[i].type == "mobile") {
        animateMove(
          i,
          entities[i].dir.up,
          entities[i].dir.down,
          entities[i].dir.left,
          entities[i].dir.right
        );
      }
    }

    if (checkXP) {
      xpCheck();
      checkXP = false;
    }

    window.requestAnimationFrame(() => {
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      overworldLoop();
    });
  }
}

function battleLoop(prevKeyState) {
  if (screen == "battle") {
    drawBattle();

    battleSelect(prevKeyState);

    const thisPrevKeyState = JSON.parse(JSON.stringify(keys));

    window.requestAnimationFrame(() => {
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      battleLoop(thisPrevKeyState);
    });
  } else {
    battleSelect(prevKeyState);
    const thisPrevKeyState = JSON.parse(JSON.stringify(keys));

    if (battleData.players.length) {
      window.requestAnimationFrame(() => {
        battleLoop(thisPrevKeyState);
      });
    }
  }
}

function menuLoop(prevKeyState) {
  if (screen == "menu") {
    drawMenu();

    menuSelect(prevKeyState);

    const thisPrevKeyState = JSON.parse(JSON.stringify(keys));

    window.requestAnimationFrame(() => {
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      menuLoop(thisPrevKeyState);
    });
  }
}

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

function battleIntro (step) {
  screen = "battle";

  step = step + 4;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, step);

  if (step >= canvas.height) {
    battleBg(60);
    return;
  } else {
    window.requestAnimationFrame(() => {
      battleIntro(step);
    });
  }
};

function battleBg (step) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step - 2;

  ctx.globalAlpha = 1;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = (step / 60).toFixed(2);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (step <= 0) {
    ctx.globalAlpha = 1;
    battleSet(0);
    return;
  } else {
    window.requestAnimationFrame(() => {
      battleBg(step);
    });
  }
};

function battleSet (step) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  step = step + 2;

  // Draw BG
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Draw top display
  ctx.fillStyle = "#FFF";
  ctx.fillRect(
    0,
    -UISpacing.displayHeight + step,
    canvas.width,
    UISpacing.displayHeight
  );
  ctx.fillStyle = "#225";
  ctx.fillRect(
    UISpacing.displayBorders,
    -UISpacing.displayHeight + step + UISpacing.displayBorders,
    canvas.width - UISpacing.displayBorders * 2,
    UISpacing.displayHeight - UISpacing.displayBorders * 2
  );

  // Draw bottom display
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, canvas.height - step, canvas.width, UISpacing.displayHeight);
  ctx.fillStyle = "#225";
  ctx.fillRect(
    UISpacing.displayBorders,
    canvas.height - step + UISpacing.displayBorders,
    canvas.width - UISpacing.displayBorders * 2,
    UISpacing.displayHeight - UISpacing.displayBorders * 2
  );

  // Draw player
  const playerWidth = 20;
  ctx.fillStyle = "#FFF";
  for (let i = 0; i < battleData.players.length; ++i) {
    ctx.fillRect(
      -playerWidth + step * 1.5,
      (canvas.height / (battleData.players.length + 1)) * (i + 1),
      playerWidth,
      30
    );
  }

  // Draw enemies
  const enemyWidth = 20;
  ctx.fillStyle = "#000";
  for (let i = 0; i < battleData.enemies.length; ++i) {
    ctx.fillRect(
      canvas.width - step * 1.5,
      (canvas.height / (battleData.enemies.length + 1)) * (i + 1),
      enemyWidth,
      30
    );
  }

  if (step >= UISpacing.displayHeight) {
    const keyState = JSON.parse(JSON.stringify(keys));
    battleLoop(keyState);
    return;
  } else {
    window.requestAnimationFrame(() => {
      battleSet(step);
    });
  }
};

function battleEnd (step) {
  screen = "overworld"; // start listening for OK button confirmation
  centeredBoxAnimate(step, 40, "battleEndText");
};

function battleEndText () {
  const battleXP = xpEarned();
  const displaySize = 40;

  centeredBox(displaySize);

  canvasWrite(
    canvas.width / 2 -
      displaySize +
      UISpacing.displayBorders +
      UISpacing.displayPadding,
    canvas.height / 2 -
      displaySize +
      UISpacing.displayBorders +
      UISpacing.displayPadding,
    `You win!\nRewards\nXP:    ${battleXP}`
  );

  const buttonWidth = 20;
  const positionBottomCenter =
    canvas.height / 2 +
    displaySize -
    fontSize -
    UISpacing.displayBorders -
    UISpacing.displayPadding;
  ctx.fillStyle = "#F00";
  ctx.fillRect(
    canvas.width / 2 - buttonWidth / 2,
    positionBottomCenter,
    buttonWidth,
    fontSize
  );

  canvasWrite(canvas.width / 2 - 6, positionBottomCenter, "OK");
};

function drawBattle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBattleBG();
  drawTopDisplay();
  drawBottomDisplay();
  drawPlayerBattle();
  drawEnemiesBattle();
  drawBattleCursor();
}

function drawBattleBG() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function drawTopDisplay() {
  // [Jadle 100/100] -> [ATK or target desc]
  const charText = battleData.UI.top.left;
  const descriptionText = battleData.UI.top.right;

  // Borders
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, canvas.width, UISpacing.displayHeight);

  // Box
  ctx.fillStyle = "#225";
  ctx.fillRect(
    UISpacing.displayBorders,
    UISpacing.displayBorders,
    canvas.width - UISpacing.displayBorders * 2,
    UISpacing.displayHeight - UISpacing.displayBorders * 2
  );

  // Left Text
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding,
    UISpacing.displayBorders,
    charText
  );

  // Right Text
  canvasWrite(
    UISpacing.displayBorders + UISpacing.displayPadding + canvas.width / 3,
    UISpacing.displayBorders,
    descriptionText
  );
}

function drawBottomDisplay() {
  const currentPlayer = getCurrentPlayer();

  const drawBottomDisplayTextData = (data) => {
    let returnData = "";
    if (data.length) {
      for (let i = 0; i < data.length; ++i) {
        returnData += data.text + "\n";
      }
    }
    return returnData;
  };

  const playersText = battleData.UI.bottom[0];
  const actionText = battleData.UI.bottom[1];
  const optionsText = battleData.UI.bottom[2];
  const targetText = battleData.UI.bottom[3];

  // Borders
  ctx.fillStyle = "#FFF";
  ctx.fillRect(
    0,
    canvas.height - UISpacing.displayHeight,
    canvas.width,
    UISpacing.displayHeight
  );

  // Box
  ctx.fillStyle = "#225";
  ctx.fillRect(
    UISpacing.displayBorders,
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders,
    canvas.width - UISpacing.displayBorders * 2,
    UISpacing.displayHeight - UISpacing.displayBorders * 2
  );

  // Highlight current player selection
  ctx.fillStyle = "#F00";
  ctx.fillRect(
    UISpacing.displayBorders + UISpacing.displayPadding,
    canvas.height -
      UISpacing.displayHeight +
      UISpacing.displayBorders +
      currentPlayer * fontSize,
    UISpacing.displayBorders +
      UISpacing.displayPadding +
      (canvas.width / 4 - 10),
    fontSize
  );

  // Player names
  canvasWriteData(
    UISpacing.displayBorders + UISpacing.displayPadding,
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders,
    playersText
  );

  // Player actions
  canvasWriteData(
    UISpacing.displayBorders +
      UISpacing.displayPadding +
      (canvas.width / 4) * 1,
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders,
    actionText
  );

  // Contextual options
  canvasWriteData(
    UISpacing.displayBorders +
      UISpacing.displayPadding +
      (canvas.width / 4) * 2,
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders,
    optionsText
  );

  // Contextual targets
  canvasWriteData(
    UISpacing.displayBorders +
      UISpacing.displayPadding +
      (canvas.width / 4) * 3,
    canvas.height - UISpacing.displayHeight + UISpacing.displayBorders,
    targetText
  );
}

function drawPlayerBattle() {
  const playerWidth = 20;
  ctx.fillStyle = "#FFF";

  for (let i = 0; i < battleData.players.length; ++i) {
    ctx.fillRect(
      -playerWidth + 48,
      (canvas.height / (battleData.players.length + 1)) * (i + 1),
      playerWidth,
      30
    );
  }
}

function drawEnemiesBattle() {
  const enemyWidth = 20;
  ctx.fillStyle = "#000";

  for (let i = 0; i < battleData.enemies.length; ++i) {
    if (battleData.enemies[i].currentHP) {
      ctx.fillRect(
        canvas.width - 48,
        (canvas.height / (battleData.enemies.length + 1)) * (i + 1),
        enemyWidth,
        30
      );
    }
  }
}

function drawBattleCursor() {
  ctx.fillStyle = "#F00";

  const thisX =
    UISpacing.displayBorders + (canvas.width / 4) * battleData.selStage;
  const thisY =
    canvas.height -
    UISpacing.displayHeight +
    UISpacing.displayBorders +
    fontSize * battleData.selSlot +
    fontSize / 2;

  ctx.fillRect(thisX, thisY, 2, 2);
}

function battleDataInit(players, enemies, enemiesID) {
  const thesePlayersNames = [];
  const thesePlayersHealth = [];
  let currentStack = {};
  for (let i = 0; i < players.length; ++i) {
    if (!players[i].currentHP) {
      currentStack[players[i].name] = false;
      thesePlayersNames.push({
        text: players[i].name,
        disabled: true,
        id: players[i].id,
      });
    } else {
      thesePlayersNames.push({
        text: players[i].name,
        disabled: false,
        id: players[i].id,
      });
    }
    thesePlayersHealth.push(
      `${players[i].name}: ${players[i].currentHP}/${players[i].maxHP}`
    );
  }

  const theseEnemiesHealth = [];
  let aliveEnemies = enemies.length;
  for (let i = 0; i < enemies.length; ++i) {
    theseEnemiesHealth.push(
      `${enemies[i].name}: ${enemies[i].currentHP}/${enemies[i].maxHP}`
    );
    if (!enemies[i].currentHP) {
      aliveEnemies--;
    }
  }

  battleData = {
    UI: {
      top: {
        left: thesePlayersHealth.join("\n"),
        right: theseEnemiesHealth.join("\n"),
      },
      bottom: [
        thesePlayersNames,
        [
          { text: "Attack", disabled: false, id: 0 },
          { text: "Magic", disabled: false, id: 1 },
          { text: "Defense", disabled: false, id: 2 },
        ],
        [],
        [],
      ],
    },
    players: players,
    enemies: enemies,
    enemiesID: enemiesID,
    selStage: 1,
    selSlot: 0,
    currentSel: [],
    stack: currentStack,
  };

  if (!aliveEnemies) {
    setTimeout(function () {
      battleEnd(0);
    }, 500);
  }
}

function battleSelect(prevKeyState) {
  if (screen == "battle") {
    // Cursor up
    if (keys.up && !prevKeyState.up) {
      const prevSlot =
        battleData.selSlot - 1 < 0
          ? battleData.selSlot
          : battleData.selSlot - 1;
      for (let i = prevSlot; i >= 0; i--) {
        if (!battleData.UI.bottom[battleData.selStage][i].disabled) {
          battleData.selSlot = i;
          break;
        }
      }
    }

    // Cursor down
    else if (keys.down && !prevKeyState.down) {
      const nextSlot =
        battleData.selSlot + 1 >=
        battleData.UI.bottom[battleData.selStage].length
          ? battleData.selSlot
          : battleData.selSlot + 1;
      for (
        let i = nextSlot;
        i < battleData.UI.bottom[battleData.selStage].length;
        i++
      ) {
        if (!battleData.UI.bottom[battleData.selStage][i].disabled) {
          battleData.selSlot = i;
          break;
        }
      }
    }

    // Next selection
    else if (keys.enter && !prevKeyState.enter && battleData.selStage <= 4) {
      battleData.selStage = battleData.selStage + 1;

      let options = [];

      if (battleData.selStage == 2) {
        switch (battleData.selSlot) {
          case 0:
            const attackNames = Object.keys(battleAttackMenu);
            for (let i = 0; i < attackNames.length; ++i) {
              options.push({ text: attackNames[i], disabled: false, id: i });
            }
            break;

          case 1:
            options = [
              { text: "Fire", disabled: false, id: 0 },
              { text: "Heal", disabled: false, id: 1 },
            ];
            break;

          case 2:
            const defenseNames = Object.keys(battleDefenseMenu);
            for (let i = 0; i < defenseNames.length; ++i) {
              options.push({ text: defenseNames[i], disabled: false, id: i });
            }
            break;
        }
      } else if (battleData.selStage == 3) {
        for (let i = 0; i < battleData.enemies.length; ++i) {
          if (battleData.enemies[i].currentHP) {
            options.push({
              text: battleData.enemies[i].name,
              disabled: false,
              id: battleData.enemies[i].id,
            });
          } else {
            options.push({
              text: battleData.enemies[i].name,
              disabled: true,
              id: battleData.enemies[i].id,
            });
          }
        }
      }

      battleData.UI.bottom[battleData.selStage] = options;
      battleTurnStack(battleData.selStage, battleData.selSlot, true);
      battleData.selSlot = getFirstAvailableSlot();
    }

    // Go back a selection
    else if (
      keys.shift &&
      !prevKeyState.shift &&
      battleData.selStage - 1 >= 1
    ) {
      battleData.UI.bottom[battleData.selStage] = [];
      battleData.selStage = battleData.selStage - 1;
      battleTurnStack(battleData.selStage, battleData.selSlot, false);
      battleData.selSlot = getFirstAvailableSlot();
    }
  }

  // End of battle button state
  else {
    if (keys.enter && !prevKeyState.enter) {
      stopBattle(true);
    }
  }
}

function getFirstAvailableSlot() {
  for (let i = 0; i < battleData.UI.bottom[battleData.selStage].length; i++) {
    if (!battleData.UI.bottom[battleData.selStage][i].disabled) {
      return i;
    }
  }
}

function battleTurnStack(stage, slot, advance) {
  const currentPlayer = getCurrentPlayer();

  if (advance) {
    if (battleData.currentSel.length < 2) {
      battleData.currentSel.push(slot);
    } else {
      battleData.currentSel.push(slot);

      battleData.stack[battleData.players[currentPlayer].name] =
        battleData.currentSel;
      battleData.currentSel = [];

      if (Object.keys(battleData.stack).length >= battleData.players.length) {
        initiateTurn();
      } else {
        battleData.UI.bottom[2] = [];
        battleData.UI.bottom[3] = [];
        battleData.selStage = 1;
        battleData.selSlot = getFirstAvailableSlot();
      }
    }
  } else {
    battleData.currentSel.pop();
  }
}

function initiateTurn() {
  const turnStack = [];
  const playerTargets = [];

  // set up unordered player actions
  for (let i = 0; i < battleData.players.length; ++i) {
    // Check if the player can take action (not 0 currentHP)
    if (battleData.stack[battleData.players[i].name]) {
      turnStack.push({
        id: battleData.players[i].id,
        action: [
          battleData.stack[battleData.players[i].name][0],
          battleData.stack[battleData.players[i].name][1],
        ],
        target: battleData.stack[battleData.players[i].name][2],
        type: "players",
        agility: battleData.players[i].agility,
      });
      playerTargets.push(battleData.players[i].id);
    }
  }

  const aiAtkOptions = Object.keys(battleAttackMenu);
  // set up unordered enemy actions
  for (let i = 0; i < battleData.enemies.length; ++i) {
    // Check if the enemy has currentHP
    if (battleData.enemies[i].currentHP) {
      turnStack.push({
        id: battleData.enemies[i].id,
        action: [0, Math.floor(Math.random() * aiAtkOptions.length)],
        target: playerTargets[Math.floor(Math.random() * playerTargets.length)],
        type: "enemies",
        agility: battleData.enemies[i].agility,
      });
    }
  }

  // Order turn stack based on agility stat
  turnStack
    .sort(function (a, b) {
      return a.agility - b.agility;
    })
    .reverse();

  battleData.stack = turnStack;
  executeTurn();
}

function executeTurn() {
  for (let i = 0; i < battleData.stack.length; ++i) {
    // Does current actor (type and id) have HP
    if (
      battleData[battleData.stack[i].type][battleData.stack[i].id].currentHP
    ) {
      switch (battleData.stack[i].action[0]) {
        case 0:
          executeAttack(i);
          break;

        case 1:
          // Magic stuff
          break;

        case 2:
          // Defense stuff
          break;
      }
    }
  }

  // Reset menu selections at end of all turns
  battleDataInit(battleData.players, battleData.enemies, battleData.enemiesID);
}

function executeAttack(stackIndex) {
  const current = battleData.stack[stackIndex];
  const attacks = Object.keys(battleAttackMenu);
  let targetType = "players";
  const attackingStat = battleAttackMenu[attacks[current.action[1]]];
  if (current.type == "players") {
    targetType = "enemies";

    // Add experience bonuses for using a stat
    stats[0][current.id].experience.bonuses[attackingStat]++;
  }

  dealPhysicalDamage(
    current.type,
    current.id,
    current.type == "players" ? "enemies" : "players",
    current.target,
    battleAttackMenu[attacks[current.action[1]]]
  );
}

function findCharacterStat(name, stat) {
  const battlers = battleData.players.concat(battleData.enemies);
  for (let i = 0; i < battlers.length; i++) {
    if (battlers[i].name == name) {
      return battlers[i][stat];
    }
  }
  return false;
}

// attackerType: string, battleData key, either players or enemies
// attackerID: int, array index of battleData.{{attackerType}}
// targetType: string, battleData key, either players or enemies
// targetID: int, array index of battleData.{{targetType}}
// stat: string, object key for atk stat

function dealPhysicalDamage(
  attackerType,
  attackerID,
  targetType,
  targetID,
  stat
) {
  const atkStat = battleData[attackerType][attackerID][stat];
  const defenseStat = 0;
  const weapon = 0;
  const dmgFormulaRaw = atkStat * 0.5 + weapon - defenseStat;
  const dmgFormula = dmgFormulaRaw <= 0 ? 1 : Math.round(dmgFormulaRaw);

  battleData[targetType][targetID].currentHP =
    battleData[targetType][targetID].currentHP - dmgFormula < 0
      ? 0
      : battleData[targetType][targetID].currentHP - dmgFormula;
}

function getCurrentPlayer() {
  for (
    let playerIndex = 0;
    playerIndex < battleData.players.length;
    ++playerIndex
  ) {
    if (
      !battleData.stack.hasOwnProperty(battleData.players[playerIndex].name) &&
      battleData.players[playerIndex].currentHP
    ) {
      return playerIndex;
    }
  }
}

function stopBattle(win) {
  if (win) {
    delete stats[battleData.enemiesID];
    for (let i = 0; i < entities.length; ++i) {
      if (entities[i].type && entities[i].id == battleData.enemiesID) {
        entities[i] = { type: false, tile: entities[i].tile };
      }
    }

    const battleXP = xpEarned();
    for (let i = 0; i < battleData.players.length; ++i) {
      battleData.players[i].experience.points += battleXP;
    }
    checkXP = true;
  }

  stats[0] = battleData.players;
  battleData = {};
  entityDataToMap();

  overworldLoop();
}

function xpEarned() {
  let battleXP = 0;
  for (let i = 0; i < battleData.enemies.length; ++i) {
    battleXP += battleData.enemies[i].maxHP;
  }
  return battleXP;
}

function centeredBoxAnimate (step, size, callback, callbackData) {
  step = step + 4;

  ctx.fillStyle = "#FFF";
  ctx.fillRect(
    canvas.width / 2 - step,
    canvas.height / 2 - step,
    step * 2,
    step * 2
  );
  ctx.fillStyle = "#225";
  ctx.fillRect(
    canvas.width / 2 - step + UISpacing.displayBorders,
    canvas.height / 2 - step + UISpacing.displayBorders,
    step * 2 - UISpacing.displayBorders,
    step * 2 - UISpacing.displayBorders
  );

  if (step >= size) {
    window[callback].apply(null, callbackData);
    return;
  } else {
    window.requestAnimationFrame(() => {
      centeredBoxAnimate(step, size, callback, callbackData);
    });
  }
};

function drawMenu () {
  ctx.clearRect(
    canvas.width / 2 - menuData.size,
    canvas.height / 2 - menuData.size,
    menuData.size * 2,
    menuData.size * 2
  );

  const menuText = menuData.head + "\n" + menuData.body;
  const boxX = canvas.width / 2 - menuData.size;
  const boxY = canvas.height / 2 - menuData.size;

  centeredBox(menuData.size);

  canvasWrite(
    boxX + UISpacing.displayBorders + UISpacing.displayPadding,
    boxY + UISpacing.displayBorders + UISpacing.displayPadding,
    menuText
  );

  drawOptions();
  drawMenuCursor();
};

function drawOptions () {
  for (let i = 0; i < menuData.options.length; i++) {
    if (menuData.options[i].effects) {
      window[menuData.options[i].effects.func].apply(
        null,
        menuData.options[i].effects.data
      );
    }
  }
  for (let i = 0; i < menuData.options.length; i++) {
    canvasWrite(
      menuData.options[i].x,
      menuData.options[i].y,
      menuData.options[i].text
    );
  }
};

function centeredBox (size) {
  ctx.fillStyle = "#FFF";
  ctx.fillRect(
    canvas.width / 2 - size,
    canvas.height / 2 - size,
    size * 2,
    size * 2
  );
  ctx.fillStyle = "#225";
  ctx.fillRect(
    canvas.width / 2 - size + UISpacing.displayBorders,
    canvas.height / 2 - size + UISpacing.displayBorders,
    size * 2 - UISpacing.displayBorders * 2,
    size * 2 - UISpacing.displayBorders * 2
  );
};

function drawMenuCursor () {
  ctx.fillStyle = "#F00";

  const thisX = menuData.options[menuData.currentSel].x - 2;
  const thisY = menuData.options[menuData.currentSel].y + fontSize / 2 + 1;

  ctx.fillRect(thisX, thisY, 2, 2);
};

function statHighlight (color, optionID) {
  ctx.fillStyle = color;

  ctx.fillRect(
    menuData.options[optionID].x,
    menuData.options[optionID].y,
    fontCharWidth * 3,
    fontSize
  );
};

function xpCheck() {
  const playerParty = stats[0];
  for (let i = 0; i < playerParty.length; i++) {
    const levelUp = baseXP * (playerParty[i].experience.level / 10);
    if (playerParty[i].experience.points >= levelUp) {
      stats[0][i].experience.points =
        playerParty[i].experience.points - levelUp;
      screen = "menu";
      centeredBoxAnimate(0, 48, "levelUpUI", [i]);
    }
  }
}

function recalcMaxHP(statsID) {
  stats[0][statsID].maxHP = stats[0][statsID].strength * 3;
}

function levelUpUI(statsID) {
  const statPointsOnLvl =
    Math.floor(stats[0][statsID].experience.level / 2) < 2
      ? 2
      : Math.floor(stats[0][statsID].experience.level / 2);
  const boxSize = 50;
  const pointBonuses = getBonusedStats(statsID);

  menuData = {
    playerID: statsID,
    size: boxSize,
    currentSel: 0,
    head: stats[0][statsID].name + " levels up!",
    body: "Points: " + statPointsOnLvl,
    enter: {
      func: "xpMenuAdd",
      data: [0],
    },
    shift: {
      func: "xpMenuSubtract",
      data: [0],
    },
    returnScreen: "overworld",
    options: [
      {
        id: 0,
        text: "Str:" + stats[0][statsID].strength + "+0",
        x: 0,
        y: 0,
        effects: false,
      },
      {
        id: 1,
        text: "Agl:" + stats[0][statsID].agility + "+0",
        x: 0,
        y: 0,
        effects: false,
      },
      {
        id: 2,
        text: "Int:" + stats[0][statsID].intuition + "+0",
        x: 0,
        y: 0,
        effects: false,
      },
      {
        id: 3,
        text: "Foc:" + stats[0][statsID].focus + "+0",
        x: 0,
        y: 0,
        effects: false,
      },
    ],
    extra: pointBonuses,
  };

  const boxX = canvas.width / 2 - boxSize;
  const boxY = canvas.height / 2 - boxSize;
  let optionsY =
    boxY + fontSize + UISpacing.displayBorders + UISpacing.displayPadding * 2;
  const optionsX = boxX + UISpacing.displayBorders + UISpacing.displayPadding;

  if (menuData.body.length) {
    const lines = menuData.body.split("\n");
    for (let i = 0; i < lines.length; i++) {
      optionsY += fontSize;
    }
  }

  for (let i = 0; i < menuData.options.length; i++) {
    const uiBonusedStat = menuData.options[i].text.split(":");
    const bonusedStat = abbrevs(uiBonusedStat[0]);
    if (menuData.extra.primary == bonusedStat) {
      menuData.options[i].effects = {
        func: "statHighlight",
        data: ["#193", menuData.options[i].id],
      };
    }
    if (menuData.extra.secondary == bonusedStat) {
      menuData.options[i].effects = {
        func: "statHighlight",
        data: ["#A05", menuData.options[i].id],
      };
    }

    // Calc text placements (2 columns)
    const row = i % 2 ? fontSize * ((i - 1) / 2) : fontSize * (i / 2);
    const col = i % 2 ? menuData.size : 0;

    menuData.options[i].x = optionsX + col;
    menuData.options[i].y = optionsY + row;
  }

  const keyState = JSON.parse(JSON.stringify(keys));
  menuLoop(keyState);
}

function menuSelect(prevKeyState) {
  if (screen == "menu") {
    // Cursor up
    if (keys.up && !prevKeyState.up) {
      menuData.currentSel =
        menuData.currentSel - 2 >= 0
          ? menuData.currentSel - 2
          : menuData.currentSel;
    }

    // Cursor down
    else if (keys.down && !prevKeyState.down) {
      menuData.currentSel =
        menuData.currentSel + 2 < menuData.options.length
          ? menuData.currentSel + 2
          : menuData.currentSel;
    }

    // Cursor left
    else if (keys.left && !prevKeyState.left) {
      menuData.currentSel =
        menuData.currentSel - 1 >= 0
          ? menuData.currentSel - 1
          : menuData.currentSel;
    }

    // Cursor right
    else if (keys.right && !prevKeyState.right) {
      menuData.currentSel =
        menuData.currentSel + 1 < menuData.options.length
          ? menuData.currentSel + 1
          : menuData.currentSel;
    }

    // Next selection
    else if (keys.enter && !prevKeyState.enter) {
      window[menuData.enter.func].apply(null, menuData.enter.data);
    }

    // Go back a selection
    else if (keys.shift && !prevKeyState.shift) {
      window[menuData.shift.func].apply(null, menuData.shift.data);
    }
  }
}

function xpMenuAdd(data) {
  const uiRemaining = menuData.body.split(": ");
  const remaining = parseInt(uiRemaining[1]);

  if (remaining) {
    const prevMenuData = JSON.parse(JSON.stringify(menuData));
    const newRemaining = remaining - 1;
    const uiAdded = menuData.options[menuData.currentSel].text.split("+");
    const added = parseInt(uiAdded[1]);
    const newAdded = added + 1;

    menuData.options[menuData.currentSel].text = uiAdded[0] + "+" + newAdded;
    menuData.body = uiRemaining[0] + ": " + newRemaining;

    if (!newRemaining) {
      let selections = "";
      const selectedPoints = [];
      for (let i = 0; i < menuData.options.length; i++) {
        const uiSelected = menuData.options[i].text.split("+");
        const selected = parseInt(uiSelected[1]);
        if (selected) {
          const uiSelectedStat = menuData.options[i].text.split(":");
          const uiCurrentPoints = uiSelectedStat[1].split("+");
          const selectedStat = abbrevs(uiSelectedStat[0]);

          // Add Bonus Multiplier
          let bonusMultiplier = 1;
          if (menuData.extra.primary == selectedStat) {
            bonusMultiplier = 1.5;
          }
          if (menuData.extra.secondary == selectedStat) {
            bonusMultiplier = 1.2;
          }

          const finalStat =
            parseInt(uiCurrentPoints[0]) +
            Math.ceil(selected * bonusMultiplier);
          selections += selectedStat + ":" + finalStat + "\n";
          selectedPoints.push({
            stat: selectedStat,
            points: finalStat,
          });
        }
      }

      menuData.currentSel = 0;
      menuData.body = selections;
      menuData.enter.func = "xpMenuClose";
      menuData.enter.data = [selectedPoints];
      menuData.shift.func = "xpMenuReturn";
      menuData.shift.data = [prevMenuData];
      menuData.options = [
        {
          id: 0,
          text: "OK",
          x:
            canvas.width / 2 -
            menuData.size +
            UISpacing.displayBorders +
            UISpacing.displayPadding,
          y:
            canvas.height / 2 +
            menuData.size -
            UISpacing.displayBorders -
            UISpacing.displayPadding -
            fontSize * 2,
        },
      ];
    }
  }
}

function xpMenuSubtract(data) {
  const uiAdded = menuData.options[menuData.currentSel].text.split("+");
  const added = parseInt(uiAdded[1]);

  if (added) {
    const uiRemaining = menuData.body.split(": ");
    const remaining = parseInt(uiRemaining[1]);
    const newRemaining = remaining + 1;
    const newAdded = added - 1;

    menuData.options[menuData.currentSel].text = uiAdded[0] + "+" + newAdded;
    menuData.body = uiRemaining[0] + ": " + newRemaining;
  }
}

function xpMenuClose(points) {
  for (let i = 0; i < points.length; i++) {
    stats[0][menuData.playerID][points[i].stat] = points[i].points;
  }

  recalcMaxHP(menuData.playerID);

  stats[0][menuData.playerID].experience.level =
    stats[0][menuData.playerID].experience.level + 1;
  stats[0][menuData.playerID].experience.bonuses.strength = 0;
  stats[0][menuData.playerID].experience.bonuses.agility = 0;
  stats[0][menuData.playerID].experience.bonuses.focus = 0;
  stats[0][menuData.playerID].experience.bonuses.intuition = 0;

  screen = menuData.returnScreen;
  menuData = {};
  overworldLoop();
}

function xpMenuReturn(prevData) {
  menuData = prevData;
}

function animateMove (id, up, down, left, right) {
  const prevTile = entities[id].tile;

  if (up) {
    const topLeft = { x: entities[id].xy.x, y: entities[id].xy.y };
    const topRight = {
      x: entities[id].xy.x + entities[id].sprite.width - 1,
      y: entities[id].xy.y,
    };

    checkBounding(id, topLeft, topRight, 0, -1, "speedY", [2, 3]);
  } else if (down) {
    const bottomLeft = {
      x: entities[id].xy.x,
      y: entities[id].xy.y + entities[id].sprite.width - 1,
    };
    const bottomRight = {
      x: entities[id].xy.x + entities[id].sprite.width - 1,
      y: entities[id].xy.y + entities[id].sprite.width - 1,
    };

    checkBounding(id, bottomLeft, bottomRight, 0, 1, "speedY", [0, 1]);
  } else {
    entities[id].speedY = 0;
  }

  if (left) {
    const bottomLeft = {
      x: entities[id].xy.x,
      y: entities[id].xy.y + entities[id].sprite.width - 1,
    };
    const topLeft = { x: entities[id].xy.x, y: entities[id].xy.y };

    checkBounding(id, bottomLeft, topLeft, -1, 0, "speedX", [4, 5]);
  } else if (right) {
    const bottomRight = {
      x: entities[id].xy.x + entities[id].sprite.width - 1,
      y: entities[id].xy.y + entities[id].sprite.width - 1,
    };
    const topRight = {
      x: entities[id].xy.x + entities[id].sprite.width - 1,
      y: entities[id].xy.y,
    };

    checkBounding(id, bottomRight, topRight, 1, 0, "speedX", [6, 7]);
  } else {
    entities[id].speedX = 0;
  }

  entities[id].tile = coordsToTile(
    entities[id].xy.x + entities[id].sprite.width / 2,
    entities[id].xy.y + tileSize / 2
  );
  map[entities[id].tile].render.object = id;
  if (entities[id].logic.state) {
    map[entities[id].tile].state = entities[id].logic.state;
  }

  if (prevTile !== entities[id].tile) {
    map[prevTile].render.object = false;
    map[prevTile].state = { passable: true };
  }
};

// Unused function
function spriteLoop (id, frames, rate) {
  let i = 0;
  const thisAnim = setInterval(() => {
    entities[id].frame = i;
    i++;
    if (i >= frames.length) {
      i = 0;
    }
  }, rate);
};

function setPath (id, path, originPoint, originTime, step) {
  if (path[step] != "wait" && path[step] != "stop") {
    const destX = Math.abs(entities[id].xy.x - originPoint.x);
    const destY = Math.abs(entities[id].xy.y - originPoint.y);

    if (destX >= tileSize || destY >= tileSize) {
      step = step + 1;
      if (step >= path.length) {
        step = 0;
      }

      originPoint = JSON.parse(JSON.stringify(entities[id].xy));
      clearInterval(entities[id].interval);
      entities[id].interval = 0;
    }
  } else {
    originTime = originTime + 1;
    if (originTime == 60) {
      originTime = 0;
      step = step + 1;
      if (step >= path.length) {
        step = 0;
      }
      clearInterval(entities[id].interval);
      entities[id].interval = 0;
    }
  }

  switch (path[step]) {
    case "up":
      entities[id].dir.up = true;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break;

    case "down":
      entities[id].dir.up = false;
      entities[id].dir.down = true;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break;

    case "left":
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = true;
      entities[id].dir.right = false;
      break;

    case "right":
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = true;
      break;

    case "wait":
      entities[id].dir.up = false;
      entities[id].dir.down = false;
      entities[id].dir.left = false;
      entities[id].dir.right = false;
      break;

    case "stop":
      return;
  }

  window.requestAnimationFrame(() => {
    setPath(id, path, originPoint, originTime, step);
  });
};

function walkLoop (id, frames) {
  let i = 1;

  if (entities[id].interval == 0) {
    entities[id].frame = frames[0];
    entities[id].interval = setInterval(() => {
      entities[id].frame = frames[i];
      i++;
      if (i >= frames.length) {
        i = 0;
      }
    }, 200);
  }
};

function drawGame (map) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const tileObjData = [];

  for (let y = 0; y < mapH; ++y) {
    for (let x = 0; x < mapW; ++x) {
      const currentPos = y * mapW + x;

      ctx.fillStyle = map[currentPos].render.base;

      let thisObj = map[currentPos].render.object;

      if (thisObj !== false) {
        ctx.fillStyle = "#00F";

        thisObj = entities[thisObj];
        let originX = x * tileSize;
        let originY = y * tileSize + tileSize - thisObj.sprite.height;
        if (thisObj.type == "mobile") {
          originX = thisObj.xy.x;
          originY = thisObj.xy.y;
        }
        tileObjData.push({
          id: thisObj.id,
          type: thisObj.type,
          originX: originX,
          originY: originY,
          width: thisObj.sprite.width,
          height: thisObj.sprite.height,
          render: thisObj.sprite.render[thisObj.frame],
        });
      }

      if (currentPos == entities[0].tile) {
        ctx.fillStyle = "#FF0";
      }

      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }

  for (let i = 0; i < tileObjData.length; ++i) {
    if (tileObjData[i].type == "mobile") {
      drawEntity(
        tileObjData[i].id,
        tileObjData[i].originX,
        tileObjData[i].originY,
        tileObjData[i].width,
        tileObjData[i].height,
        tileObjData[i].render
      );
    } else {
      drawSprite(
        tileObjData[i].originX,
        tileObjData[i].originY,
        tileObjData[i].width,
        tileObjData[i].height,
        tileObjData[i].render
      );
    }
  }
};

function drawSprite (posX, posY, sizeX, sizeY, thisSprite) {
  let k = 0;

  for (let y = posY; y < posY + sizeY; ++y) {
    for (let x = posX; x < posX + sizeX; ++x) {
      if (thisSprite[k]) {
        ctx.fillStyle = thisSprite[k];
        ctx.fillRect(x, y, 1, 1);
      }
      k++;
    }
  }
};

function drawEntity (id, posX, posY, sizeX, sizeY, thisSprite) {
  const offX = posX + entities[id].speedX;
  const offY = posY + entities[id].speedY;

  drawSprite(offX, offY + sizeX - sizeY, sizeX, sizeY, thisSprite);

  entities[id].xy.x = offX;
  entities[id].xy.y = offY;
};

// Check collision between two entities
// id: int value of entities table id
// cornerA: obj of x and y values from entities table, calculated to a current moving bounding corner
// cornerB: obj of x and y values from entities table, calculated to a current moving bounding corner
// xPolarity: int that determines how the entity is moving horizontally (0, 1, -1)
// yPolarity: int that determines how the entity is moving vertically (0, 1, -1)
// axis: string that corresponds to an obj key from the entity to set it's vertical or horizontal speed ('speedX', or 'speedY')
// loop: array of ints that determine the sprite frames to pass to walkLoop() for animation
function checkBounding(id, cornerA, cornerB, xPolarity, yPolarity, axis, loop) {
  const tileA = map[coordsToTile(cornerA.x + xPolarity, cornerA.y + yPolarity)];
  const tileB = map[coordsToTile(cornerB.x + xPolarity, cornerB.y + yPolarity)];

  // if either of the dest tiles aren't passable, stop movement
  if (!tileA.state.passable || !tileB.state.passable) {
    entities[id][axis] = 0;
  }

  // if the entity id is the player (0) and either of the dest tiles have enemies, start battle
  else if (!id && (tileA.state.battle || tileB.state.battle)) {
    entities[id][axis] = 0;

    const players = stats[0];
    const enemies = stats[tileA.render.object]
      ? stats[tileA.render.object]
      : stats[tileB.render.object];
    const enemiesID = tileA.render.object
      ? tileA.render.object
      : tileB.render.object;

    battleIntro(0);
    battleDataInit(players, enemies, enemiesID);
  }

  // if the entity id is NOT the player (1+) and either of the dest tiles have the player, start battle
  else if (id && (tileA.state.player || tileB.state.player)) {
    entities[id][axis] = 0;

    const players = stats[0];
    const enemies = stats[id];
    const enemiesID = id;

    battleIntro(0);
    battleDataInit(players, enemies, enemiesID);
  }

  // set the entity's speed and start the animation
  else {
    entities[id][axis] = xPolarity ? xPolarity : yPolarity;
    walkLoop(id, loop);
  }
}

function tileToCoords(tile) {
  const yIndex = Math.floor(tile / mapW);
  const xIndex = tile - yIndex * mapW;

  const y = yIndex * tileSize;
  const x = xIndex * tileSize;
  return { x, y };
}

function coordsToTile(x, y) {
  const tile = Math.floor(y / tileSize) * mapW + Math.floor(x / tileSize);
  return tile;
}

function adjacentTiles(tile) {
  const obj = { far: {}, close: {}, all: {} };

  const adj = {
    nw: tile - (mapW + 1),
    ne: tile - (mapW - 1),
    sw: tile + (mapW - 1),
    se: tile + (mapW + 1),
    n: tile - mapW,
    e: tile - 1,
    w: tile + 1,
    s: tile + mapW,
  };

  const bounds = Object.values(adj);
  const dir = Object.keys(adj);

  for (let i = 0; i < bounds.length; i++) {
    if (bounds[i] > -1 && bounds[i] <= mapW * mapH) {
      if (dir[i].length > 1) {
        obj["far"][dir[i]] = bounds[i];
      } else {
        obj["close"][dir[i]] = bounds[i];
      }
      obj["all"][dir[i]] = bounds[i];
    }
  }

  return obj;
}

function testMap() {
  for (let i = 0; i < mapH * mapW; ++i) {
    // Edges

    if (
      // top
      i < mapW ||
      // left
      i % mapW == 0 ||
      // right
      (i + 1) % mapW == 0 ||
      // bottom
      i > mapW * mapH - mapW
    ) {
      map.push({
        id: i,
        render: {
          base: "#D35",
          object: false,
          sprite: false,
        },
        state: {
          passable: false,
        },
      });
    } else {
      // Grass

      map.push({
        id: i,
        render: {
          base: "#0C3",
          object: false,
          sprite: false,
        },
        state: {
          passable: true,
        },
      });
    }
  }
}
