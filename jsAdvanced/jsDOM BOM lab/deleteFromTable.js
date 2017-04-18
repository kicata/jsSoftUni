/**
 * Created by k.asenov on 28.3.2017 ã..
 */
function deleteByEmail(){
    "use strict";
    let email = document.getElementsByName("email").item(0).value.trim();
    let result = document.getElementById("result");

    let rows = document.querySelectorAll("table tr");
    let isDeleted = false;
    let ind = 0;
    for(let row of rows){
       let text = row.innerText.split(/\s+/)[1];
        if(text === email){
            let toDelete=rows[ind];
            toDelete.parentNode.removeChild(toDelete);
            isDeleted=true;
            break;
        }
        ind++;
    }

    if(isDeleted === true){
        result.innerHTML="Deleted.";
    }else{
       result.innerHTML="Not found.";
    }
}