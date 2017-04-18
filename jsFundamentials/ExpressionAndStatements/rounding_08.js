/**
 * Created by k.asenov on 22.2.2017 ã..
 */
function roundNumToFixed(input){
    "use strict";
   let num=input[0]*1;
    let precision=input[1]*1;
    if(precision>15){
        precision=15;
    }
    console.log(num.toFixed(precision));
}
roundNumToFixed([10.5, 3]);