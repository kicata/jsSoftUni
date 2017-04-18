/**
 * Created by k.asenov on 16.3.2017 ã..
 */
function jsonToHTML(input){
    let result="<table>\r\n" +
        "\t<tr><th>name</th><th>score</th></tr>\r\n";
    for(let obj of input){
        let name=htmlReplace(obj.name.toString());
        let score=htmlReplace(obj.score.toString());
        result+=`\t<tr><td>${name}</td><td>${score}</td></tr>\r\n`;
    }
    result+="</table>";
    console.log(result);

    function htmlReplace(input){
        return input.replace(/&/g,"&amp")
            .replace(/>/g,"&gt")
            .replace(/</g,"&lt")
            .replace(/"/g ,"&gt");
    }
}
jsonToHTML([{"name":"Pesho","score":479},{"name":"Gosho","score":205}])