/**
 * Created by k.asenov on 1.3.2017 ã..
 */
function evenPositionElement(input){

    let evens =[];
    for(let i in input){
        if(i%2==0){
            evens.push(input[i]);
        }
    }
    console.log(evens.join(" "));
}
evenPositionElement(['20', '30', '40']);