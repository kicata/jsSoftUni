/**
 * Created by k.asenov on 1.3.2017 ã..
 */
function printNKSeq(input){

    let n = input[0]*1;
    let k = input[1]*1;
    let result=[];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        if(result.length<2){
            sum=+1;
            result.push(sum);

        }else if(result.length<3){
            sum=result[0]+result[1];
            result.push(sum);
        }else{
            sum+=result.slice(i-k,i).reduce((a,b)=>a+b);
            result.push(sum);
        }


    }
    console.log((result.join(" ")));
}
printNKSeq(['8', '2']);