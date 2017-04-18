/**
 * Created by k.asenov on 10.3.2017 ã..
 */
function printLetters(input){
    let arr=input[0].split("");
    for (let i = 0; i < arr.length; i++) {
        console.log(`str[${i}] -> ${arr[i]}`);
    }
}
printLetters(['Hello, World!']);