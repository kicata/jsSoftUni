/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function printColourNums(num){
    "use strict";
    let result="<ul>\r\n";
    for(let i=1;i<=num;i++){
        if(i%2==0){
            result+="\t<li><span style='color:blue'>"+i+"</span></li>\r\n";
        }else{
            result+="\t<li><span style='color:green'>"+i+"</span></li>\r\n";
        }

    }
    result+="</ul>";
console.log(result);
}
printColourNums(5);