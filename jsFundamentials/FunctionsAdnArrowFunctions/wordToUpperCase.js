/**
 * Created by k.asenov on 24.2.2017 ã..
 */
function getWordToUpper(input){
    "use strict";
    var re = /\w+/g;
    let words = input[0].toUpperCase().match(re).join(", ").trim();
    console.log(words);
}
getWordToUpper(['Hi, how are you?']);