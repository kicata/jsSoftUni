/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function printBinaryLog(input){
    "use strict";
    for (let num of input) {
        console.log(Math.log2(num));
    }
}
printBinaryLog([25,4,9]);