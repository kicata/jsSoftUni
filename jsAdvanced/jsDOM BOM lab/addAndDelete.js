/**
 * Created by k.asenov on 28.3.2017 ã..
 */

    function addItem(){
        "use strict";
        let text=document.getElementById("newText").value;
        let li = document.createElement("li");
        let txt= document.createTextNode(text+ " ");
        li.appendChild(txt);
        let span= document.createElement("span");
        span.innerHTML='<a href="#">[Delete]</a>';
        span.addEventListener("click",deleteItem, false);
        li.appendChild(span);
        document.getElementById("items").appendChild(li);

        function deleteItem(){
            let li = this.parentNode;
            let ul =document.getElementById("items");
            ul.removeChild(li);
        }
    }


