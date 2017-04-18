/**
 * Created by k.asenov on 1.3.2017 ã..
 */
function processOddNums(input){
    "use strict";
    let odds = input.filter((x,i)=>i%2!=0);
    let dobles= odds.map(x=>x*2);
    console.log(dobles.reverse().join(" "));
}
processOddNums(['3', '0', '10', '4', '7', '3']);