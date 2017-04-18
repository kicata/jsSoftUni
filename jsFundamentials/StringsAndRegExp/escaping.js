/**
 * Created by k.asenov on 10.3.2017 ã..
 */
function htmlEscape(input){

console.log(htmlReplace(input[0]));
    function htmlReplace(input){
        return input.replace(/&/g,"&amp")
            .replace(/>/g,"&gt")
            .replace(/</g,"&lt")
            .replace(/"/g ,"&gt");
    }
}
htmlEscape(['<b>unescaped text</b>', 'normal text']);