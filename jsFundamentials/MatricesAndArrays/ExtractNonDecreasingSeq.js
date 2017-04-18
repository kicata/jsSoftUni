/**
 * Created by k.asenov on 9.3.2017 ã..
 */
function extractSeq(input){
    let arr=input.map(Number);
    let last =input[0];
    let result=[];
    for(let num of arr){
        if(num>=last){
            result.push(num);
            last=num;
        }
    }

    result.forEach(x=>console.log(x));
}
extractSeq(['1','5','3','6']);