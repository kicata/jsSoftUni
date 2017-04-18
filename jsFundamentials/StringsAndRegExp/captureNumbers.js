/**
 * Created by k.asenov on 14.3.2017 ã..
 */
function captureNums(input){
    let result=[];
    for(let row of input){
        let arr=row.match(/\d+/g);
        if(arr!=null){
            result.push(arr.join(" "));
        }

    }

    console.log(result.join(" "));
}
captureNums(["123a456",
"789b987",
"654c321",
"0"]);
captureNums(["The300",
    "What is that?",
        "I think it’s the 3rd movie.",
    "Lets watch it at 22:45"]);