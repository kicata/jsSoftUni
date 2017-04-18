/**
 * Created by k.asenov on 1.3.2017 ã..
 */
function printFirsLastKNums(input){
    "use strict";
    let k = Number(input[0]);
    console.log(input.slice(0,k).join(" "));
    console.log(input.slice(input.length-k-1,input.length-1).join(" "));
}
printFirsLastKNums(['3', '6', '7', '8', '9']);