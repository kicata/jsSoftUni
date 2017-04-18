/**
 * Created by k.asenov on 13.3.2017 ã..
 */
function expressionSplit(input){
    let result = input[0].split(/[ ;,.\t()]{1,}/);
    result.forEach(x=>console.log(x));

}
expressionSplit(['let sum = 4 * 4,b = "wow";']);