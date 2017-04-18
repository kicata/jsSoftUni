/**
 * Created by k.asenov on 16.3.2017 ã..
 */
function countWord(input){
    let arr=input[0].split(/\W+/).filter(x=>x!=="");
    let dict={};
    arr.forEach(x=>dict.hasOwnProperty(x)?dict[x]+=1:dict[x]=1);
    console.log(JSON.stringify(dict));
}
countWord(["Far too slow, you're far too slow."]);