/**
 * Created by k.asenov on 23.2.2017 ã..
 */
function isPointInRect(input){
    "use strict";
  let[x,y,xMin,xMax,yMin,yMax]=input.map(Number);
    if((x>=xMin && x<=xMax)&&(y>=yMin && y<=yMax)){
        console.log("inside");
    }else{
        console.log("outside");
    }
}