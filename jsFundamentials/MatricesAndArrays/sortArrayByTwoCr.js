/**
 * Created by k.asenov on 9.3.2017 ã..
 */
function sortByTwoCr(input){
    let sorted = input.sort((x, y)=>x.length>y.length?1:x.length<y.length?-1:x>y);
    sorted.forEach(x => console.log(x));
}
sortByTwoCr(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log("#############");
sortByTwoCr(['test', 'Deny','omen','Default']);
console.log("#############");
sortByTwoCr(['alpha', 'beta','gamma']);
