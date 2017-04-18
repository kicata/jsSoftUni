/**
 * Created by k.asenov on 1.3.2017 ã..
 */
function cookByNums(input){
    "use strict";
    //chop – divide the number by two
    //dice – square root of number
    //spice – add 1 to number
    //bake – multiply number by 3
    //fillet – subtract 20% from number

    let num = Number(input[0]);
    for (var i = 1; i < input.length; i++) {
        let action = input[i];
        num = cook(num,action);
        console.log(num);
    }

    function cook(num, action){
        switch (action){
            case "chop":num = num/2;
                break;
            case "dice":num = Math.sqrt(num);
                break;
            case "spice":num = num+1;
                break;
            case "bake":num = num*3;
                break;
            case "fillet":num = num*0.8;
                break;
            default :console.log("?nrecognized operation");
                break;
        }
        return num;
    }
}
cookByNums([32, "chop", "chop", "chop", "chop", "chop"]);

