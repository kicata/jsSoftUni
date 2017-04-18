/**
 * Created by k.asenov on 31.3.2017 ã..
 */
function search() {
    "use strict";
    let $towns = $("#towns").children().toArray();
    let token = $("#searchText").val();
    let matches=0;
    for(let town of $towns){
        let townStr = $(town).text();
        if(townStr.indexOf(token)!=-1){
            $(town).css("font-weight","bold");
            matches++;
        }

    }
    $("#result").text(matches+" matches");
}
