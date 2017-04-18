/**
 * Created by k.asenov on 24.2.2017 ã..
 */
function agregateElements(input){
    "use strict";
    //Sum(ai) - calculates the sum all elements from the input array
    //Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    //Concat(ai) - concatenates the string representations of all elements from the array
    let elements = input.map(Number);
    let sum=0;
    let sumInvr=0;
    let concat="";
    for (let i = 0; i < elements.length; i++) {
        sum += elements[i];
        sumInvr += 1/elements[i];
        concat += elements[i];
    }
    console.log(sum);
    console.log(sumInvr);
    console.log(concat);

}
agregateElements(['1', '2', '3']);