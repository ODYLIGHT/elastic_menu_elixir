// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
$(document).ready(function() {
  var menu = $('.menu'); 
  var curve = 0, direction;
  function setPath(y, curve) {
    if(curve <= 0) {
      direction = 1;
    } else {
      direction = 0; 
    }
    var path = 'M0,0 L0,'+ y + ' a50,' + curve + ' 0,0 ' + direction + ' 100,0 L100,0';
    return path;
  }
  function easeOutElastic(t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a); 
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  } 
  function animate() {  
    var duration = 1000;
    var frameRate = 60/1000;
    var totalFrames = duration * frameRate; 
    var currentFrame = 0;  
    var endY = 300;  
    var newY, newCurve;  
    function animatePath() { 
      currentFrame++;  
      newY = easeOutElastic(currentFrame, 60, endY - 60, totalFrames); 
      newCurve = easeOutElastic(currentFrame, curve, 0 - curve, totalFrames);  
      menu.attr('d', setPath(newY, newCurve)); 
      if (currentFrame > totalFrames) { 
        return;
      }
      requestAnimationFrame(animatePath);
    }
    animatePath(); 
  }
  $(document).on('mousedown', '.menu', function(e) {
    var startY = e.pageY; 
    $(document).on('mousemove', function(e) {
      var currentY = e.pageY;
      var diff = currentY - startY;
      if(diff < 0) diff = 0;
      if(diff > 300) diff = 300; 
      curve = diff/2;
      menu.attr('d', setPath(60, curve));
    });
  });
  $(document).on('mouseup', function() {
    $(document).off('mousemove');
    animate();
  })
})