/**
 * Created by k.asenov on 23.2.2017 ã..
 */
function drawTriangle(num){
    "use strict";
    for (let i = 1; i <=num; i++)
    {
       drawStar(i);

    }
    for (var j = num-1; j > 0; j--) {
        drawStar(j);

    }

  function drawStar(count){
      console.log("*".repeat(count))
  }
}
drawTriangle(5);
