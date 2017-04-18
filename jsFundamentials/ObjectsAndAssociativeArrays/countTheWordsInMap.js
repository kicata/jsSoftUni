/**
 * Created by k.asenov on 16.3.2017 ã..
 */
function countWords(input){
    let arr=input[0].toLowerCase().split(/\W+/).filter(x=>x!=="");
    let dict = new Map();
    arr.sort();
    arr.forEach( x=>dict.has(x)? dict.set(x, dict.get(x)+1):dict.set(x,1));

    for(let [key,value] of dict){
        console.log(key +" -> "+ value +" times");
    }

}
countWords(["Far too slow, you're far too slow."]);