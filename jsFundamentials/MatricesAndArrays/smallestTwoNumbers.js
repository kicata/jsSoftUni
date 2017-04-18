/**
 * Created by k.asenov on 1.3.2017 ã..
 */
function smallestTwoNumsFromArray(input){
    "use strict";
    let sorted=input.map(Number).sort((a,b)=>a-b);
    let result=sorted.slice(0,2);
    console.log(result.join(" "));
}
smallestTwoNumsFromArray(['3', '0', '10', '4', '7', '3']);