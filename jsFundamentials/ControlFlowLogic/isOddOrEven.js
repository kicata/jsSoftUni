/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function isOddOrEven(num){
    "use strict";
    if(Number(num)%2==0){
        console.log("even");
    }else if(Math.ceil(num)!=num){
        console.log("invalid");
    }else{
        console.log("odd");
    }

}
isOddOrEven(8);