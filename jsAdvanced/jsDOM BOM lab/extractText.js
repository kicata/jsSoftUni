/**
 * Created by k.asenov on 28.3.2017 ã..
 */
function extractText(){
    let liTags = document.querySelectorAll("ul#items li");
    let result="";
    for(let li of liTags){
        result+= li.textContent+"\n";
    }
    let textBox=document.getElementById("result");
    textBox.value=result;
}

