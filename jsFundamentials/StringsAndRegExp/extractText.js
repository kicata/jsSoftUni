/**
 * Created by k.asenov on 10.3.2017 ã..
 */
function extractText(input){
    let stack = input[0];
    let result=[];
    let needle1="(";
    let needle2=")";
    let start=stack.indexOf(needle1,0);
    let end=stack.indexOf(needle2,0);
    while(start != -1 && end!= -1){
        let word=stack.substring(start+1,end);
        result.push(word);
        start = stack.indexOf(needle1,start+2);
        end = stack.indexOf(needle2,end+1);
    }
    console.log(result.join(", "));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);