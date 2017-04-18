/**
 * Created by k.asenov on 17.2.2017 ã..
 */
function stringOfNumToN(num){
    let number=Number(num[0]);
    let result="";
    for(let x=1;x<=number;x++){
        result+=x;
    }
    console.log(result);
}
stringOfNumToN(['11']);