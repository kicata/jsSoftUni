/**
 * Created by k.asenov on 23.2.2017 ã..
 */
function findMaxNum(input){
    "use strict";
    let numbers=input.map(Number);
    console.log( Math.max( ...numbers ));
}
findMaxNum([-10,-20,-30]);
