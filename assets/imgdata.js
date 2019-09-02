window.onload = function(){

  var canvas = document.getElementById('save');
  var ctx = canvas.getContext("2d");

  document.getElementById('imgdata').onclick = function(){

    var img = new Image();

    img.onload = function(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img,0,0);

      var imgData = ctx.getImageData(0,0,img.naturalWidth,img.naturalHeight);
      var data = imgData.data;

      // enumerate all pixels
      // each pixel's r,g,b,a datum are stored in separate sequential array elements

      var colorVals = [];
      var result = [];
      var config = 'colorGuide: {<br>';
      var sprite = '[<br>&nbsp;&nbsp;';

      for(var i=0; i<data.length; i+=4) {
        var red = data[i];
        var green = data[i+1];
        var blue = data[i+2];
        var alpha = data[i+3];

        if(!alpha){
          result.push(-1);
        }
        else{
          var thisColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
          if(colorVals.includes(thisColor)){
            result.push(colorVals.indexOf(thisColor));
          }
          else{
            colorVals.push(thisColor);
            result.push(colorVals.length - 1);
          }
        }
      }

      var k = 0;
      var indexArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

      for(var i=0; i<result.length; i++) {

        if(result[i] >= 0){
          var digits = result[i].toString();
          var thisIndex = 'a';

          if(digits.length > 1){
            thisIndex = indexArray[parseInt(digits[0])];
          }

          sprite += thisIndex + digits[digits.length - 1] + ',';
        }
        else{
          sprite += '0, ';
        }

        k++;

        if(k == img.naturalWidth){
          sprite += '<br>&nbsp;&nbsp;';
          k = 0;
        }
      }

      for(var i=0; i<colorVals.length; i++) {

        var digits = i.toString();
        var thisIndex = 'a';

        if(digits.length > 1){
          thisIndex = indexArray[parseInt(digits[0])];
        }

        config += '&nbsp;&nbsp;' + thisIndex + digits[digits.length - 1] + ': "' + colorVals[i] + '",<br>';
      }

      config += '},<br>';
      sprite += '<br>];';

      document.getElementById('result').innerHTML = config + sprite;
    }

    img.src = '/rpg-engine/assets/images/' + document.getElementById('imgpath').value;
  };
};