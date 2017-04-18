/**
 * Created by k.asenov on 10.3.2017 ã..
 */
function concatReverse(input){
    let conc = input.join("");
    let rev =conc.split("").reverse();
    console.log(rev.join(""));

}
concatReverse(['I', 'am', 'student']);