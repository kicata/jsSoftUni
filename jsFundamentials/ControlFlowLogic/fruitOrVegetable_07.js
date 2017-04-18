/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function isFruitOrVegetable(input){
    "use strict";
    let output;
    let word=input[0];
    switch (word){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            output="fruit";
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            output="vegetable";
            break;
        default: output="unknown";
            break;
    }
    console.log(output);

}
isFruitOrVegetable('pizza');