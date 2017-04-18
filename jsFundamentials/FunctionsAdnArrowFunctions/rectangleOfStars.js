/**
 * Created by k.asenov on 23.2.2017 ã..
 */
function drawRectangle(input){
    "use strict";
    let num=Number(input)||5;
    for (let i = 1; i <= num; i++) {
        console.log(("* ".repeat(num).trim()))
    }
}
drawRectangle(4);