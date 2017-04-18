/**
 * Created by k.asenov on 14.3.2017 ã..
 */
function capitalizeWords(input){
    let words=input[0].toLowerCase().split(/\s+/);
    let result=[];
    for(let word of words){
        let w=word[0].toUpperCase()+word.substr(1);
        result.push(w);
    }
    console.log(result.join(" "));

}
capitalizeWords(["Was that Easy? tRY thIs onE for SiZe!"]);