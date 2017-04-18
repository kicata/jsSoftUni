/**
 * Created by k.asenov on 1.3.2017 ã..
 */
function negativePositive(input){
    "use strict";
    let result=[];
    for(let val of input){
        if(val*1>= 0){
            result.push(val);
        }else{
            result.unshift(val);
        }
    }

    for(let num of result){
        console.log(num);

    }
}
negativePositive(['7', '-2', '8', '9']);