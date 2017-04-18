/**
 * Created by k.asenov on 14.3.2017 ã..
 */
function findOccurance(input){
    let sentence = input[0].toLowerCase();
    let needle="\\b"+input[1].toLowerCase()+"\\b";
    let pattern= new RegExp(needle, 'g');
    let arr=sentence.match(pattern);
    if(arr!=null){
        console.log(arr.length);
    }else{
        console.log("0");
    }
}
findOccurance(["How do you plan on achieving that? How? How can you even think of that?",
    "how"]);
