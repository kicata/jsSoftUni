/**
 * Created by k.asenov on 22.2.2017 ã..
 */
function calcDistance(input){
    "use strict";
    let v1=Number(input[0]);
    let v2=Number(input[1]);
    let timeInH=Number(input[2])/3600;
    let distance=Math.abs((v1*timeInH)-(v2*timeInH))*1000;

console.log(distance);

}
calcDistance([5, -5, 40]);