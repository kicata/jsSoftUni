/**
 * Created by k.asenov on 2.3.2017 ã..
 */
function findMaxElement(input){
    let inArr=[];
    let arr1=[];
   input.forEach(function(element) {
       inArr = element.split(" ");
        inArr.forEach(function(element){
            arr1.push(element*1);
            return arr1;
        })
    });
    let max = Math.max.apply(Math,arr1);
    console.log(max);
}
findMaxElement(['20 50 10', '8 33 145']);