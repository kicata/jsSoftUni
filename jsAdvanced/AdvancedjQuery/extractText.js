/**
 * Created by k.asenov on 31.3.2017 ã..
 */
function extractText(){
    "use strict";
    let text=[];
    $( "li" ).each(function(ind) {
        text[ind]=($(this).text());
    });
    $("#result").text(text.join(", "));
}