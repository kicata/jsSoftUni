function colorize(){
    "use strict";
    let rows=document.querySelectorAll("table tr");
    let ind=1;
    for(let row of rows){
       if(ind % 2 == 0){
           row.style.background="Teal";
       }
        ind++;
    }

}
