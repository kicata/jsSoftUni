/**
 * Created by k.asenov on 13.3.2017 �..
 */
function matchAllWords(input){
   let matched=input[0].split(/\w+/);
    console.log(matched.join("|"));

}
matchAllWords(['_(Underscores) are also word characters']);